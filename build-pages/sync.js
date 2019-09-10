/**
 * 同步github上的blogs
 */
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const { clean } = require('./utils')
const { owner, name, mdDir } = require('../config')

const GITHUB_BASE_URL = 'https://api.github.com'
module.exports = async () => {
  // 清空md文件夹
  clean(mdDir)

  // 请求github博客内容
  const { data: blogs } = await axios.get(
    `${GITHUB_BASE_URL}/repos/${owner}/${name}/issues`,
  )

  // 创建md文件
  blogs.forEach((blog) => {
    fs.writeFileSync(path.join(mdDir, `${blog.id}.md`), blog.body, 'utf8')
  })

  return blogs
}
