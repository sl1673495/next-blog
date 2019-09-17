const { withOra, initAxios } = require('./utils')
const syncBlogs = require('./sync')
const pageBuilder = require('./page-builder')
const indexBuilder = require('./index-builder')

const start = async () => {
  initAxios()

  // 同步github上的blogs到md文件夹
  const blogs = await withOra(
    syncBlogs,
    '正在同步博客中...',
  )

  // 抓取评论，生成pages下的博客页面。
  await withOra(
    () => pageBuilder(blogs),
    '正在生成博客页面中...',
  )

  // 生成首页
  indexBuilder(blogs)
}
start()
