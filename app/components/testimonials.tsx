"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import image from "@/public/image.png"
import test_2 from "@/public/img-2.jpg"
import test_3 from "@/public/test-3.jpg"
import Image from "next/image"

const testimonials = [
  {
    name: "Abel",
    role: "CEO, TechCorp",
    content:
      "This platform has revolutionized the way we work. It's intuitive, powerful, and has greatly improved our productivity.",
    avatar: image.src,
  },
  {
    name: "Meron",
    role: "Designer, CreativeCo",
    content:
      "I've tried many similar tools, but this one stands out. The features are exactly what I need, and the support is outstanding.",
    avatar: test_2.src,
  },
  {
    name: "Bemenet",
    role: "Product Manager, InnovateCo",
    content:
      "The customer service is exceptional. Every issue gets resolved quickly and efficiently. Highly recommend working with this team.",
    avatar:test_3.src,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What our clients say about <span className="text-white bg-[#232e44] px-2 py-1">Us</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 relative 
                         transition-all duration-300 ease-in-out
                         hover:shadow-xl hover:-translate-y-2
                         hover:bg-white/90"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="w-4 h-7 fill-[#232e44] text-[#232e44]" />
              </motion.div>
              <div className="pt-12">
                <p className="text-gray-700 mb-8 text-lg">{testimonial.content}</p>
                <div className="flex items-center">
                <motion.div className="relative group" whileHover={{ scale: 1.1 }}>
             <motion.div
              className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 -z-10"
              whileHover={{ opacity: 0.5, scale: 1.2 }} // Slightly bigger than the image
              transition={{ duration: 0.3 }}
                        />
             <Image
             src={testimonial.avatar || "/placeholder.svg"}
             alt={`${testimonial.name}'s avatar`}
             width={48}
             height={48}
             className="w-12 h-12 rounded-full object-cover"
                  /> 
            </motion.div>
                  <motion.div className="transform transition-transform duration-300" whileHover={{ x: 8 }}>
                    <h3 className="font-semibold text-gray-900 px-2">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm px-2">{testimonial.role}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

