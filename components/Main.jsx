import Link from 'next/link'

export default ({ blogs }) => {
  const { user } = blogs[0]
  const { html_url, avatar_url, login } = user
  const renderIntroduce = () => (
    <div className="introduce">
      <img className="avatar" src={avatar_url} alt="头像" />
      <p className="desc">
        Personal blog by{' '}
        <a rel="noopener noreferrer" target="_blank" href={html_url}>
          {login}
        </a>
        . I explain with words and code.
      </p>
      <style jsx>
        {`
          .introduce {
            display: flex;
            max-width: 300px;
            margin-bottom: 56px;
          }

          .avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            margin-right: 14px;
            flex-shrink: 0;
          }

          .desc {
            margin: 0;
          }

          .desc a {
            color: var(--textLink);
          }
        `}
      </style>
    </div>
  )

  const renderBlogs = () => {
    return (
      <>
        {blogs.map((blog) => {
          const { id, title } = blog
          return (
            <h3 key={id}>
              <Link href={`/${id}`} prefetch={false}>
                <a className="title-link">{title}</a>
              </Link>
            </h3>
          )
        })}
        <style jsx>
          {`
            .title-link {
              color: var(--textLink);
              text-decoration: none;
            }
          `}
        </style>
      </>
    )
  }

  return (
    <div className="blogs">
      {renderIntroduce()}
      {renderBlogs()}
    </div>
  )
}
