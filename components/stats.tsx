"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 500, suffix: "+", label: "Projects Completed", description: "Successful digital transformations" },
  { number: 98, suffix: "%", label: "Client Satisfaction", description: "Consistently high ratings" },
  { number: 15, suffix: "+", label: "Years Experience", description: "Industry expertise" },
  { number: 50, suffix: "M+", label: "Cost Savings", description: "Generated for clients" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="text-4xl lg:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Proven Track Record</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our numbers speak for themselves. We've helped hundreds of companies achieve digital excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-blue-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
