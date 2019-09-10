/**
 * 生成博客首页
 */
const fs = require('fs')
const path = require('path')

const templatePath = path.resolve(__dirname, '../pages-template/index.jsx')
const indexPath = path.resolve(__dirname, '../pages/index.jsx')
const templateContent = fs.readFileSync(templatePath, 'utf8')

module.exports = (blogs) => {
  const injectBlogs = `const blogs = ${JSON.stringify(
    blogs.map(({ body, ...restBlog }) => restBlog),
  )}`

  const indexJsx = templateContent.replace('// #blogs', injectBlogs)
  fs.writeFileSync(indexPath, indexJsx, 'utf8')
}
