import { Link } from "react-router-dom"
import { Phone, Mail} from "lucide-react"
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 p-4 text-center">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-col text-start mb-10">
          <Link to="/" className="hover:text-accent transition">Accueil</Link>
          <Link to="/services" className="hover:text-accent transition">Services</Link>
          <Link to="/about" className="hover:text-accent transition">À propos</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </div>
        <div className="flex flex-col md:items-end mb-20">
          <div className="flex items-center gap-2"><Phone size={16}/> 01 48 50 25 92</div>
          <div className="flex items-center gap-2"><Mail size={16}/>agence.france.mediterranee@wanadoo.fr</div>
        </div>
      </div>
      &copy; {new Date().getFullYear()} Obsèques France Méditarrenée. Tous droits réservés.
    </footer>
  )
}
