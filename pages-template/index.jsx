import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Main from '../components/Main'

#blogs
const Home = () => (
  <Layout>
    <Main blogs={blogs} />
  </Layout>
)

export default Home
