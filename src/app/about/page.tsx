'use client'

import AboutCards from "../components/aboutcards";
import About from "../components/abouthero";
import ContactForm from "../components/contactForms";
import InteractiveFooter from "../components/footer";
import Navbar from "../components/navbar";


export default function Service() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* About Section */}
        <About />

        {/* About Cards Section */}
        <AboutCards />

        {/* Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <InteractiveFooter />
    </div>
  );
}
