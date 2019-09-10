/**
 * 生成nextjs识别的pages
 */
const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')
const axios = require('axios')
const {
  mdDir, pageDir, client_id, client_secret,
} = require('../config')
const { rebuild } = require('./utils')

const md = new MarkdownIt({
  html: true,
  linkify: true,
})

const handleMarkdownBody = (body) => {
  return encodeURIComponent(md.render(body))
}

module.exports = async (blogs) => {
  // 清空pages文件夹
  // rebuild(pageDir)

  const mdPaths = fs.readdirSync(mdDir)
  mdPaths.forEach(async (mdPath) => {
    const mdContent = fs.readFileSync(path.join(mdDir, mdPath)).toString()
    // pages下的页面根据id命名
    const mdId = Number(mdPath.replace('.md', ''))
    const blog = blogs.find(({ id }) => id === mdId)

    // body已经在md文件夹内了 不需要了
    const { body, ...restBlog } = blog
    const { comments_url } = restBlog

    const { data: comments } = await axios.get(comments_url, {
      params: {
        client_id,
        client_secret,
      },
    })

    // 处理评论的markdown文本
    comments.forEach(({ body: commentBody }, index) => {
      const commentHtml = handleMarkdownBody(commentBody)
      comments[index].html = commentHtml
    })

    if (blog) {
      const pageContent = `
      import withMd from '../../lib/with-md'

      export default withMd({
        blog: ${JSON.stringify(restBlog)},
        comments: ${JSON.stringify(comments)},
        html: \`${handleMarkdownBody(mdContent)}\`,
      })
    `
      const blogDir = path.join(pageDir, `${mdId}`)
      rebuild(blogDir)
      fs.writeFileSync(path.join(blogDir, 'index.jsx'), pageContent, 'utf8')
    }
  })
}
