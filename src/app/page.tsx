import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer/>
    </div>
  );
}
