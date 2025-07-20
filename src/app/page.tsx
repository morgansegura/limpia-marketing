import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { getBaseMetadata } from "@/lib/metadata";

import { Container } from "@/components/layout/container/container";
import { Header } from "@/components/layout/header/header";
import { Page } from "@/components/layout/page/page";
import { Footer } from "@/components/layout/footer/footer";
import { Logo } from "@/components/layout/logo/logo";
import { Section } from "@/components/layout/section/section";
import { Hero } from "@/components/features/hero/hero";
import { CheckCircle2Icon, CheckIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EstimateModal } from "@/components/features/estimate/estimate-modal";

export const generateMetadata = (): Metadata => {
  return getBaseMetadata({
    title: "Home Page",
    description: "This is a simple landing page.",
    path: "/",
    imagePath: "/images/default-og.jpg",
  });
};

export default function Home() {
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
        <Section>
          <Hero src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg" />
        </Section>
        <Container>
          {/* <div className="flex flex-col items-center justify-center mt-6 bg-linear-to-b from-emerald-600 via-emerald-700 via-emerald-700 border-2 border-emerald-700  w-full py-6 rounded-xl">
            <h2 className="text-3xl font-bold text-white">
              A Higher Standard of Clean.
            </h2>
            <p className="text-lg font-medium">
              Affordable luxury claeaning. Save money, and Get your time back.
            </p>
          </div> */}
          <div className="py-12 grid gap-y-8 lg:grid-cols-2 lg:gap-x-24 lg:py-24">
            <div className="flex flex-col justify-center gap-y-2 max-w-sm lg:max-w-xl lg:gap-y-4">
              <h1 className="text-3xl leading-tighter lg:text-5xl font-semibold text-blue-900">
                Keeping Your Home Cleaner With Our Detail-Clean Rotation System
              </h1>
              <p>
                We use a careful system to deep clean each of your rooms on a
                rotating basis. This ensures your home is always thoroughly
                cleaned and sanitized, from the areas you use daily to that
                hard-to-clean grout
              </p>
            </div>
            <div className="grid gap-2 grid-cols-2 grid-rows-2">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
                  alt="Client Kitchen"
                  width={900}
                  height={600}
                />
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Client Living Room"
                  width={900}
                  height={600}
                />
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg"
                  alt="Client Bedroom"
                  width={900}
                  height={600}
                />
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/7045909/pexels-photo-7045909.jpeg"
                  alt="Client Bathroom"
                  width={900}
                  height={600}
                />
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div>
              <h2>What makes us different?</h2>
              <h3>We are from the community.</h3>
              <div className="grid gap-y-1">
                <p className="flex gap-x-1 bg-emerald-50 p-2 rounded-lg">
                  <span className="flex items-center w-6 h-6 bg-green-500 rounded-full">
                    <CheckIcon className="w-4 fill-green-300" />
                  </span>
                  We are a small business working to serve our community.
                </p>
                <p className="flex gap-x-1">
                  <span className="">
                    <CheckCircle2Icon />
                  </span>
                  We are a small business working to serve our community.
                </p>
                <p className="flex gap-x-1">
                  <span className="">
                    <CheckCircle2Icon />
                  </span>
                  We are a small business working to serve our community.
                </p>
              </div>
            </div>
            <div className="grid gap-x-12 grid-cols-2"></div>
          </div>
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
