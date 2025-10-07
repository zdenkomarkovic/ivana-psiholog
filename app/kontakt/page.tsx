import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function KontaktPage() {
  return (
    <main className="min-h-screen  pb-16">
      <div className="bg-primary py-10"> </div>
      <div className="max-w-6xl mx-auto py-8 px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Kontakt
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 text-left">
                Kontaktirajte me
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Ukoliko imate pitanja ili želite da zakažete termin, slobodno me
                kontaktirajte putem telefona, email-a ili kontakt forme.
                Odgovoriću vam u najkraćem mogućem roku.
              </p>
            </div>

            <ContactInfo />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-6 text-left">
              Pošaljite poruku
            </h2>
            <ContactForm />
          </div>
        </div>

        <div className="bg-secondary/10 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Zakazivanje termina
          </h3>
          <p className="text-lg leading-relaxed">
            Termini se zakazuju telefonski ili putem email-a. Molim vas da
            prilikom zakazivanja navedete kratki opis razloga dolaska kako bih
            mogla da vam obezbedim odgovarajuće vreme i prostor za razgovor.
          </p>
        </div>
      </div>
    </main>
  );
}
