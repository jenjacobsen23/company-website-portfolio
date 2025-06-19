import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, ArrowRight } from "lucide-react"

const team = [
  {
    name: "David Thompson",
    title: "CEO & Founder",
    image: "/placeholder.svg?height=120&width=120",
    linkedin: "#",
  },
  {
    name: "Lisa Chen",
    title: "CTO",
    image: "/placeholder.svg?height=120&width=120",
    linkedin: "#",
  },
  {
    name: "Marcus Rodriguez",
    title: "VP of Strategy",
    image: "/placeholder.svg?height=120&width=120",
    linkedin: "#",
  },
  {
    name: "Sarah Kim",
    title: "Head of Data Science",
    image: "/placeholder.svg?height=120&width=120",
    linkedin: "#",
  },
]

export default function TeamCompact() {
  return (
    <section id="team" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Meet the Experts Behind Your Success</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Our leadership team brings decades of combined experience from top-tier technology companies and
              consulting firms, ensuring your digital transformation is in expert hands.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">Years Combined</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-blue-200 text-sm">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </div>
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-50 rounded-full px-8">
              View Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-200 text-sm mb-3">{member.title}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
