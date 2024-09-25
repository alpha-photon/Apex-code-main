import ContactForm from "../components/contactForms";
import ContactUsSection from "../components/contactusCard";
import InteractiveFooter from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white  to-white text-black">
      <Navbar/>
      <ContactUsSection/>
     <ContactForm/>
      <InteractiveFooter/>
      
    </div>
  );
}
