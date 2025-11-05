import { motion } from "framer-motion";
import parc from "../assets/parc.jpg";
import ocean from "../assets/ocean.jpg";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <section className="overflow-hidden">
      {/* -------- TITRE INTRO -------- */}
      <motion.section
        className="text-center py-20 bg-gray-50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold font-serif text-primary mb-6">
          À PROPOS
        </h2>
        <p className="text-gray-700 font-body max-w-2xl mx-auto text-lg">
          Notre entreprise familiale vous accompagne depuis plusieurs générations
          avec respect, dignité et bienveillance, au service des familles musulmanes.
        </p>
      </motion.section>

      {/* -------- NOTRE HISTOIRE -------- */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 container mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={parc}
          alt="Notre histoire"
          className="rounded-2xl shadow-lg w-full md:w-[450px] object-cover"
        />
        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-3xl font-serif text-primary mb-6">
            Notre Histoire
          </h3>
          <p className="font-body text-gray-700 leading-relaxed">
            Depuis plusieurs décennies, <strong>Obsèques France Méditerranée</strong>
            accompagne les familles musulmanes dans l’épreuve du deuil, avec respect,
            bienveillance et professionnalisme.  
            <br /><br />
            Entreprise familiale et indépendante, nous transmettons notre savoir-faire
            de génération en génération, ancrés en <strong>Seine-Saint-Denis</strong>
            et reconnus bien au-delà pour notre engagement humain et spirituel.
            <br /><br />
            Nous œuvrons chaque jour pour préserver la dignité du défunt, apaiser la douleur
            des proches et honorer les traditions islamiques, que ce soit en France ou à l’étranger.
          </p>
        </div>
      </motion.section>

      {/* -------- NOTRE MISSION -------- */}
      <motion.section
        className="relative py-24 bg-primary text-white text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-serif font-bold mb-8">Notre mission</h3>
          <p className="font-body text-lg leading-relaxed opacity-90">
            Dans les moments les plus difficiles, notre mission est d’apporter
            <strong> soutien, clarté et sérénité</strong>.  
            Nous prenons en charge toutes les démarches administratives, religieuses
            et logistiques, en veillant au respect scrupuleux des rites musulmans :
            de la toilette rituelle à la prière funéraire (Salat al-Janaza),
            jusqu’à l’inhumation ou au rapatriement.
            <br /><br />
            Nous travaillons main dans la main avec les mosquées, les hôpitaux et
            les consulats pour assurer un accompagnement fluide et digne à chaque étape.
          </p>
        </div>
      </motion.section>

      {/* -------- NOS VALEURS -------- */}
      <motion.section
        className="py-24 bg-gray-50 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-serif font-bold mb-12 text-primary">
          Nos Valeurs
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-6">
          {[
            { title: "DIGNITÉ", color: "bg-primary/90" },
            { title: "SÉRÉNITÉ", color: "bg-accent/90" },
            { title: "BIENVEILLANCE", color: "bg-primary/80" },
            { title: "TRANSPARENCE", color: "bg-accent/80" },
          ].map((val, i) => (
            <motion.div
              key={i}
              className={`flex items-center justify-center w-40 h-40 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ${val.color} bg-cover bg-center`}
              style={{
                backgroundImage: `url(${ocean})`,
                backgroundBlendMode: "overlay",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-serif text-lg text-white font-semibold drop-shadow-lg">
                {val.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* -------- CONCLUSION -------- */}
      <motion.section
        className="py-20 bg-white text-center max-w-4xl mx-auto px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
          Notre engagement envers vous
        </h3>
        <p className="font-body text-gray-700 leading-relaxed">
          Chez <strong>Obsèques France Méditerranée</strong>, chaque famille est accueillie
          avec écoute, patience et respect. Nous savons que chaque deuil est unique et mérite
          une attention particulière.  
          <br /><br />
          Notre priorité est de soulager vos démarches et de vous permettre de vivre ce moment
          avec sérénité, entourés de professionnels à l’écoute, compétents et profondément humains.
        </p>
      </motion.section>
    </section>
  );
}
