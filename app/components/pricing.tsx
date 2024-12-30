import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: 'Basic',
    price: '$9',
    features: ['1 User', '10 Projects', 'Basic Support', '1GB Storage']
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['5 Users', 'Unlimited Projects', 'Priority Support', '10GB Storage'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Users', 'Unlimited Projects', 'Dedicated Support', 'Unlimited Storage']
  }
]

export default function Pricing() {
  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md p-8 ${plan.popular ? 'border-2 border-primary' : ''}`}>
              {plan.popular && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Most Popular</span>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-xl text-gray-500">/month</span></p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

