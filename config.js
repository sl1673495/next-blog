const path = require('path')

const mdDir = path.resolve(__dirname, './md')
const pageDir = path.join(__dirname, './pages')

module.exports = {
  mdDir,
  pageDir,
  // 用于展示用户
  user: {
    name: 'ssh',
  },
  // 用于同步github的博客
  repo: {
    owner: 'sl1673495',
    name: 'blogs',
  },
  client_id: '6a1ff2700790b55ade14',
  client_secret: 'bddc92e3fc965fc285dd8b4e98bdd58640791b2c',
}
