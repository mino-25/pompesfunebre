import { motion } from "framer-motion";
import parc from "../assets/parc.jpg";
import ocean from "../assets/ocean.jpg"

export default function About() {
  const fadeUp = {
    hidden : {opacity : 0 , y:20},
    visible : {opacity: 1, y:0, transition: {duration:0.9}}
  }
  return (
    <section className="container mx-auto py-20 ">
      <motion.section
        className="text-center mb-20"
        variants={fadeUp}
        initial = "hidden"
        whileInView="visible"
        viewport={{once : true }}
      >
        <h2 className="text-3xl font-bold font-serif text-primary mb-6">À PROPOS</h2>
        <p className="text-gray-700 font-body max-w-xl mx-auto">
          Notre entreprise familiale vous accompagne depuis plusieurs générations avec respect et bienveillance.
        </p>
      </motion.section>
      <motion.section
        className="flex flex-col md:flex-row items-center mb-24 gap-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once : true}}
      >
        <img 
          src={parc}
          alt="parc"
          className="rounded-md w-2/3 md:w-96 shadow-l" 
        />
        <div>
          <h3 className="text-2xl font-serif">Notre Histoire</h3>
          <p className="font-body">
              Depuis plusieurs décennies, Obsèques France Méditerranée accompagne les familles musulmanes 
              dans l’épreuve du deuil, avec respect, bienveillance et professionnalisme.
              Entreprise familiale et indépendante, nous sommes profondément attachés à nos valeurs humaines 
              et spirituelles, ainsi qu’à la transmission du savoir-faire funéraire au sein de notre famille 
              depuis plusieurs générations. Basés en Seine-Saint-Denis, nous avons bâti au fil des années une réputation 
              solide et sincère auprès des familles que nous avons accompagnées, dans le département et bien au-delà. 
              Notre engagement dépasse les frontières : nous mettons tout en œuvre pour faciliter les rapatriements à l’étranger
              lorsque les proches souhaitent que le défunt repose dans sa terre d’origine.
          </p>
        </div>
      </motion.section>
      <motion.section
        className="flex flex-col py-20 text-center bg-primary text-white mb-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once : true}}
      >
        <h3 className="text-3xl font-serif font-bold">Notre mission</h3>
        <p className="font-body">
          Dans les moments les plus difficiles, notre rôle est d’apporter soutien, clarté et sérénité.
          Nous prenons en charge l’ensemble des démarches administratives, religieuses et logistiques, 
          tout en veillant au respect scrupuleux des rites musulmans :
          de la toilette rituelle à la prière funéraire (Salat al-Janaza),
          jusqu’à l’inhumation ou au rapatriement.
        </p>
      </motion.section>
      <motion.section
        className="text-center mb-20"
      >
        <h3 className="text-3xl font-serif font-bold">Nos Valeurs</h3>
        <div className="grid md:grid-cols-4 gap-6 text-white">
          <motion.div
            className="flex items-center justify-center w-36 h-36 mx-auto mb-4 rounded-full shadow-lg text-center"
            style={{backgroundImage: `url(${ocean})`}}
          >
            <p className="font-body">Dignité </p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center w-36 h-36 mx-auto mb-4 rounded-full shadow-lg text-center"
            style={{backgroundImage: `url(${ocean})`}}
          >
            Sérénité
          </motion.div>
          <motion.div
            className="flex items-center justify-center w-36 h-36 mx-auto mb-4 rounded-full shadow-lg text-center"
            style={{backgroundImage: `url(${ocean})`}}
          >
            Bienveillance
          </motion.div>
          <motion.div
            className="flex items-center justify-center w-36 h-36 mx-auto mb-4 rounded-full shadow-lg text-center"
            style={{backgroundImage: `url(${ocean})`}}
          >
            Transparence
          </motion.div>
        </div>
      </motion.section>
    </section>
  )
}
