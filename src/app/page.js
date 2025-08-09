import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import AboutUs from "@/components/home/about-us";
import Features from "@/components/home/features";
import Preview from "@/components/home/preview";
import WhyChooseUs from "@/components/home/why-choose";
import Pricing from "@/components/home/pricing";
import Reviews from "@/components/home/reviews";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <Preview />
      <WhyChooseUs />
      <Pricing />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
