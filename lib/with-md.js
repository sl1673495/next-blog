import React from 'react'
import marked from 'marked'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const Highlight = dynamic(() => import('react-highlight'))

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
})

export default function WithPost(options) {
  const { html: rawHtml, title } = options
  const html = decodeURIComponent(rawHtml)
  return () => (
    <Layout>
      <h1>{title}</h1>
      <Highlight innerHTML>{html}</Highlight>
    </Layout>
  )
}
