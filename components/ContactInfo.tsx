import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-3 md:space-y-6 md:px-12">
      <div className=" p-4 bg-card rounded-lg border border-border">
        <h3 className="font-semibold text-lg mb-1">Telefon</h3>
        <div className="flex justify-center gap-2 items-center">
          <a
            href="tel:+381628190812"
            className="flex gap-2 items-center text-primary hover:text-secondary  hover:scale-105 transition-transform duration-300"
          >
            <Phone className="w-6 h-6 text-primary flex-shrink-0 " />
            +381 62 819 0812
          </a>
        </div>
      </div>
      <div className=" p-4 bg-card rounded-lg border border-border">
        <h3 className="font-semibold text-lg mb-1">Email</h3>
        <div className="flex justify-center gap-2 items-center">
          <a
            href="mailto:ivanapericin@yahoo.com"
            className="flex gap-2 items-center text-primary hover:text-secondary  hover:scale-105 transition-transform duration-300"
          >
            <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            ivanapericin@yahoo.com
          </a>
        </div>
      </div>
      <div className=" p-4 bg-card rounded-lg border border-border">
        <h3 className="font-semibold text-lg mb-1">Lokacija</h3>
        <div className="flex justify-center gap-2 items-center">
          <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          Beograd, Srbija
        </div>
      </div>
    </div>
  );
}
