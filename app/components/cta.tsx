import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#232e44] via-[#1e2738] to-[#232e44] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Your Free Trial Today</h2>
        <p className="text-xl mb-8">Experience the power of our platform and transform your ideas into reality.</p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-[#232e44] hover:bg-gray-100 transition-colors duration-300"
        >
          Start Free Trial
        </Button>
      </div>
    </section>
  )
}

