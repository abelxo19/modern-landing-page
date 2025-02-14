"use client"

import { Lightbulb, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Our cutting-edge technology provides innovative solutions to complex problems.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is safe with us. We prioritize security and reliability.",
  },
]

const iconVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 1,
    },
  },
}

export default function Features() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-white bg-[#232e44] px-2 py-1">Key</span> Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-10 transition-all duration-300 hover:shadow-lg"
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div variants={iconVariants} className="mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

