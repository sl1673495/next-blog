/**
 * 生成nextjs识别的pages
 */
const fs = require('fs')
const path = require('path')
const marked = require('marked')
const { mdDir, pageDir } = require('../config')
const { clean } = require('./utils')

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
})

module.exports = (blogs) => {
  // 清空pages文件夹
  // clean(pageDir)

  const mdPaths = fs.readdirSync(mdDir)
  mdPaths.forEach((mdPath) => {
    const mdContent = fs.readFileSync(path.join(mdDir, mdPath)).toString()
    // pages下的页面根据id命名
    const mdId = Number(mdPath.replace('.md', ''))
    const blog = blogs.find(({ id }) => id === mdId)

    const { body, ...restBlog } = blog

    if (blog) {
      const pageContent = `
      import withMd from '../../lib/with-md'

      export default withMd({
        blog: ${JSON.stringify(restBlog)},
        html: \`${encodeURIComponent(marked(mdContent))}\`,
      })
    `
      const blogDir = path.join(pageDir, `${mdId}`)
      clean(blogDir)
      fs.writeFileSync(path.join(blogDir, 'index.jsx'), pageContent, 'utf8')
    }
  })
}
