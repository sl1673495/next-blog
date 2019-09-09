import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <h1 className="title">
        <Link href="/">
          <a>ssh的前端博客</a>
        </Link>
      </h1>
    </div>
  )
}
