"use client";

import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "Ivana is experienced, people oriented and extraordinary inspirational leader, someone who created great atmosphere in our team– to work, improve ourself and accomplish wanted results. Working with her was exceptional opportunity, because she is both – leader and mentor. With her knowledge and positive energy, our team was highly inspired to enhance performance, motivation and team spirit. I would like to mention her strong skills in leadership, communication and people development. Ivana has my highest recommendation, because work with her was outstanding proffessional experience and also great pleasure. I`m so much grateful to be part of her team, she has always been there for me, especially when needed the most. Dear Iv, I hope we will have opportunity to work together again, thanks for everything!",
    author: "Nevena Drvodelja",
    role: "Corporate cooperation",
  },
  {
    text: "Ja svoj život delim na period pre i posle dolaska na terapiju kod Ivane. Kroz ovaj proces sam iscelila mnoge delove sebe, ohrabrila se i osnažila da napravim velike iskorake koji su promenili moj život. Zahvalna sam Ivani na kontaktu koji je lečio, na poverenju koje mi je poklonila i na trenucima kada je verovala u mene dok ja sama nisam mogla. Na podršci i osnaživanju koji su mi pomogli da zakoračim napred i donesem odluke koje su poboljšale moje partnerske, poslovne, prijateljske odnose - ali, pre svega, moj odnos prema sebi. Ogromna preporuka za sve koji traže partnera za promišljanje, postavljanje važnih pitanja, izazivanja na kritičko razmišljanje, kao i posvećenog terapeuta koji zna da drži prostor i kroz najteže procese, stvarajući sigurno mesto za istinsko isceljenje. Hvala ti što si mi ulepšala ovo putovanje zvano život - zauvek sam ti zahvalna!",
    author: "Katarina Obradović",
    role: "",
  },
  {
    text: "Želim da podelim svoje iskustvo sa Ivanom, koja mi je pomogla da sagledam dublje aspekte svog života i odnosa. Kroz naše seanse, uspela sam da shvatim razloge zbog kojih se katkad osećam nesrećno i zašto me neki ljudi ili situacije čine nesrećnim. Pomogla mi je da razumem koje životne vrednosti me navode da biram određene ljude za prijatelje i kako to utiče na moje emocionalno stanje, kao i na moj odnos sa partnerom. Jedna od najvrednijih lekcija koju sam naučila jeste kako biti zadovoljan sobom i preduprediti nepotrebne konflikte. Takođe, otkrila sam način da tumačim rečenice koje su moji roditelji često ponavljali i kako da se oslobodim njihovog tereta kada me ograničavaju. Ivana mi je pomogla da prepoznam svoju ulogu u svakom odnosu — porodičnom, poslovnom, prijateljskom — i pokazala mi načine kako da tu ulogu prihvatim ili promenim. Zahvaljujem se Ivani na strpljenju, razumevanju i profesionalnosti. Njena podrška mi je omogućila lični i emocionalni rast i promenila način na koji gledam na svet oko sebe. Toplo je preporučujem svima koji žele raditi na sebi i spoznati sebe.",
    author: "Andjela Vila",
    role: "",
  },
  {
    text: "Rad sa Ivanom mi je vratio veru u profesionalnost, etiku i humanost. Ivana je izuzetno posvećena procesu u koji donosi mnogo znanja, profesionalnosti ali i ljudske topline. Pomogla mi je mnogo da dodjem do sebe, da stanem za sebe kada to nisam ni slutila da ću biti u stanju, da razumem kako donosim odluke i biram ljude koje ukljucujem u svoj zivot. Ono što mi je najviše pomoglo jeste njen neosudjujući stav kada sam sa njom delila nešto što sam mislila da nikada neću moći da izustim. Rad sa Ivanom za mene je bio lekovit na mnogo nivoa i uvek bih je svakome preporučila za svaki oblik saradnje i rada na sopstvenom rastu. Ivana hvala ti do neba!",
    author: "M.S.",
    role: "",
  },
  {
    text: "Ivana je neko ko ume da sluša bez trunke osude, da napravi prostor da se sa njom osećaš jako sigurno. Na vrlo autentičan način me je vodila kroz ceo proces i mnogo sam joj zahvalan na tome jer me je naučila kako da to sam radim kada mi je potrebno. U radu sa njom imao sam osećaj da prolazi sa mnom sve ono što sam donosio na sesije i na toj posvećenosti sam joj mnogo zahvalan. Meni je rad sa Ivanom promenio život iz korena.",
    author: "P.J.",
    role: "",
  },
  {
    text: "Ivana mi je mnogo pomogla da razumem šta mi se dešava na poslu u psihološkom smislu. Odlično poznaje korporativni kontekst i tačno je mogla da razume sve o čemu sam pričao. Zahvalan sam joj na podršci i znanju koje je podelila sa mnom. Sesije sa Ivanom su jedna od boljih odluka",
    author: "Nikola R",
    role: "",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="max-w-[80rem] mx-auto px-0 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-10 md:mb-16">
          Utisci o saradnji sa mnom
        </h2>

        <div className="relative px-4 md:px-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-[90%] md:basis-[80%]"
                >
                  <div className="bg-card p-4 md:p-8  rounded-lg shadow-lg border border-border h-full flex flex-col justify-between overflow-y-auto">
                    <div className="flex-grow">
                      <Quote className="text-muted mb-2 md:mb-4 w-5 md:w-10 md:h-8" />
                      <p className="text-base md:text-lg italic mb-3 md:mb-6 text-foreground">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className=" border-t border-border pt-3 flex-shrink-0">
                      <p className="font-bold text-primary text-lg">
                        {testimonial.author}
                      </p>
                      {testimonial.role && (
                        <p className="text-muted text-sm mt-1">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex " />
          </Carousel>

          {/* Mobile navigation dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
