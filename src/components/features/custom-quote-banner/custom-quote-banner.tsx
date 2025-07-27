import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading/heading";

import "./custom-quote-banner.css";

type TCustomQuoteBannerProps = {
  className?: string;
};

export function CustomQuoteBanner({ className }: TCustomQuoteBannerProps) {
  const content = {
    heading: "Book your cleaning service today for pristine results",
    image: {
      src: "/images/cta-img.png",
      alt: "Limpia cleaning crew member smiling",
      width: 379,
      height: 598,
    },
    button: {
      text: "Get Custom Quote",
      color: "accent-blue",
    },
  };

  return (
    <div className={cn("custom-quote-banner", className)}>
      <div className="custom-quote-grid">
        <div className="heading-block">
          <Heading as="h2">{content.heading}</Heading>
          <div className="button-block">
            <Button
              size="lg"
              className={`button button-${content.button.color}`}
            >
              {content.button.text} <FaArrowRightLong />
            </Button>
          </div>
        </div>
        <Image
          className="image"
          src={content.image.src}
          alt={content.image.alt}
          width={content.image.width}
          height={content.image.height}
        />
      </div>
    </div>
  );
}
