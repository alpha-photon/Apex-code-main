'use client';

import React from 'react';
import { EnvelopeIcon, PhoneIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'; // Correct import for Heroicons v2

export default function ContactUsSection() {
  return (
    <section className="relative bg-white py-16">
       <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        // Added pointer-events-none to prevent it from blocking interactions
      >
        <svg
          className="absolute left-0 top-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,0,0,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className=" relative container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Here are some ways we can connect.
          </p>
        </div>

        {/* Contact Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Schedule a Demo */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <ClockIcon className="h-8 w-8 text-yellow-400 mr-4" />
              <h3 className="text-xl font-semibold">Schedule a Meet</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Centralize multiple source systems and bring your team onto one collaborative platform.
            </p>
            <a href="https://calendly.com/apexcodesystems/30min" className="text-green-600 hover:text-green-800 font-semibold">Get Started &rarr;</a>
          </div>

          {/* General Inquiries */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <EnvelopeIcon className="h-8 w-8 text-pink-400 mr-4" />
              <h3 className="text-xl font-semibold">General Inquiries</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Email business@apexcode.in or click the link to send a message.
            </p>
            <a href="mailto:business@apexcode.in" className="text-green-600 hover:text-green-800 font-semibold my-5">Email us &rarr;</a>
          </div>

          {/* Already Using Our Product */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <UserGroupIcon className="h-8 w-8 text-blue-400 mr-4" />
              <h3 className="text-xl font-semibold">Already using Our Product?</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Have specific questions about using our product? Visit our customer portal.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-semibold">Customer Portal &rarr;</a>
          </div>
        </div>
        
        {/* Decorative Dots */}
        <div className="absolute top-10 right-10">
          <svg className="w-32 h-32 opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="10" cy="10" r="2.5" fill="#93C5FD" />
            <circle cx="30" cy="10" r="2.5" fill="#93C5FD" />
            <circle cx="50" cy="10" r="2.5" fill="#93C5FD" />
            {/* More circles to create the dot pattern */}
          </svg>
        </div>
      </div>
    </section>
  );
}
