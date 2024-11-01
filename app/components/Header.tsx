import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-8">
      <div className="font-semibold text-2xl text-center">Reynold Osei Adade</div>
      <div className="flex justify-between gap-4">
        <Navigation />
        <div className=" flex">Socials</div>
      </div>
    </header>
  )
}
