const withCss = require('@zeit/next-css')

// next.config.js增加代码
const isProd = process.env.NODE_ENV === 'production';

module.exports = withCss({
  assetPrefix: isProd ? '/next-blog/' : '',
})
