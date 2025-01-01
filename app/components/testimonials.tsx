import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Abela',
    role: 'CEO, TechCorp',
    content: 'This platform has revolutionized the way we work. It\'s intuitive, powerful, and has greatly improved our productivity.',
    avatar: '/man.jpg'
  },
  {
    name: 'Blen',
    role: 'Designer, CreativeCo',
    content: 'I\'ve tried many similar tools, but this one stands out. The features are exactly what I need, and the support is outstanding.',
    avatar: '/sis.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

