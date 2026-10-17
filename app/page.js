import Contact from "@/components/Contact";
import Craft from "@/components/Craft";
import CustomCursor from "@/components/CustomCursor";
import { EnquiryProvider } from "@/components/EnquiryProvider";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Loader from "@/components/Loader";
import Marquee from "@/components/Marquee";
import Materials from "@/components/Materials";
import Process from "@/components/Process";
import ScrollLine from "@/components/ScrollLine";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Studio from "@/components/Studio";
import Work from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <Loader />
      <ScrollLine />
      <CustomCursor />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Marquee />
        <Intro />
        <Craft />
        <EnquiryProvider>
          <Materials />
          <Work />
          <Process />
          <Studio />
          <Contact />
        </EnquiryProvider>
      </main>
      <SiteFooter />
    </>
  );
}
