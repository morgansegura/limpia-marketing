import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading/heading";

import "./hero.css";

type THeroProps = {
  src?: string; // can be for video or image
};

export function Hero({ src }: THeroProps) {
  const content = {
    kicker: "Locally Owned. Neighbor Approved.",
    heading: "San Diego’s Most Trusted Home Cleaning Service",
    description:
      "At Limpia, we treat your home like it’s our own. Our friendly, professional team uses The Limpia Method™ to deliver a deeper, more consistent clean — so you can relax, recharge, and enjoy your space.",
    buttons: [
      {
        className: "button bg-(--color-accent-blue)",
        text: "Discover More",
        href: "/",
      },
    ],
    image: {
      src,
      alt: "Limpia cleaning video",
    },
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div>
          <span className="hero-kicker">{content.kicker}</span>
        </div>
        <Heading className="hero-title" size="2xl">
          {content.heading}
        </Heading>
        <p className="hero-description">{content.description}</p>
        <div className="button-block">
          <Button size="lg" className="button button-accent-blue">
            Discover More <FaArrowRightLong />
          </Button>
          <Button size="lg" className="button button-accent-yellow">
            Our Services <FaArrowRightLong />
          </Button>
        </div>
      </div>
      <div className="hero-bg-image">
        <Image src={src ?? ""} alt={content.image.alt} fill />
      </div>
    </div>
  );
}
