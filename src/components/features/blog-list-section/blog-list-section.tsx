import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { synopsis } from "@/lib/utils/synopsis";

import { Heading } from "@/components/ui/heading/heading";
import { Typography } from "@/components/ui/typography/typography";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section/section";

import "./blog-list-section.css";
import { Container } from "@/components/layout/container/container";

type TBlogListSectionProps = {
  className?: string;
};

export function BlogListSection({ className }: TBlogListSectionProps) {
  const content = {
    heading: "",
    description: "",
    cards: [
      {
        id: "0",
        href: "",
        description:
          "Consumers increasingly demand non-toxic cleaning that’s safe for families, pets, and the environment. In San Diego, our outdoor lifestyle and health-minded residents are leading the charge. Limpia’s Limpia Method™, with EPA Safer Choice products and biodegradable tools, delivers green clean without sacrificing quality.",
        heading:
          "Why Eco‑Friendly Cleaning Is a Non‑Negotiable for San Diego Homes",
        image: {
          src: "/images/cleaning-image1.jpg",
          alt: "Limpia cleaning crew member smiling",
          width: 800,
          height: 533,
        },
      },
      {
        id: "1",
        href: "",
        description:
          "Consumers increasingly demand non-toxic cleaning that’s safe for families, pets, and the environment. In San Diego, our outdoor lifestyle and health-minded residents are leading the charge. Limpia’s Limpia Method™, with EPA Safer Choice products and biodegradable tools, delivers green clean without sacrificing quality.",
        heading: "Why Flexible Plans Are the New Norm",
        image: {
          src: "/images/cleaning-image1.jpg",
          alt: "Limpia cleaning crew member smiling",
          width: 800,
          height: 533,
        },
      },
      {
        id: "2",
        href: "",
        description:
          "Online cleaning hacks can be tempting—but many risk damaging surfaces or health. In San Diego’s humid climate, following the wrong tip could worsen mildew or warping. We dispel five viral myths and show how Limpia handles cleaning safely.",
        heading: "Viral Cleaning Hacks That Experts Warn Against",
        image: {
          src: "/images/cleaning-image1.jpg",
          alt: "Viral Cleaning Hacks That Experts Warn Against",
          width: 800,
          height: 533,
        },
      },
    ],
  };

  return (
    <Section className={cn("blog-list-section", className)}>
      <Container>
        <div className="blog-heading-block">
          <div>
            <Typography className="kicker" as="span">
              Advice and Tips
            </Typography>
          </div>

          <Heading as="h2" size="xl">
            Discover expert cleaning tips & service updates
          </Heading>
        </div>

        <div className="blog-list">
          {content.cards.map(({ description, heading, href, id, image }) => (
            <Link href={href} className="blog-list-card" key={id}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
              <div className="content">
                <Heading size="xs">{heading}</Heading>
                <Typography className="description" size="sm">
                  {synopsis(description, 130, "...")}
                </Typography>
                <Button size="sm" className="button button-accent-blue">
                  <FaArrowRightLong />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
