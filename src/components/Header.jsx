import { Link } from "react-router-dom"
import logo from "../assets/logo-pf.png"

export default function Header() {
  return (
    <header className="bg-grey-100 shadow">
      <nav className="container mx-auto flex justify-between p-4 items-center">
        <img src={logo} alt="" className="w-40"/>
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