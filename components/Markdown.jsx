import React from 'react'
import Highlight from 'react-highlight'

export default function Markdown(options) {
  const { html: rawHtml } = options
  const html = decodeURIComponent(rawHtml)
  return (
    <div className="markdown-body">
      <Highlight innerHTML>{html}</Highlight>
    </div>
  )
}
