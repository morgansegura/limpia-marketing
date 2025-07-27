import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import "./about-section.css";
import { Heading } from "@/components/ui/heading/heading";
import { Typography } from "@/components/ui/typography/typography";

type TAboutSectionProps = {
  className?: string;
};

export function AboutSection({ className }: TAboutSectionProps) {
  const content = {
    image: {
      src: "/images/about-image.jpg",
      alt: "Limpia cleaning crew member smiling",
      width: 640,
      height: 553,
    },
    kicker: "About Us",
    heading: "Transforming spaces with expert care",
    subheading: "We Treat Your Space Like It’s Ours",
    description:
      "Every home is different — and so is every clean. We tailor our services to fit your space, your schedule, and your priorities. With eco-friendly products and a thoughtful approach, we leave your home or business fresh, healthy, and truly cared for.",
    list: [
      {
        text: "Locally owned & family-operated",
      },
      {
        text: "Eco-safe products that protect your home & family",
      },
      {
        text: "Flexible scheduling that works around your life",
      },
      {
        text: "Tailored cleaning — not one-size-fits-all",
      },
      {
        text: "Friendly, background-checked professionals",
      },
      {
        text: "Clear, honest pricing with no hidden fees",
      },
    ],
    button: {
      size: "lg",
      color: "accent-blue",
      text: "Get a Quote",
    },
  };

  return (
    <div className={cn("about-section", className)}>
      <div className="about-image">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          width={content.image.width}
          height={content.image.height}
        />
      </div>
      <div className="about-content">
        <div className="about-heading-block">
          <div>
            <Typography as="span" className="kicker">
              {content.kicker}
            </Typography>
          </div>
          <Heading as="h2" size="xl" className="heading">
            {content.heading}
          </Heading>
          <Heading as="h3" size="base" className="subheading">
            {content.subheading}
          </Heading>
          <Typography as="p" className="description">
            {content.description}
          </Typography>
        </div>
        <div className="about-content-list">
          <ul>
            {content?.list?.map(({ text }, index: number) => (
              <li key={index}>
                <span>
                  <FaCheckCircle />
                </span>
                <Typography as="span">{text}</Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className="button-block self-start">
          <Button size="lg" className={`button button-${content.button.color}`}>
            {content.button.text} <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
}
