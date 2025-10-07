import BlogCard from "@/components/BlogCard";

const clanci = [
  {
    naslov: "Tiranija trebanja - perfekcionizam",
    slug: "tiranija-trebanja-perfekcionizam",
    opis: "Perfekcionizam može delovati kao snaga – ambicija, težnja ka izvrsnosti. Ipak, ispod tog sloja često se krije težina: osećaj da nikada nismo dovoljno dobri.",
    slika: "/images/arrangement-desk-elements-with-empty-notepad.jpg",
    datum: "2025-01-15",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Blog
        </h1>

        <div className="grid gap-12">
          {clanci.map((clanak) => (
            <BlogCard
              key={clanak.slug}
              naslov={clanak.naslov}
              slug={clanak.slug}
              opis={clanak.opis}
              slika={clanak.slika}
              datum={clanak.datum}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
