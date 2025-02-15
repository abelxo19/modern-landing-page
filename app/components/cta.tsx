"use client"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0">
        {/* Base background */}
        <div className="absolute inset-0 bg-[#1e2738]" />

        {/* Animated aurora layers */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, 
                #2a3850 0%,
                #232e44 25%,
                transparent 50%
              )
            `,
            animation: "move 8s linear infinite",
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              radial-gradient(circle at 70% 30%, 
                #334366 0%,
                #232e44 25%,
                transparent 50%
              )
            `,
            animation: "move 12s linear infinite",
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 70%, 
                #3b4d71 0%,
                #1e2738 25%,
                transparent 50%
              )
            `,
            animation: "move 16s linear infinite",
            transform: "translateZ(0)",
          }}
        />

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            transform: "translateZ(0)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Get Started with Your Free Trial Today</h2>
        <p className="text-xl mb-8 text-gray-200">
          Experience the power of our platform and transform your ideas into reality.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-[#232e44] hover:bg-gray-100 transition-colors duration-300"
        >
          Start Free Trial
        </Button>
      </div>

      <style jsx global>{`
        @keyframes move {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1.5);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1.2);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
          }
        }

        [style*="--gradient"] {
          position: absolute;
          inset: 0;
          transform-origin: center;
        }
      `}</style>
    </section>
  )
}

