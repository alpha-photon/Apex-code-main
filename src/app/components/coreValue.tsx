'use client'

import { motion } from "framer-motion"
import { FlagIcon, SearchIcon, BoxIcon, BuildingIcon, MessageSquareIcon, ClockIcon } from "lucide-react"

export default function CoreValue() {
  const values = [
    { icon: FlagIcon, title: "High Ownership", bgColor: "bg-green-50" },
    { icon: SearchIcon, title: "Detail Oriented", bgColor: "bg-red-50" },
    { icon: BoxIcon, title: "Product First Approach", bgColor: "bg-blue-50" },
    { icon: BuildingIcon, title: "Empower Business Continuity", bgColor: "bg-yellow-50" },
    { icon: MessageSquareIcon, title: "Transparent Communication", bgColor: "bg-red-50" },
    { icon: ClockIcon, title: "On Time Delivery", bgColor: "bg-green-50" }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Core <span className="text-blue-600">Values</span>
          <span className="block w-20 h-1 bg-red-700 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${value.bgColor} p-6 rounded-lg shadow-md text-center`}
            >
              <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-medium text-sm">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}