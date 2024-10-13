'use client';
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
// import Image from 'next/image';
import { FaCode, FaDatabase, FaCloud, FaCogs, FaRocket, FaSearch } from 'react-icons/fa';

export default function CustomSoftwareDevelopment() {
  return (
    <><Navbar /><div className="container mx-auto px-4 py-16 my-14">

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          {/* <Image
      
      alt="Custom Software Development"
      layout="fill"
      objectFit="cover"
      className="opacity-50"
    /> */}
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold">Custom Software Development</h1>
          <p className="mt-4 text-lg font-light max-w-2xl mx-auto">
            Tailored software solutions to meet your business unique needs. From concept to deployment, we deliver high-quality, scalable, and user-friendly software.
          </p>
          <a href="#contact" className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Why Custom Software Development */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Custom Software Development?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">
          In a world where off-the-shelf software might not always meet your business growing demands, custom software development offers a flexible and scalable solution. Tailor-made software ensures you get exactly what you need to achieve your business goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <FaCogs className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tailored to Your Needs</h3>
            <p className="text-gray-600">Custom software is developed with your unique business requirements in mind, ensuring seamless integration with your processes.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <FaRocket className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
            <p className="text-gray-600">Your business grows, and so should your software. Custom solutions allow for scalability to meet future demands.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <FaCloud className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
            <p className="text-gray-600">We offer seamless cloud integration to provide accessible, secure, and scalable software that meets modern demands.</p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Our Development Process</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
          From ideation to deployment, we follow a streamlined process that ensures high-quality results delivered on time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaSearch className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Requirement Gathering</h3>
            <p className="text-gray-600">We start by understanding your business needs and gathering all necessary requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaCogs className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Planning & Strategy</h3>
            <p className="text-gray-600">Our team drafts a comprehensive plan for development, ensuring alignment with your business goals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaCode className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Development</h3>
            <p className="text-gray-600">We write clean, efficient, and scalable code that meets your project requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaDatabase className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Testing & QA</h3>
            <p className="text-gray-600">Our rigorous testing ensures that the software performs well under different conditions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaRocket className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Launch</h3>
            <p className="text-gray-600">We help you launch your custom software with confidence, ensuring smooth operation from day one.</p>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Technologies We Use</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">We work with the latest and most reliable technologies to build high-performance custom software solutions.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaCode className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">JavaScript</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaCode className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Python</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaDatabase className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">PostgreSQL</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaCloud className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">AWS</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaCloud className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Azure</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaCogs className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Node.js</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
    </div><Footer/></>
  );
}
