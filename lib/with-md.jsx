import React from 'react'
import Markdown from '../components/Markdown'
import Layout from '../components/Layout'

export default function WithPost(options) {
  const { html, blog, comments } = options
  const { title } = blog
  return () => (
    <Layout>
      <div className="markdown-body">
        <h1 className="title">
          {title}
        </h1>
        <Markdown html={html} />

        <div className="comments">
          {comments.map((comment) => {
            const { user } = comment
            return (
              <div className="comment">
                <div className="user">
                  <img className="avatar" src={user.avatar_url} />
                  <a href={user.html_url} className="login">{user.login}</a>
                </div>
                <Markdown html={comment.html} />
              </div>
            )
          })}
        </div>
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

        .comment {
          margin-bottom: 32px;
          border-bottom: 1px solid #eee;
        }

        .user {
          display: flex;
          align-items: center;
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
    </Layout>
  )
}
