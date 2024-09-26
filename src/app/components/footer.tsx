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

export default function InteractiveFooter() {
  return (
    <footer className="bg-gray-400 bg-opacity-10 text-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get the right<br />partners for you.
            </h2>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="https://github.com" className="hover:text-slate-200">
                <Github size={24} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-slate-200">
                <Linkedin size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-slate-200">
                <Twitter size={24} />
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">Say Hello</h3>
              <Link href="mailto:hi@apexcode.com" className="flex items-center text-gray-500 hover:text-black transition-colors">
                <Mail className="mr-2" size={18} />
                hi@apexcode.com
              </Link>
            </div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-black text-sm font-medium rounded-md text-black hover:bg-gray-200 hover:text-black transition-colors">
                Get in touch
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Navigation</h3>
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className="text-gray-500 hover:text-black transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          Apex Code © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}