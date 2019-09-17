const path = require('path')

const mdDir = path.resolve(__dirname, './md')
const pageDir = path.join(__dirname, './pages')

module.exports = {
  mdDir,
  pageDir,
  // 用于更改标题上的用户信息
  user: {
    name: 'ssh',
  },
  // 用于同步github的博客
  repo: {
    owner: 'sl1673495',
    name: 'blogs',
  },
  // 可选 如果申请了github Oauth app的话
  // 可以填写用于取消github请求限制
  client_id: '',
  client_secret: '',
}
