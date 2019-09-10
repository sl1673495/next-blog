const { withOra, initAxios } = require('./utils')
const syncBlogs = require('./sync')
const pageBuilder = require('./page-builder')
const indexBuilder = require('./index-builder')

const start = async () => {
  // 同步github上的blogs
  initAxios()
  const blogs = await withOra(syncBlogs, '正在同步博客中...')
  await withOra(() => pageBuilder(blogs), '正在生成博客页面中...')
  indexBuilder(blogs)
}
start()
