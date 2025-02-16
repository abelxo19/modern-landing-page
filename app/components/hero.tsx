"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import heroImages from "@/public/hero-2.jpg" 
import heroIcon from "@/public/heron-i.png"

export default function Hero() {
  return (
    <section className="relative bg-gray-50 text-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#232e44]">
              Transform Your <span className="text-white bg-[#232e44] px-2">Ideas</span> into Reality
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Our platform empowers you to bring your <span className="wellcome">vision</span> to life with powerful tools and expert guidance.
            </p>
            <Button size="lg" className="bg-[#232e44] text-white">
              Start Free Trial
            </Button>
          </motion.div>
          <div className="relative max-w-md mx-auto">
            {/* Animated lightbulb */}
            <motion.div
              className="absolute z-20 left-1/2 transform -translate-x-1/2"
              style={{
                top: "-25px",
                transformOrigin: "50% 0%",
              }}
              animate={{
                rotate: [0, 15, 0, -15, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Image
                src={heroIcon}
                alt="Light Bulb"
                width={50}
                height={60}
              />
            </motion.div>

            {/* Hero image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={heroImages}
                alt="Hero Image"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-purple-200 mix-blend-multiply rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-indigo-100 to-transparent opacity-50 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-100 to-transparent opacity-50 rounded-tr-full" />
    </section>
  )
}

