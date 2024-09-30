import ContactForm from "../components/contactForms";
import ContactUsSection from "../components/contactusCard";
import InteractiveFooter from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white text-black">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        {/* Contact Us Section */}
        <ContactUsSection />
        
        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <InteractiveFooter />
    </div>
  );
}