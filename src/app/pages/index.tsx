// pages/index.js

import Footer from '../components/footer'
import ServiceSection from '../components/serviceCard';
import ContactForm from '../components/contactForms';
import WeWork from '../components/wework';
import CoreValue from '../components/coreValue';
import ValuedCustomers from '../components/partners';
import HeroSection from '../components/hero';
import Navbar from '../components/navbar';
export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white text-black">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <HeroSection />
        <ValuedCustomers />
        <ServiceSection />
        <WeWork />
        <CoreValue />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
}

