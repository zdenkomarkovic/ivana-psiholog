import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
        <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Telefon</h3>
          <a
            href="tel:+381628190812"
            className="text-primary hover:text-secondary transition-colors"
          >
            +381 62 819 0812
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
        <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Email</h3>
          <a
            href="mailto:ivanapericin@yahoo.com"
            className="text-primary hover:text-secondary transition-colors break-all"
          >
            ivanapericin@yahoo.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Lokacija</h3>
          <p>Beograd, Srbija</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
        <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Radno vreme</h3>
          <p>Po dogovoru</p>
        </div>
      </div>
    </div>
  );
}
