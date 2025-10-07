import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  link,
}: ServiceCardProps) {
  return (
    <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
      <div className="relative h-[250px] mb-6 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-2xl font-bold text-primary mb-4 text-left">
        {title}
      </h3>
      <p className="text-lg mb-6 leading-relaxed">{description}</p>
      <Link
        href={link}
        className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2"
      >
        Detaljnije
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}
