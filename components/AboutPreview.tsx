import Image from "@/node_modules/next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-10  bg-background">
      <div className="max-w-[80rem] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl order-2 md:order-1 md:m-10">
          <Image
            src="/images/arrangement-desk-elements-with-empty-notepad.jpg"
            alt="Ivana Peričin"
            fill
            className="object-cover "
          />
        </div>

        <div className="space-y-4 order-1">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-left md:mb-8">
            Ivana Peričin
          </h2>
          <p className=" leading-relaxed">
            Psiholog, psihoterapeut i regionalni HR menadžer. Osnivač
            psihološkog savetovališta <strong>Put ka sebi</strong>.
          </p>
          <p className=" leading-relaxed">
            Po zanimanju sam antropolog, psiholog i psihoterapeut. Moja ljubav
            prema psihoterapiji motivisala me je da osnujem psihološko
            savetovalište Put ka sebi – prostor gde se dve perspektive spajaju
            ka zajedničkom cilju.
          </p>
          <p className=" leading-relaxed font-semibold">
            Moje vrednosti: dostojanstvo, sloboda, znanje i integritet.
          </p>
          <Link
            href="/o-meni"
            className=" flex w-fit ml-auto bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors mr-32"
          >
            Saznaj više
          </Link>
          <div className=" px-4 pt-5 ">
            <p className=" md:text-2xl pb-2">
              <Quote
                className="inline text-muted align-text-top mr-1"
                size={16}
              />
              <span className="italic">
                Postoji pukotina u svemu, tako ulazi svetlost.
              </span>
              <Quote
                className="inline text-muted align-text-top ml-1"
                size={16}
              />
            </p>
            <p className="text-muted font-moontime text-3xl md:text-5xl text-right pr-10">
              Leonard Cohen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
