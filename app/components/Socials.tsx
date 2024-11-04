import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { ReactElement } from 'react'

export default function Socials() {
  const socials: {
    name: string
    link: string
    icon: ReactElement
  }[] = [
    {
      name: 'Github',
      link: 'https://github.com/reynoldadade',
      icon: <IconBrandGithub size={24} />,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/radade/',
      icon: <IconBrandLinkedin size={24} />,
    },
  ]

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="hover:text-primary hover:font-semibold transition-all"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
