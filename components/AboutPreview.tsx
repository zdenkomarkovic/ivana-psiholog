import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/image0(1).jpeg"
              alt="Ivana Peričin"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Ivana Peričin
            </h2>
            <p className="text-xl leading-relaxed">
              Psiholog, psihoterapeut i regionalni HR menadžer. Osnivač
              psihološkog savetovališta <strong>Put ka sebi</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Po zanimanju sam antropolog, psiholog i psihoterapeut. Moja ljubav
              prema psihoterapiji motivisala me je da osnujem psihološko
              savetovalište Put ka sebi – prostor gde se dve perspektive spajaju
              ka zajedničkom cilju.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-primary">
              Moje vrednosti: dostojanstvo, sloboda, znanje i integritet.
            </p>
            <Link
              href="/o-meni"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
            >
              Saznaj više
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
