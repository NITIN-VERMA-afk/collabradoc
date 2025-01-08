import { Metadata } from "next";
import PricingCards from "./pricing-cards";
import PricingComparison from "./pricing-comparison";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing | Collaborative Editor",
  description: "Choose the perfect plan for your collaborative editing needs",
};

export default function PricingPage() {
  return (
    <>
    <Navbar/>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Choose the plan that's right for you and your team
        </p>
        <PricingCards />
        <PricingComparison />
      </div>
      <Footer/>
    </>
  );
}
