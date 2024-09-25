"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ClipboardListIcon, FileTextIcon, LayersIcon, MessageCircleIcon, MessagesSquareIcon, RocketIcon, SettingsIcon } from "lucide-react"

export default function WeWork() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
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
  }, [])

  const steps = [
    { icon: ClipboardListIcon, title: "Understand Requirements", bgColor: "bg-green-50" },
    { icon: MessagesSquareIcon, title: "Technical Assessment & Discussion", bgColor: "bg-red-50" },
    { icon: FileTextIcon, title: "Prepare Execution Plan", bgColor: "bg-blue-50" },
    { icon: LayersIcon, title: "Phases Wise Delivery", bgColor: "bg-yellow-50" },
    { icon: MessageCircleIcon, title: "Open for Feedback", bgColor: "bg-blue-50" },
    { icon: RocketIcon, title: "Go Live", bgColor: "bg-pink-50" },
    { icon: SettingsIcon, title: "Maintenance", bgColor: "bg-red-50" },
    { icon: ClipboardListIcon, title: "Feed Back", bgColor: "bg-green-50" }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12" ref={ref}>
        <h2 className="text-3xl font-bold mb-6 text-center">
          How We <span className="text-blue-600">Work</span>?
          <span className="block w-32 h-1 bg-red-700 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`${step.bgColor} p-6 rounded-lg shadow-md text-center`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <step.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-medium text-sm">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}