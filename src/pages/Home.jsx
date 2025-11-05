import { motion } from "framer-motion"
import masjid from "../assets/masjid-home.jpg";
import admin from "../assets/admin.jpg";
import priere from "../assets/priere.jpg";
import plane from "../assets/plane.jpg";
import valeurs from "../assets/valeur.jpg";
import { Phone } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section>

      {/* Hero */}
      <motion.div
        className="text-center py-40 bg-gray-50 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${masjid})`, backgroundAttachment: "fixed" }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.h1
            className="text-5xl font-serif font-bold text-white mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3 }}
          >
            OBSEQUES FRANCE MÉDITERRANÉE
          </motion.h1>
          <motion.p
            className="font-body text-gray-200 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            Entreprise familiale musulmane, nous accompagnons les familles avec respect,
            dignité et bienveillance dans toutes les démarches funéraires, en France et à l’international.
          </motion.p>
          <motion.div
            className="mt-8 "
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a
              href="/contact"
              className="px-6 py-3 bg-accent text-white rounded-full hover:bg-primary transition"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Notre accompagnement */}
      <motion.section
        className="py-20 bg-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Notre accompagnement</h2>
          <p className="font-body text-gray-700 max-w-2xl mx-auto">
            Nous prenons en charge toutes les étapes des obsèques, en respectant les rites musulmans et les volontés de la famille.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 px-6">
          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img 
              src={admin} 
              alt="Démarches administratives" 
              className="w-36 h-36 mx-auto mb-4 object-cover rounded-full shadow-lg"
            />
            <h3 className="font-serif text-xl text-primary mb-4">Démarches administratives</h3>
            <p className="font-body text-gray-600">
              Nous vous assistons dans toutes les formalités nécessaires auprès des mairies, hôpitaux et ambassades. <a 
                href="/services" 
                className="inline-block font-body text-third hover:underline"
              > En savoir plus...</a>
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src={priere} 
              alt="Rites funéraires musulmans" 
              className="w-36 h-36 mx-auto mb-4 object-cover rounded-full shadow-lg"
            />
            <h3 className="font-serif text-xl text-primary mb-4">Rites funéraires musulmans</h3>
            <p className="font-body text-gray-600">
              Organisation de la prière mortuaire (Salat al-Janaza) et préparation du défunt selon les traditions islamiques. <a 
                href="/services" 
                className="inline-block font-body text-third hover:underline"
              > En savoir plus...</a>
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img 
              src={plane} 
              alt="Rapatriement à l’étranger" 
              className="w-36 h-36 mx-auto mb-4 object-cover rounded-full shadow-lg"
            />
            <h3 className="font-serif text-xl text-primary mb-4">Rapatriement à l’étranger</h3>
            <p className="font-body text-gray-600">
              Nous assurons le rapatriement du corps vers le pays d’origine, en coordination avec les autorités locales et consulaires. <a 
                href="/services" 
                className="inline-block font-body text-third hover:underline"
              > En savoir plus...</a>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Nos valeurs */}
      <motion.section
        className="relative py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${valeurs})`, backgroundAttachment: "fixed" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6">Nos valeurs</h2>
          <p className="font-body text-lg leading-relaxed">
            Entreprise familiale, nous œuvrons avec sincérité et respect pour accompagner les familles musulmanes
            dans l’épreuve du deuil, en préservant la dignité du défunt et en soutenant les proches avec humanité.
          </p>
        </div>
      </motion.section>

      {/* Contact rapide */}
      <motion.section
        className="py-16 bg-primary text-white text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-5"><Phone size={35} /></div>
        <h2 className="text-2xl font-serif mb-4">Besoin d’un accompagnement immédiat ?</h2>
        <p className="font-body mb-6">Notre équipe est disponible pour vous aider.</p>
        <a
          href="/contact"
          className="px-6 py-3 bg-accent text-white rounded-full hover:bg-white hover:text-primary transition"
        >
          Contactez-nous
        </a>
      </motion.section>

    </section>
  );
}
