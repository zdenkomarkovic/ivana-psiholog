import Link from "next/link";
import Image from "next/image";

export default function BlogPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Najnovije sa bloga
        </h2>

        <Link href="/blog/tiranija-trebanja-perfekcionizam" className="group">
          <article className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[300px] md:h-full">
                <Image
                  src="/images/arrangement-desk-elements-with-empty-notepad.jpg"
                  alt="Perfekcionizam"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors text-left">
                  Tiranija trebanja - perfekcionizam
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  Perfekcionizam može delovati kao snaga – ambicija, težnja ka
                  izvrsnosti. Ipak, ispod tog sloja često se krije težina:
                  osećaj da nikada nismo dovoljno dobri.
                </p>
                <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Pročitaj više
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
