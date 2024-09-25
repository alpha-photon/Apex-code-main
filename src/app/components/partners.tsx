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
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Our
          <span className="text-blue-600"> Esteemed</span>  Clients & Partners
        </h2>
        <div className="w-64 h-1 bg-red-700 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Discover the trusted clients and industry-leading companies we’ve collaborated with, showcasing our dedication to developing cutting-edge technology solutions and fostering successful, long-term partnerships.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <AnimatedCard key={company.name} delay={index * 0.1}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={150}
                height={50}
                className="max-w-full h-auto"
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}