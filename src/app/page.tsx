import Link from "next/link";
import { Metadata } from "next";

import { getBaseMetadata } from "@/lib/metadata";

import { Container } from "@/components/layout/container/container";
import { Header } from "@/components/layout/header/header";
import { Page } from "@/components/layout/page/page";
import { Footer } from "@/components/layout/footer/footer";
import { Logo } from "@/components/layout/logo/logo";
import { Hero } from "@/components/features/hero/hero";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EstimateModal } from "@/components/features/estimate/estimate-modal";
import { CleaningTypesSection } from "@/components/features/cleaning-types-section/cleaning-types-section";
import { CleaningSystemSection } from "@/components/features/cleaning-system-section/cleaning-system-section";
import { AboutSection } from "@/components/features/about-section/about-section";
import { CustomQuoteBanner } from "@/components/features/custom-quote-banner/custom-quote-banner";
import { BlogListSection } from "@/components/features/blog-list-section/blog-list-section";
import { FaqSection } from "@/components/features/faq-section/faq-section";
import { TestimonialsSection } from "@/components/features/testimonials-section/testimonials-section";
import { WhyUsSection } from "@/components/features/why-us-section/why-us-section";

export const generateMetadata = (): Metadata => {
  return getBaseMetadata({
    title: "Home Page",
    description: "This is a simple landing page.",
    path: "/",
    imagePath: "/images/default-og.jpg",
  });
};

export default function Home() {
  const navigation = {
    header: {
      nav: [
        {
          title: "Limpia Method",
          label: "Limpia Method",
          href: "/",
        },
        {
          title: "Cleaning Services",
          label: "Cleaning Services",
          href: "/",
        },
        {
          title: "About Us",
          label: "About Us",
          href: "/",
        },
      ],
    },
  };

  return (
    <Page>
      <Header>
        <Container className="header-container">
          <Logo className="header-logo" />

          <nav className="header-nav">
            <Link href="/" className="">
              Cleaning Services
            </Link>
            <Link href="/" className="">
              Why Hire Us?
            </Link>
            <Link href="/" className="">
              About Us
            </Link>

            <EstimateModal />
          </nav>
          <div className="lg:hidden flex flex-1 items-center justify-end">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="flex items-center text-blue-500 w-12 hover:text-blue-900 cursor-pointer" />
              </SheetTrigger>

              <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                  <nav className="header-nav-mobile">
                    <div>
                      <Link href="/" className="">
                        Cleaning Services
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="">
                        Why Hire Us?
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="">
                        About Us
                      </Link>
                    </div>
                    <div>
                      <Link href="/" className="button">
                        Free Esitmate
                      </Link>
                    </div>
                  </nav>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </Header>
      <main className="page-main">
        <Container className="grid gap-y-12 lg:gap-y-24">
          {/* Hero */}
          <Hero src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg" />

          {/* About Section */}
          <AboutSection />

          {/* Cleaning Types Section */}
          <CleaningTypesSection />

          {/* Cleaning System Section */}
          <CleaningSystemSection />

          {/* The Difference: Why Us */}
          <WhyUsSection />

          {/* Testimonials */}
          <TestimonialsSection />

          {/* FAQ */}
          <FaqSection />

          {/* Banner */}
          <CustomQuoteBanner />

          {/* Banner */}
          <BlogListSection />
        </Container>
      </main>
      <Footer>
        <Container className="footer-container">
          <div className="footer-logo">Logo</div>
          <nav className="footer-nav">
            <Link href="/" className="">
              Shop
            </Link>
            <Link href="/" className="">
              Projects
            </Link>
            <Link href="/" className="">
              Parks & Pitches
            </Link>
            <Link href="/" className="">
              Playmaker
            </Link>
          </nav>
        </Container>
      </Footer>
    </Page>
  );
}
