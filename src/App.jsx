import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkProcess from "./components/WorkProcess";
import PortfolioGrid from "./components/PortfolioGrid";
import CTABanner from "./components/CTABanner";
import BlogPreview from "./components/BlogPreview";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Testimonial from "./components/Testimonial";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-white via-indigo-50 to-green-50">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <About />
        <WorkProcess />
        <PortfolioGrid />
        <CTABanner />
        <BlogPreview />
        <Services />
        <Clients />
        <Testimonial />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
