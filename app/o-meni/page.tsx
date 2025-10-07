import ProfileSection from "@/components/ProfileSection";
import QuoteBox from "@/components/QuoteBox";
import PageHero from "@/components/PageHero";

export default function OMeni() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Zdravo, moje ime je Ivana Peričin"
        subtitle="Po zanimanju sam antropolog, psiholog i psihoterapeut."
        imageSrc="/images/beautiful-scenery-fascinating-underwater-world-island-bonaire-caribbean.jpg"
        imageAlt="Ivana Peričin"
      />

      <div className="max-w-[80rem] space-y-6 mx-auto px-4 md:px-8 py-8 md:py-16">
        <p className="leading-relaxed">
          Svoje akademsko putovanje započela sam kroz antropologiju, da bih
          nakon diplomiranja nastavila dalje usavršavanje u oblastima
          psihologije i filozofije. Oduvek me je fascinirao psihološki razvoj
          čoveka kroz vreme i različite društvene kontekste, pa me je upravo ta
          strast prirodno odvela u svet psihoterapije.
        </p>
        <p className="leading-relaxed">
          Tokom master studija iz primenjene psihologije upoznajem se sa
          integrativnom psihoterapijom, što je obeležilo moj dalji profesionalni
          pravac. Danas radim kao regionalni HR menadžer za Zapadni Balkan i kao
          psihoterapeut.
        </p>
        <p className="leading-relaxed">
          Moja ljubav prema psihoterapiji motivisala me je da osnujem psihološko
          savetovalište <strong>Put ka sebi</strong>.
        </p>
      </div>
      <div className="mb-8 md:mb-16 bg-[#484039] py-8 md:py-16">
        <ProfileSection
          imageSrc="/images/image0(1).jpeg"
          imageAlt="Ivana Peričin"
          imagePosition="right"
          imageAspect="aspect-[10/11] "
          mobileImageFirst={false}
        >
          {" "}
          <p className="leading-relaxed border-b border-t py-6 md:py-12 border-background text-background ">
            <strong>Put ka sebi </strong>nastao je kao rezultat višegodišnjeg
            rada sa klijentima, kroz različite teme i sa različitim motivima.
            Kroz sve priče koje su oživele u tim terapijskim procesima
            provlačila se jedna zajednička nit – pitanja introspektivnog
            istraživanja i samospoznaje, razvijanje autentičnosti, lične
            transformacije, pitanja rasta i motivacije. Upravo nas je ta nit
            uvek vraćala sebi, ka dubljem razumevanju sopstvenog života i
            potencijala. Tako je započela ova priča, kao posledica i kao
            motivacija da pronađemo sebe i vratimo se sebi.
          </p>
        </ProfileSection>
      </div>
      <div className="mb-8 md:mb-16 max-w-7xl mx-auto px-4 md:px-8">
        <QuoteBox>
          Psihoterapija je za mene prostor susreta – proces u kojem se dva
          sveta, dve perspektive spajaju ka zajedničkom cilju. To je put ka
          znanju i uvidima koji nas dopunjuju, upotpunjuju, isceljuju i
          osnažuju.
        </QuoteBox>
      </div>
      <div className="mb-8 md:mb-16 text-primary">
        <ProfileSection
          imageSrc="/images/beach-view-with-ocean-water.jpg"
          imageAlt="Radni prostor"
          imagePosition="left"
          mobileImageFirst={false}
        >
          <p className="leading-relaxed border-t pt-6 md:pt-12 border-primary">
            Ukoliko bih trebala sebe da opišem kroz vrednosti koje me definišu i
            na koje se oslanjam u svom životu i radu to su:{" "}
            <strong>dostojanstvo, sloboda, znanje i integritet</strong>.
          </p>
          <p className="leading-relaxed border-b pb-6 md:pb-12 border-primaryborder-primary">
            Inspiraciju pronalazim u ljudima, putovanjima i pisanju, jer verujem
            da je svako iskustvo obogaćujuće za našu unutrašnju mapu sveta. Rad
            sa ljudima za mene je neiscrpan izvor učenja i zadovoljstva, ličnog
            i profesionalnog usavršavanja.
          </p>
        </ProfileSection>
      </div>
      <div className="mb-8 md:mb-16 text-primary border-t border-primary max-w-7xl px-4 md:px-8 mx-auto"></div>
      <div className="mb-8 md:mb-16 text-primary">
        <ProfileSection
          imageSrc="/images/corporate-business-handshake-business-partners.jpg"
          imageAlt="Radni prostor"
          imagePosition="right"
          title="Poslovni konsalting"
          mobileImageFirst={false}
        >
          <p className="leading-relaxed border-t pt-6 md:pt-12 border-primary">
            Kada je reč o <strong>poslovnom konsaltingu </strong> i mom
            angažovanju u okviru organizacija i kada bih trebala ukratko da
            sažmem svoje korporativno iskustvo rekla bih da korporacije razumem
            kao žive društvene organizme – sastavljene od različitih ličnosti,
            vrednosti i mehanizama funkcionisanja.
          </p>
          <p className="leading-relaxed border-b pb-6 md:pb-12 border-primaryborder-primary">
            One nisu odvojene od društva u kojem postoje, već ga istovremeno
            oblikuju i bivaju oblikovane njime. I baš tu, u spoju čoveka i
            korporacije, pronalazim prostor za dublje razumevanje savremenog
            života i njegovih izazova. Tu &quot;leže&quot; moja interesovanja.
          </p>
        </ProfileSection>
      </div>
      <div className="space-y-6 text-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8"></h2>
        <p className="leading-relaxed"></p>
      </div>
    </main>
  );
}
