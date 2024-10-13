"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from 'next/image'

interface AnimatedCardProps {
  children: React.ReactNode
  delay: number
}

function AnimatedCard({ children, delay }: AnimatedCardProps) {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
    >
      {children}
    </motion.div>
  )
}

export default function ValuedCustomers() {
  const companies = [
    { name: 'Fair', logo: '/fair.png?height=50&width=150' },
    { name: 'Gopay', logo: '/go.png?height=50&width=150' },
    { name: 'Halodoc', logo: '/halodoc.png?height=50&width=150' },
    { name: 'Flipkart', logo: '/flipkart.png?height=50&width=150' },
    { name: 'Snapdeal', logo: '/snap.png?height=50&width=150' },
    { name: 'Housing.com', logo: '/housing.png?height=50&width=150' },
    { name: 'Green Future Project', logo: '/edu.png?height=50&width=150' },
    { name: 'Paper', logo: '/paper.png?height=50&width=150' },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-20">
        <h2 className="text-4xl font-bold text-center mb-4">Our
          <span className="text-blue-600"> Esteemed</span> Clients & Partners
        </h2>
        <div className="w-32 h-1 bg-red-700 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Discover the trusted clients and industry-leading companies we've collaborated with, showcasing our dedication to developing cutting-edge technology solutions and fostering successful, long-term partnerships.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <AnimatedCard key={company.name} delay={index * 0.1}>
              <div className="relative w-full h-20">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}