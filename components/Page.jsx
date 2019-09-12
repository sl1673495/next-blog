import React from 'react'
import Markdown from './Markdown'
import Layout from './Layout'

export default function Page(props) {
  const { html, blog, comments } = props
  const { title, html_url } = blog

  const renderBody = () => {
    return (
      <div className="markdown-body">
        <h1 className="title">{title}</h1>
        <Markdown html={html} />
        <div className="links">
          <a target="blank" href={html_url}>去github讨论</a>
        </div>
        <style jsx>{`
            .title {
              display: flex;
              color: var(--textNormal);
            }

            .links a {
              text-decoration: underline;
            }
          `}
        </style>
      </div>
    )
  }

  const renderComments = () => {
    const hasComments = comments.length !== 0

    return hasComments ? (
      <div className="comments">
        <h3>评论区({comments.length})</h3>
        {comments.map((comment) => {
          const { user, id } = comment
          return (
            <div key={id} className="comment">
              <div className="user">
                <img alt="头像" className="avatar" src={user.avatar_url} />
                <a href={user.html_url} target="blank" className="login">
                  {user.login}
                </a>
              </div>
              <Markdown html={comment.html} />
            </div>
          )
        })}
        <style jsx>{`
            .comments {
              margin-top: 48px;
            }

            .comment {
              margin-bottom: 32px;
            }

            .comment:not(:last-child) {
              border-bottom: 1px solid #eee;
            }

            .user {
              display: flex;
              align-items: center;
              margin-bottom: 16px;
            }

            .login {
              color: var(--textLink);
              text-decoration: none;
            }

            .avatar {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              margin-right: 8px;
            }
          `}
        </style>
      </div>
    ) : null
  }

  return (
    <Layout>
      {renderBody()}
      {renderComments()}
      <style jsx global>
        {`
          body {
            --textTitle: rgb(255, 167, 196);
          }
        `}
      </style>
    </Layout>
  )
}
