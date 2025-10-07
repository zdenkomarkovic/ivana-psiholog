import Image from "next/image";

interface ProfileSectionProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  children: React.ReactNode;
  imagePosition?: "left" | "right";
  imageAspect?: string;
  mobileImageFirst?: boolean;
}

export default function ProfileSection({
  imageSrc,
  imageAlt,
  title,
  children,
  imagePosition = "left",
  imageAspect = "aspect-square",
  mobileImageFirst = true,
}: ProfileSectionProps) {
  const imageElement = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={1000}
      height={1000}
      className={`object-cover ${imageAspect} ${
        mobileImageFirst ? "order-first" : "order-last"
      } md:order-none`}
    />
  );

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-[100rem] mx-auto px-4 md:px-8">
      {imagePosition === "left" && imageElement}

      <div className="space-y-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            {title}
          </h2>
        )}
        {children}
      </div>

      {imagePosition === "right" && imageElement}
    </div>
  );
}
