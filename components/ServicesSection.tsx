import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Psihoterapija",
    description:
      "Rad sa egzistencijalnim pitanjima, anksioznim poremećajima, depresijom, burnout sindromom, perfekcionizmom i drugim životnim izazovima.",
    image: "/images/landscape-palm-trees-pastel-colors.jpg",
    link: "/polje-rada/#psihoterapija",
  },
  {
    title: "Poslovno savetovanje",
    description:
      "Karijerno usmeravanje, liderske veštine, regrutacija, rešavanje konflikata i postavljanje profesionalnih ciljeva.",
    image: "/images/corporate-business-handshake-business-partners.jpg",
    link: "/polje-rada/#poslovno-savetovanje",
  },
  {
    title: "Korporativni well-being",
    description:
      "Programi za smanjenje stresa, jačanje otpornosti zaposlenih i balans između posla i privatnog života.",
    image: "/images/high-angle-minimalist-business-desk.jpg",
    link: "/polje-rada/#Korporativni-well-being",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10 md:py-20 bg-muted">
      <div className="max-w-[80rem] mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-10 md:mb-16">
          Oblasti rada
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
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
