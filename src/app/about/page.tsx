'use client'

import AboutCards from "../components/aboutcards";
import About from "../components/abouthero";
import ContactForm from "../components/contactForms";
import InteractiveFooter from "../components/footer";
import Navbar from "../components/navbar";


export default function Service() {
  return (<><div className="min-h-screen bg-gradient-to-br from-white  to-white text-black"><Navbar/><About /><AboutCards /><ContactForm/><InteractiveFooter/></div></>
   
  );
}
