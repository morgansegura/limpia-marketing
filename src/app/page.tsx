import { Metadata } from "next";
import Link from "next/link";

import { getBaseMetadata } from "@/lib/metadata";

import { Container } from "@/components/layout/container/container";
import { Header } from "@/components/layout/header/header";
import { Page } from "@/components/layout/page/page";
import { Footer } from "@/components/layout/footer/footer";

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
          <div className="header-logo">Logo</div>
          <nav className="header-nav">
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
      </Header>
      <main className="page-main">
        <Container>Things in the center</Container>
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
