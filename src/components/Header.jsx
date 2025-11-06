import { Link } from "react-router-dom"
import { Phone, Mail, Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo-pf.png"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
      {/* Bande supérieure */}
      <div className="bg-accent text-white text-sm py-1 px-6 hidden md:flex justify-end gap-8 items-center">
        <div className="flex items-center gap-2"><Phone size={16}/> 01 48 50 25 92</div>
        <div className="flex items-center gap-2"><Mail size={16}/>agence.france.mediterranee@wanadoo.fr</div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 bg-white/90 backdrop-blur-sm">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo Pompes Funèbres" className="w-36 md:w-40"/>
        </Link>

        {/* Liens pour desktop */}
        <div className="hidden md:flex gap-8 text-gray-700 font-body">
          <Link to="/" className="hover:text-accent hover:underline transition">Accueil</Link>
          <Link to="/services" className="hover:text-accent hover:underline transition">Services</Link>
          <Link to="/about" className="hover:text-accent hover:underline transition">À propos</Link>
          <Link to="/contact" className="hover:text-accent hover:underline transition">Contact</Link>
        </div>

        {/* Bouton hamburger mobile */}
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-6 py-3 hover:bg-gray-100" onClick={()=>setOpen(false)}>Accueil</Link>
          <Link to="/services" className="block px-6 py-3 hover:bg-gray-100" onClick={()=>setOpen(false)}>Services</Link>
          <Link to="/about" className="block px-6 py-3 hover:bg-gray-100" onClick={()=>setOpen(false)}>À propos</Link>
          <Link to="/contact" className="block px-6 py-3 hover:bg-gray-100" onClick={()=>setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}
