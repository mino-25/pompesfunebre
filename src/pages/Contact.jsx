export default function Contact() {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-primary mb-6">Contactez-nous</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Nom" className="p-3 border rounded" />
        <input type="email" placeholder="Email" className="p-3 border rounded" />
        <textarea placeholder="Message" className="p-3 border rounded"></textarea>
        <button type="submit" className="px-6 py-3 bg-accent text-white rounded hover:bg-primary transition">
          Envoyer
        </button>
      </form>
    </section>
  )
}
