import Navigation from './Navigation'
import Socials from './Socials'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-8">
      <div className=" text-3xl text-center text-primary">Reynold Osei Adade</div>

      <div className="flex justify-between gap-4">
        <Navigation />
        <Socials />
      </div>
    </header>
  )
}
