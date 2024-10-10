'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLightbulb, FaTools, FaChartBar, FaClipboardCheck, FaBrain, FaRocket } from 'react-icons/fa';

export default function TechAssessmentAdvisory() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 my-14">

        {/* Hero Section */}
        <motion.section
          className="relative bg-gray-900 text-white py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="absolute inset-0">
            <Image
              src="/images/tech-assessment-bg.jpg"
              alt="Technology Assessment and Advisory"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div> */}
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl font-extrabold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Technology Assessment and Advisory
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Evaluate your current technology infrastructure and get expert guidance on how to optimize, modernize, and innovate.
            </motion.p>
            <motion.a
              href="#contact"
              className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <section className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Our Technology Assessment and Advisory Services?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our expert technology assessment and advisory services provide a thorough analysis of your current systems, helping you make informed decisions to improve operational efficiency, reduce costs, and scale your business.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaChartBar className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Assessment</h3>
              <p className="text-gray-600">We perform a detailed analysis of your technology infrastructure to identify inefficiencies and areas for improvement.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaLightbulb className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic Roadmap</h3>
              <p className="text-gray-600">We help you develop a clear, actionable technology roadmap to optimize your current systems and plan for future growth.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaClipboardCheck className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Risk & Cost Analysis</h3>
              <p className="text-gray-600">We help you understand the potential risks and costs associated with your technology investments, ensuring better decisions for the future.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Technology Assessment Process */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Our Technology Assessment Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            We follow a structured process to assess your technology infrastructure, identify opportunities for improvement, and provide a strategic roadmap for growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mx-4">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaTools className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Assessment & Audit</h3>
              <p className="text-gray-600">We start by assessing your current technology infrastructure, identifying inefficiencies, risks, and opportunities.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaBrain className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Advisory</h3>
              <p className="text-gray-600">Our team of experts provides advisory services to guide you in making the best technology decisions for your business.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaClipboardCheck className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Risk Mitigation</h3>
              <p className="text-gray-600">We assess and mitigate technology risks, ensuring your business is protected from downtime and security breaches.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Implementation & Monitoring</h3>
              <p className="text-gray-600">We help implement the recommendations and continuously monitor the systems to ensure the highest performance.</p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
       

      </div>
      <Footer />
    </>
  );
}
