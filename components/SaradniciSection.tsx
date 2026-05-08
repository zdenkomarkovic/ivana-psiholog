import Link from "next/link";
import Image from "next/image";

const saradnici = [
  {
    naziv: "Nutricionističko savetovalište Biljana Mladenović",
    url: "https://nutricionistabiljana.com/",
    logo: "/biljana.png",
  },
  {
    naziv: "Med Medik ordinacija",
    url: "https://www.medmedik.rs/",
    logo: "/MedMedik.png",
  },
  {
    naziv: "Institut za praktičnu humanistiku",
    url: "https://iph.edu.rs/",
    logo: "/institut.gif",
  },
  {
    naziv: "Edumaris – Centar za ishranu",
    url: "https://edumaris.rs/",
    logo: "/edumaris.PNG",
  },
];

export default function SaradniciSection() {
  return (
    <section className="py-10 md:py-20 bg-muted">
      <div className="max-w-[80rem] mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-10 md:mb-16">
          Saradnici
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saradnici.map((s) => (
            <Link
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card shadow hover:shadow-lg hover:border-primary transition-all gap-4"
            >
              <div className="relative w-full h-32">
                <Image
                  src={s.logo}
                  alt={s.naziv}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                {s.naziv}
              </span>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors mt-auto self-end inline-flex items-center gap-1">
                Poseti
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm6.75-3a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.06l-6.22 6.22a.75.75 0 0 1-1.06-1.06L15.44 3H11a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
