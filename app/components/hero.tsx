import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Transform Your Ideas into Reality</h1>
            <p className="text-xl mb-8">Our platform empowers you to bring your vision to life with powerful tools and expert guidance.</p>
            <Button size="lg" variant="secondary">Start Free Trial</Button>
          </div>
          <div className="relative">
            <img src="/placeholder.svg?height=400&width=600" alt="Hero Image" className="rounded-lg shadow-xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}

