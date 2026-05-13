import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Subjects from "@/components/Subjects";
import Features from "@/components/Features";
import Journey from "@/components/Journey";
import Eligibility from "@/components/Eligibility";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-soft-bg text-primary-dark overflow-hidden selection:bg-royal-purple/20 selection:text-royal-purple">
      <Navbar />
      <Hero />
      <About />
      <Subjects />
      <Features />
      <Journey />
      <Eligibility />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
