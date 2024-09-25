import React from 'react'

export default function ContactUsSection() {
  return (
    <section className="bg-gray-400 bg-opacity-10   overflow-hidden relative">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <h2 className="text-4xl font-bold text-black mb-2">Contact us</h2>
        <p className="text-xl text-gray-600 mb-8">We are here to help... in any way we can.</p>
        
        {/* Mailbox SVG */}
        <svg className="absolute right-0 bottom-0 w-64 h-64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="50" width="60" height="40" fill="#4F46E5" />
          <rect x="25" y="55" width="50" height="30" fill="white" />
          <path d="M20 50V90H80V50L50 70L20 50Z" fill="#818CF8" />
          <rect x="35" y="40" width="30" height="10" fill="#E11D48" />
        </svg>
        
        {/* Envelope SVG */}
        <svg className="absolute left-1/4 top-1/4 w-16 h-16 transform -rotate-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="80" height="60" fill="white" />
          <path d="M10 20L50 50L90 20" stroke="#4F46E5" strokeWidth="4" />
        </svg>
        
        {/* Chat Bubble SVG */}
        <svg className="absolute right-1/4 top-1/3 w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90 45C90 62.6731 74.8528 77 56 77C49.9235 77 44.1819 75.8478 39.0821 73.8248L20 80L26.6431 63.3425C23.0506 58.3111 21 52.3593 21 46C21 28.3269 36.1472 14 55 14C73.8528 14 90 28.3269 90 45Z" fill="#10B981" />
          <rect x="35" y="40" width="40" height="4" fill="white" />
          <rect x="35" y="50" width="30" height="4" fill="white" />
        </svg>
        
        {/* Decorative curve */}
        <svg className="absolute left-0 bottom-0 w-full h-24" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="gray-200" opacity="0.1" />
        </svg>
      </div>
    </section>
  )
}