"use client"

import { useEffect } from "react"
import { Lightbulb, Zap, Shield } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Features() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-14 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "#232e44" }}
        >
          <span className="text-white bg-[#232e44] px-2 py-1">Key</span> Features
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-10 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} className="mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

