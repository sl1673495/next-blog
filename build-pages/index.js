const { withOra } = require('./utils')
const syncBlogs = require('./sync')
const pageBuilder = require('./page-builder')
const indexBuilder = require('./index-builder')

const start = async () => {
  // 同步github上的blogs
  const blogs = await withOra(syncBlogs, '正在同步博客中...')
  pageBuilder(blogs)
  indexBuilder(blogs)
}

start()
