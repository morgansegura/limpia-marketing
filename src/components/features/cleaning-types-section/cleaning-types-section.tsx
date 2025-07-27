import { cn } from "@/lib/utils";
import Link from "next/link";

import "./cleaning-types-section.css";
import { Typography } from "@/components/ui/typography/typography";
import { Heading } from "@/components/ui/heading/heading";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

type TCleaningTypesSectionProps = {
  className?: string;
};

export function CleaningTypesSection({
  className,
}: TCleaningTypesSectionProps) {
  const content = {
    kicker: "Recommended Services",
    heading: "Our range of specialized cleaning services",
    description:
      "Whether you need routine cleanings or just a little extra help during a big life moment, Limpia is here for you. We're your neighbors, not a big chain — and we treat every home like it's our own.",
    cards: [
      {
        id: "0",
        heading: "Home Cleaning You Can Count On",
        description:
          "Weekly, bi-weekly, or just when life gets busy — we bring a consistent, thoughtful clean to every room in your house. With our local team and proven method, your home stays fresh, healthy, and cared for.",
        href: "",
        title: "",
      },
      {
        id: "1",
        heading: (
          <>
            Apartment TLC <span>(Tender Loving Clean)</span>
          </>
        ),
        description:
          "Small space, big care. If you rent or own, we specialize in giving apartments the attention they deserve — from kitchen corners to bathroom floors. Perfect for busy professionals, roommates, or anyone who just needs a break.",
        href: "",
        title: "",
      },
      {
        id: "2",
        heading: "Move-In Ready, Move-Out Clean",
        description:
          "Leave your old place spotless or walk into your new one feeling fresh. Our move-in/move-out service scrubs every surface so you don’t have to. Renters, homeowners, property managers — we’ve got you.",
        href: "",
        title: "",
      },
      {
        id: "3",
        heading: "One-Time Deep Clean, Just When You Need It",
        description:
          "Hosting family? Catching up after a busy month? We offer flexible, one-time cleanings built around your needs. No subscriptions. No pressure. Just a clean, calm space — fast.",
        href: "",
        title: "",
      },
    ],
  };

  return (
    <div className={cn("section cleaning-types-section", className)}>
      <div className="heading-block">
        <Typography as="span" className="kicker">
          {content.kicker}
        </Typography>
        <Heading as="h2" size="xl">
          {content.heading}
        </Heading>
        <Typography as="p">{content.description}</Typography>
      </div>
      <div className="cleaning-types-grid">
        {content.cards.map(({ id, description, heading, href, title }) => (
          <Link key={id} href={href} title={title}>
            <div className="cleaning-types-card">
              <Heading as="h3" size="xs">
                {heading}
              </Heading>
              <Typography as="p" size="sm">
                {description}
              </Typography>
              <div className="button-block">
                <Button size="lg" className="button button-light">
                  View Details <FaArrowRightLong />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="button-container">
        <Typography as="p" variant="caption" className="contact-script">
          Complete cleaning for your house. &nbsp;
          <Button className="button button-neutral" size="sm">
            Contact us now
          </Button>
        </Typography>
        <div>
          <Button className="button button-accent-blue" size="lg">
            View All Services <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
}
