import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <h2 className="title">
        <Link href="/">
          <a>ssh的前端博客</a>
        </Link>
      </h2>
      <style jsx>{`
          .title {
            margin-top: 0;
            margin-bottom: 42px;
          }

          .title a {
            color: var(--textTitle);
            text-decoration: none;
          }
        `}
      </style>
    </div>
  )
}
