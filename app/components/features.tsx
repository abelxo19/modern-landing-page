import { Lightbulb, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Our cutting-edge technology provides innovative solutions to complex problems.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized platform.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your data is safe with us. We prioritize security and reliability.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12"><span className='text-white bg-[#232e44] px-2 py-1'>Key</span> Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

