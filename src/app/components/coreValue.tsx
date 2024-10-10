'use client';

import { motion } from "framer-motion";
import { FlagIcon, SearchIcon, BoxIcon, BuildingIcon, MessageSquareIcon, ClockIcon } from "lucide-react";

export default function CoreValue() {
  const values = [
    { icon: FlagIcon, title: "High Ownership", bgColor: "bg-green-100" },
    { icon: SearchIcon, title: "Detail Oriented", bgColor: "bg-red-100" },
    { icon: BoxIcon, title: "Product First Approach", bgColor: "bg-blue-100" },
    { icon: BuildingIcon, title: "Empower Business Continuity", bgColor: "bg-yellow-100" },
    { icon: MessageSquareIcon, title: "Transparent Communication", bgColor: "bg-red-100" },
    { icon: ClockIcon, title: "On Time Delivery", bgColor: "bg-green-100" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center">
          Core <span className="text-blue-600">Values</span>
          <span className="block w-32 h-1 bg-red-700 mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${value.bgColor} p-6 rounded-lg flex flex-col items-center text-center shadow-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-xl h-48`}
            >
              <value.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
