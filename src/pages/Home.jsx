import masjid from "../assets/masjid-home.jpg";

export default function Home() {
  return (
    
    <section>
      <div className="text-center py-40 bg-gray-50 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${masjid})` }}
      >
      
    
      {/* Overlay sombre pour que le texte soit lisible */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenu centré */}
      <div className="relative z-10">
        <h2 className="text-4xl font-serif font-bold text-white mb-4">OBSEQUES FRANCE MEDITERANNEE</h2>
        <p className="font-body text-gray-200 max-w-xl mx-auto">
          Nous vous accompagnons avec dignité et bienveillance dans ces moments difficiles.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="px-6 py-3 bg-accent text-white rounded-full hover:bg-primary transition"
          >
            Nous contacter
          </a>
        </div>
      </div>
     </div>
     <div>
      <h2>Notre Accompagnement</h2>
      <p>Du début à la fin des démarches et de la suivie funéraires</p>
     </div>
    </section>
  );
}
