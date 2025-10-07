import Image from "next/image";

interface ServiceSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children: React.ReactNode;
}

export default function ServiceSection({
  title,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  children,
}: ServiceSectionProps) {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {imagePosition === "left" ? (
          <>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-left">
                {title}
              </h2>
              <div className="relative aspect-square  rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {children}
          </>
        ) : (
          <>
            <div className="order-2 md:order-1">{children}</div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-left">
                {title}
              </h2>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
