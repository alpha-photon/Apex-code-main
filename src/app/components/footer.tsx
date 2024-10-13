'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blogs', path: '/blogs' }
];

const serviceItems = [
  { name: "Custom Software Development", path: "/services/custom-software" },
  { name: "Mobile App Development", path: "/services/mobile-apps" },
  { name: "Web Development", path: "/services/web-development" },
  { name: "Cloud Solutions", path: "/services/cloud-solutions" },
  { name: "Enterprise Software Solutions", path: "/services/enterprise-software" },
  { name: "Software Architecture Consulting", path: "/services/software-architecture" },
  { name: "DevOps Services", path: "/services/devops" },
  { name: "Software Testing and Quality Assurance", path: "/services/software-testing" },
  { name: "Project Management Consulting", path: "/services/project-management" },
  { name: "Third Party Vendor Integration", path: "/services/vendor-integration" },
  { name: "Maintenance and Support Services", path: "/services/maintenance-support" },
  { name: "Technology Assessment and Advisory", path: "/services/tech-assessment" },
  { name: "Legacy System Modernization", path: "/services/legacy-modernization" },
  { name: "E-commerce Solutions", path: "/services/ecommerce-solutions" }
];

export default function InteractiveFooter() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-800 py-16 px-4 md:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Get the right<br />partners for you.
            </h2>
            <motion.div
              className="flex space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter size={24} />
              </Link>
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Say Hello</h3>
              <Link href="mailto:business@apexcode.in" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="mr-2" size={18} />
                business@apexcode.in
              </Link>
            </div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Get in touch
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
         
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceItems.map((service) => (
                <Link 
                  key={service.name} 
                  href={service.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors truncate"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <nav className="mt-8">
         
          <ul className="flex flex-wrap space-x-4 justify-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-200 pt-8 mt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <div>
            Apex Code © {new Date().getFullYear()}. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy-policy" className="mr-4 hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}