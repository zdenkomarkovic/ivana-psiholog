import Image from "next/image";

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

      <div className="relative px-8 w-[100rem] mx-auto md:mb-10">
        <h1 className="text-5xl md:text-8xl text-background mb-6">
          Put ka sebi
        </h1>
        <p className="text-2xl md:text-5xl text-background mb-8 font-medium">
          Psihološko savetovalište
        </p>
        <p className="text-xl md:text-4xl text-background/95 max-w-4xl mb-12 leading-relaxed">
          Psihoterapija je prostor susreta – proces u kojem se dva sveta spajaju
          ka zajedničkom cilju. Put ka znanju i uvidima koji nas dopunjuju,
          upotpunjuju, isceljuju i osnažuju.
        </p>
      </div>
    </section>
  );
}
