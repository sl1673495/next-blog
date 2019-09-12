/**
 * 生成nextjs识别的pages
 */
const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')
const axios = require('axios')
const {
  mdDir, pageDir,
} = require('../config')
const { rebuild, copyFolder } = require('./utils')

const md = new MarkdownIt({
  html: true,
  linkify: true,
})

const handleMarkdownBody = (body) => {
  return encodeURIComponent(md.render(body))
}

const pageTemplateDir = path.resolve(__dirname, '../pages-template')

module.exports = async (blogs) => {
  // 清空pages文件夹
  rebuild(pageDir)
  // 把pages-template目录的模板拷贝到pages下
  await copyFolder(pageTemplateDir, pageDir)

  const mdPaths = fs.readdirSync(mdDir)
  const convertMdToJSX = async (mdPath) => {
    const mdContent = fs.readFileSync(path.join(mdDir, mdPath)).toString()
    // pages下的页面根据id命名
    const mdId = Number(mdPath.replace('.md', ''))
    const blog = blogs.find(({ id }) => id === mdId)

    if (blog) {
      // body已经在md文件夹内了 不需要了
      const { body, ...restBlog } = blog
      const { comments_url } = restBlog

      // 获取评论信息
      const { data: comments } = await axios.get(comments_url)
        .catch((err) => {
          console.error('评论生成失败，', err)
        })

      // 处理评论的markdown文本 并且写入到html字段中
      comments.forEach(({ body: commentBody }, index) => {
        const commentHtml = handleMarkdownBody(commentBody)
        comments[index].html = commentHtml
      })

      // 页面的jsx
      const pageContent = `
      import Page from '../components/Page'

      const pageProps = {
        blog: ${JSON.stringify(restBlog)},
        comments: ${JSON.stringify(comments)},
        html: \`${handleMarkdownBody(mdContent)}\`,
      }

      export default () => <Page {...pageProps}/>
    `
      // 写入文件
      fs.writeFileSync(path.join(pageDir, `${mdId}.jsx`), pageContent, 'utf8')
    }
  }

  const tasks = mdPaths.map(convertMdToJSX)
  await Promise.all(tasks)
}
