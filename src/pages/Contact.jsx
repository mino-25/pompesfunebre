import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Titre + Introduction */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-700 font-body max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour vous accompagner
            avec bienveillance et discrétion. N’hésitez pas à nous écrire ou à
            nous joindre directement par téléphone.
          </p>
        </motion.div>

        {/* Contenu principal */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <motion.form
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Nom"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-third"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-third"
            />
            <textarea
              placeholder="Votre message..."
              rows="5"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-third"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-third text-white rounded hover:bg-primary transition"
            >
              Envoyer
            </button>
          </motion.form>

          {/* Coordonnées */}
          <motion.div
            className="flex flex-col justify-center bg-white p-8 rounded-xl shadow-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-primary mb-6">
              Nos coordonnées
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Phone className="text-third" />
                <span>01 98 73 65 65</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-third" />
                <span>pompefunebre@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-third" />
                <span>25 Rue de la Paix, 93000 Bobigny</span>
              </li>
            </ul>

            <div className="mt-8">
              <iframe
                title="carte"
                className="w-full h-64 rounded-md shadow"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.336106144051!2d2.439!3d48.910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c9c7!2sBobigny!5e0!3m2!1sfr!2sfr!4v0000000000000"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
