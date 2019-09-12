/**
 * 生成博客首页
 */
const fs = require('fs')
const path = require('path')

const indexPath = path.resolve(__dirname, '../pages/index.jsx')

module.exports = (blogs) => {
  const injectBlogs = JSON.stringify(
    blogs.map(({ body, ...restBlog }) => restBlog),
  )

  // 把blog数据注入到首页中
  const indexJsx = `
    import React from 'react'
    import Link from 'next/link'
    import Layout from '../components/Layout'
    import Main from '../components/Main'
    
    const blogs = ${injectBlogs}
    const Home = () => (
      <Layout>
        <Main blogs={blogs} />
      </Layout>
    )
    
    export default Home
  `
  fs.writeFileSync(indexPath, indexJsx, 'utf8')
}
