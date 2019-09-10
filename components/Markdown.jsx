import React from 'react'
import dynamic from 'next/dynamic'

const Highlight = dynamic(() => import('react-highlight'))

export default function Markdown(options) {
  const { html: rawHtml } = options
  const html = decodeURIComponent(rawHtml)
  return (
    <Highlight innerHTML>{html}</Highlight>
  )
}
