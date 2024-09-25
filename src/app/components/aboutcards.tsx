"use client"

import { motion } from "framer-motion"
import { HandshakeIcon, RocketIcon, LightbulbIcon, RefreshCcwIcon } from "lucide-react"

const cards = [
  {
    title: "High Ownership",
    description: "We embody ownership by treating every project with personal commitment and pride, ensuring excellence in every detail.",
    icon: HandshakeIcon,
    color: "bg-green-50",
  },
  {
    title: "First Principles",
    description: "By questioning assumptions, we uncover the true essence of each problem & develop out-of-the-box solutions that drive success.",
    icon: RocketIcon,
    color: "bg-blue-50",
  },
  {
    title: "Design Thinking",
    description: "Our deep-rooted belief in design thinking drives us to approach challenges with creativity and user-centricity.",
    icon: LightbulbIcon,
    color: "bg-red-50",
  },
  {
    title: "Experimental Mindset",
    description: "Our experimental mindset fosters a culture of adaptability and continuous improvement in all our endeavors.",
    icon: RefreshCcwIcon,
    color: "bg-green-50",
  },
]

export default function AboutCards() {
  return (
    <section className="py-16 px-4 md:px-8">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-blue-600">Impact-Focused</span>{" "}
        <span className="relative">
          Ways of Working
          <motion.span 
            className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className={`p-6 rounded-lg shadow-md ${card.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <card.icon className="w-12 h-12 mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}