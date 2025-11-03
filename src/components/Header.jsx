import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-grey-100 shadow">
      <nav className="container mx-auto flex justify-between p-4 items-center">
        <h1 className="text-xl font-bold text-primary">PF</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-accent transition">Accueil</Link>
          <Link to="/services" className="hover:text-accent transition">Services</Link>
          <Link to="/about" className="hover:text-accent transition">À propos</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </div>
      </nav>
    </header>
  )
}