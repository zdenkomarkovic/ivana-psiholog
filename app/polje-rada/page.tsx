import BulletList from "@/components/BulletList";
import QuoteBox from "@/components/QuoteBox";
import PageHero from "@/components/PageHero";
import ProfileSection from "@/components/ProfileSection";

const terapijskeTeme = [
  "Egzistencijalna pitanja smisla, prolaznosti, životnih ciljeva (planova), ličnih vrednosti",
  "Partnerski odnosi (dileme)",
  "Porodični odnosi (prijateljski odnosi)",
  "Anksiozni poremećaji",
  "Blage depresije (PDD)",
  "Sagorevanje ili burnout sindrom",
  "Asertivna komunikacija",
  "Emocionalna regulacija",
  "Perfekcionizam i prokrastinacija",
  "Motivacija",
  "Samopouzdanje",
  "Osećanja krivice i stida",
  "Postavljanje ciljeva",
  "Donošenje odluka",
];
const poslovniTitle = "Poslovno savetovanje";

const poslovnoSavetovanje = [
  "Karijerno usmeravanje",
  "Liderske veštine - komunikacije, poslovna organizacija, upravljanje timovima",
  "Regrutacija (sve pozicije sa akcentom na C-level)",
  "Rešavanje konflikata (PEACE metoda i DILEMMA trening)",
  "Donošenje odluka",
  "Postavljanje profesionalnih ciljeva",
];

const wellbeingUsluge = [
  "Psihološko savetovanje i coaching",
  "Treninge iz oblasti upravljanja stresom, emocionalne inteligencije, komunikacije i mindful leadership-a",
  "Radionice za timove (saradnja, poverenje, motivacija)",
  "Preventivne i razvojne aktivnosti (ankete, edukacije menadžera, digitalni alati)",
  "Evaluaciju i KPI merenja uz preporuke za dalji razvoj",
];

export default function PoljeRada() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Polje rada"
        subtitle="Teme kojima se bavim u svom savetodavno-terapijskom radu"
        imageSrc="/images/spiral-notepad-pen-green-fake-fern-leaves-white-background.jpg"
        imageAlt="Polje rada"
      />
      <div className=" mx-auto py-8 md:py-16 space-y-8 md:space-y-16">
        {" "}
        <div id="psihoterapija">
          <ProfileSection
            imageSrc="/images/landscape-palm-trees-pastel-colors.jpg"
            imageAlt="Psihoterapija"
            imagePosition="left"
            imageAspect="aspect-square md:aspect-[10/13]"
            mobileImageFirst={false}
          >
            {" "}
            <BulletList items={terapijskeTeme} />
          </ProfileSection>{" "}
        </div>
        <div className="max-w-3xl mx-auto border-t border-primary"></div>
        <div id="poslovno-savetovanje">
          <ProfileSection
            title=""
            imageSrc="/images/corporate-business-handshake-business-partners.jpg"
            imageAlt="Poslovno savetovanje"
            imagePosition="right"
            imageAspect=""
            mobileImageFirst={false}
          >
            {" "}
            <BulletList items={poslovnoSavetovanje} title={poslovniTitle} />
          </ProfileSection>{" "}
        </div>
      </div>
      <div className="max-w-3xl mx-auto border-t border-primary"></div>
      <div className=" py-8 md:py-16">
        {/* <ServiceSection
          title="Poslovno savetovanje"
          imageSrc="/images/corporate-business-handshake-business-partners.jpg"
          imageAlt="Poslovno savetovanje"
          imagePosition="right"
        >
          <BulletList items={poslovnoSavetovanje} />
        </ServiceSection> */}

        <section id="Korporativni-well-being" className="mb-8 md:mb-16">
          <h3 className="md:text-4xl px-4 md:px-8 font-bold text-primary mb-8 text-center">
            Korporativni well-being konsalting
          </h3>

          <div className="mb-8 max-w-[80rem] mx-auto px-4 md:px-8">
            <QuoteBox>
              Well-being je ključ održivog rasta kompanije. Programi su
              osmišljeni tako da smanjuju stres, jačaju otpornost zaposlenih i
              doprinose balansu između posla i privatnog života – što direktno
              utiče na produktivnost i inovativnost timova.
            </QuoteBox>
          </div>
          <ProfileSection
            title=""
            imageSrc="/images/high-angle-minimalist-business-desk.jpg"
            imageAlt="psiholog ivana"
            imagePosition="left"
            imageAspect="aspect-[10/11] "
            mobileImageFirst={true}
          >
            {" "}
            <BulletList items={wellbeingUsluge} title={" Usluge uključuju:"} />
          </ProfileSection>
        </section>

        <div className="max-w-[80rem] mx-auto px-4 md:px-8">
          <div className="bg-primary text-primary-foreground p-3 md:p-6 rounded-lg text-center ">
            <p className=" leading-relaxed">
              Za sve detaljnije informacije o uslugama možete me kontaktirati
              putem <br className="" />{" "}
              <a
                href="/kontakt"
                className="underline font-semibold hover:text-accent transition-colors"
              >
                kontakt forme
              </a>
              , <br /> email-a{" "}
              <a
                href="mailto:ivanapericin@yahoo.com"
                className="underline font-semibold hover:text-accent transition-colors"
              >
                ivanapericin@yahoo.com
              </a>{" "}
              <br /> ili telefona{" "}
              <a
                href="tel:+381628190812"
                className="underline font-semibold hover:text-accent transition-colors"
              >
                +381 62 819 0812
              </a>
              .
            </p>
          </div>{" "}
        </div>
      </div>
    </main>
  );
}
