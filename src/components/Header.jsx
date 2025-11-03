import { Link } from "react-router-dom"
import logo from "../assets/logo-pf.png"

export default function Header() {
  return (
    <header className="bg-grey-100 shadow">
      <div className="bg-accent text-white">
        <ul className="flex justify-end gap-20 items-center">
          <li>01 98 73 65 65</li>
          <li>pompefunebre@gmail.com</li>
        </ul>
      </div>
      <nav className="container mx-auto flex justify-between p-1 items-center">
        <img src={logo} alt="" className="w-40 ml-5"/>
        <div className="flex gap-10 mr-10">
          <Link to="/" className="hover:text-accent transition">Accueil</Link>
          <Link to="/services" className="hover:text-accent transition">Services</Link>
          <Link to="/about" className="hover:text-accent transition">À propos</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </div>
      </nav>
    </header>
  )
}