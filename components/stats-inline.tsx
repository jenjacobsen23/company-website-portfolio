"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 500, suffix: "+", label: "Projects Delivered" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 40, suffix: "%", label: "Average Cost Reduction" },
  { number: 24, suffix: "/7", label: "Support Available" },
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
    <span className="text-3xl lg:text-4xl font-bold text-blue-600">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsInline() {
  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
