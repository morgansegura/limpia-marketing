import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Heading } from "@/components/ui/heading/heading";
import { Typography } from "@/components/ui/typography/typography";

import "./faq-section.css";
import { Container } from "@/components/layout/container/container";

type TFaqSectionProps = {
  className?: string;
};

export function FaqSection({ className }: TFaqSectionProps) {
  const content = {
    kicker: "Common Questions",
    heading: "Here are a list of commonly asked questions",
    image: {
      src: "/images/faqs-image.jpg",
      alt: "Limpia cleaning crew member smiling",
      width: 640,
      height: 553,
    },
    faqs: [
      {
        id: "0",
        question: "1. Which cleaning services do you offer?",
        answer:
          "We offer a wide range of services including regular home cleaning, deep cleaning, move-in and move-out cleaning, Air BnB cleaning, and ofice cleaning.",
      },
      {
        id: "1",
        question: "2. Do I need to provide cleaning supplies?",
        answer: "You will never need to supply cleaning supplies.",
      },
      {
        id: "2",
        question: "3. Are your cleaning products eco-friendly?",
        answer: "You will never need to supply cleaning supplies.",
      },
      {
        id: "3",
        question: "4. Can I schedule recurring cleanings?",
        answer: "You will never need to supply cleaning supplies.",
      },
      {
        id: "4",
        question: "5. How can I re-schedule a cleaning if I need to?",
        answer: "You will never need to supply cleaning supplies.",
      },
    ],
  };

  return (
    <div className={cn("faq-section", className)}>
      <Container>
        <div className="faq-grid">
          <div className="accordion-block">
            <div className="heading-block">
              <Typography as="span" className="kicker">
                {content.kicker}
              </Typography>
              <Heading as="h2">{content.heading}</Heading>
            </div>
            <Accordion className="accordion" type="single" collapsible>
              {content.faqs.map(({ question, answer, id }) => (
                <AccordionItem key={id} className="accordion-item" value={id}>
                  <AccordionTrigger className="accordion-trigger">
                    <Heading as="h3" size="xs">
                      {question}
                    </Heading>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content">
                    <Typography as="p" size="base">
                      {answer}
                    </Typography>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Image
              className="image"
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
