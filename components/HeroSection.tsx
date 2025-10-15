import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-end justify-start">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image0(1).jpeg"
          alt="Hero pozadina"
          fill
          className="object-cover object-[center_15%]"
          priority
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      <div className="relative px-4 md:px-8 w-[80rem] mx-auto">
        <AnimatedSection>
          <div className="w-1/2 md:w-2/5 mb-24">
            <p className="text-white  md:text-2xl md:text-justify md:pr-5">
              <Quote
                className="inline text-muted align-text-top mr-1"
                size={16}
              />
              <span className="italic">
                Postati ono što jesi, to je težak, ali jedini zadatak dostojan
                čoveka.
              </span>
              <Quote
                className="inline text-muted align-text-top ml-1"
                size={16}
              />
            </p>
            <p className="text-muted font-moontime text-3xl md:text-5xl text-right pr-5">
              Seren Kjerkegor
            </p>
          </div>
          <h1 className="text-5xl md:text-8xl text-background mb-6">
            Put ka sebi
          </h1>
          <p className="text-2xl md:text-5xl text-background mb-8 font-medium">
            Psihološko savetovalište
          </p>
          <p className="text-xl md:text-3xl text-background/95 max-w-3xl mb-8 md:mb-12 leading-relaxed">
            Psihoterapija je prostor susreta – proces u kojem se dva sveta
            spajaju ka zajedničkom cilju. Put ka znanju i uvidima koji nas
            dopunjuju, upotpunjuju, isceljuju i osnažuju.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
