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
  const { html: rawHtml, blog } = options
  const { title } = blog
  const html = decodeURIComponent(rawHtml)
  return () => (
    <Layout>
      <div className="markdown-body">
        <h1 className="title">
          {title}
        </h1>
        <Highlight innerHTML>{html}</Highlight>
      </div>
      <style jsx global>{`
        body {
          --textTitle: rgb(255, 167, 196);
        }  
      `}
      </style>
      <style jsx>{`
        .title {
          display: flex;
          color: var(--textNormal);
        }
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        `}
      </style>
    </Layout>
  )
}
