import { motion } from "framer-motion";
import admin from "../assets/admin.jpg";
import priere from "../assets/priere.jpg";
import plane from "../assets/plane.jpg";
import enterrement from "../assets/cimetiere.jpg";

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">

        {/* Titre principal */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Nos Services Funéraires
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 font-body leading-relaxed">
            Nous vous accompagnons à chaque étape des obsèques, dans le respect des rites musulmans et des volontés de la famille.  
            Notre objectif est d’alléger votre charge mentale et émotionnelle en prenant soin de chaque détail, avec dignité et bienveillance.
          </p>
        </motion.div>

        {/* Bloc 1 - Cérémonie */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-24 gap-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={priere}
            alt="Cérémonie funéraire musulmane"
            className="md:w-1/2 w-full rounded-2xl shadow-lg object-cover h-[400px]"
          />
          <div className="md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Organisation des cérémonies religieuses
            </h3>
            <p className="text-gray-700 font-body leading-relaxed">
              Nous préparons la <strong>prière mortuaire (Salat al-Janaza)</strong> dans le respect complet des traditions islamiques.
              De la toilette rituelle à la mise en bière, chaque étape est assurée par notre équipe formée et bienveillante.  
              Nous travaillons en étroite collaboration avec les mosquées locales pour garantir une cérémonie paisible et digne.
            </p>
          </div>
        </motion.div>

        {/* Bloc 2 - Rapatriement */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center mb-24 gap-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Rapatriement à l’étranger
            </h3>
            <p className="text-gray-700 font-body leading-relaxed">
              Nous prenons en charge l’ensemble des démarches pour le rapatriement du corps vers le pays d’origine :
              coordination avec les autorités consulaires, obtention des autorisations et transport aérien sécurisé.  
              Vous pouvez compter sur notre expérience pour un accompagnement humain et administratif sans failles.
            </p>
          </div>
          <img
            src={plane}
            alt="Transport et rapatriement funéraire"
            className="md:w-1/2 w-full rounded-2xl shadow-lg object-cover h-[400px]"
          />
        </motion.div>

        {/* Bloc 3 - Démarches administratives */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-24 gap-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={admin}
            alt="Démarches administratives"
            className="md:w-1/2 w-full rounded-2xl shadow-lg object-cover h-[400px]"
          />
          <div className="md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Assistance administrative
            </h3>
            <p className="text-gray-700 font-body leading-relaxed">
              Nous vous guidons dans toutes les formalités légales et administratives : déclaration de décès,
              autorisations de transport, certificats et coordination avec les mairies, hôpitaux et consulats.
              Notre objectif est de vous simplifier chaque démarche, avec transparence et efficacité.
            </p>
          </div>
        </motion.div>

        {/* Bloc 4 - Inhumation */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Inhumation dans le respect du rite musulman
            </h3>
            <p className="text-gray-700 font-body leading-relaxed">
              Nous organisons l’enterrement selon les prescriptions islamiques :
              orientation vers la Qibla, inhumation dans un carré musulman et respect complet des volontés familiales.  
              Notre équipe veille à la dignité et à la sérénité de chaque étape du repos éternel.
            </p>
          </div>
          <img
            src={enterrement}
            alt="Enterrement musulman"
            className="md:w-1/2 w-full rounded-2xl shadow-lg object-cover h-[400px]"
          />
        </motion.div>

      </div>
    </section>
  );
}
