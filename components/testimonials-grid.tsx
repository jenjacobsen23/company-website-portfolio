import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO, TechCorp Solutions",
    company: "TechCorp",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "Nexus Digital transformed our entire infrastructure. Their cloud migration strategy reduced our costs by 40%.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "CEO, InnovateLabs",
    company: "InnovateLabs",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "The data analytics platform revolutionized our decision-making process. ROI was evident within the first quarter.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "VP Operations, GlobalTech",
    company: "GlobalTech",
    image: "/placeholder.svg?height=60&width=60",
    quote: "Their process automation solutions streamlined our operations beyond expectations. Exceptional service.",
    rating: 5,
  },
  {
    name: "David Park",
    title: "CFO, FinanceFlow",
    company: "FinanceFlow",
    image: "/placeholder.svg?height=60&width=60",
    quote: "The cybersecurity framework they implemented gave us complete peace of mind. Highly recommended.",
    rating: 5,
  },
]

export default function TestimonialsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their digital transformation journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
