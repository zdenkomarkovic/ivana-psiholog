import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Psihoterapija",
    description:
      "Rad sa egzistencijalnim pitanjima, anksioznim poremećajima, depresijom, burnout sindromom, perfekcionizmom i drugim životnim izazovima.",
    image:
      "/images/spiral-notepad-pen-green-fake-fern-leaves-white-background.jpg",
    link: "/polje-rada",
  },
  {
    title: "Poslovno savetovanje",
    description:
      "Karijerno usmeravanje, liderske veštine, regrutacija, rešavanje konflikata i postavljanje profesionalnih ciljeva.",
    image: "/images/corporate-business-handshake-business-partners.jpg",
    link: "/polje-rada",
  },
  {
    title: "Korporativni well-being",
    description:
      "Programi za smanjenje stresa, jačanje otpornosti zaposlenih i balans između posla i privatnog života.",
    image: "/images/high-angle-minimalist-business-desk.jpg",
    link: "/polje-rada",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Oblasti rada
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
