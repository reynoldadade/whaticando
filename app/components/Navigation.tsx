import Link from 'next/link'

export default function Navigation() {
  const links: { name: string; link: string }[] = [
    { name: 'About', link: '/about' },
    { name: 'Usecases', link: '/usecases' },
    { name: 'Contact', link: '/contact' },
  ]
  return (
    <nav className="w-1/3">
      <ul className="flex gap-4">
        {links.map((link) => (
          <li
            key={link.name}
            className="hover:font-semibold"
          >
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
