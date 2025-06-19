import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

const team = [
  {
    name: "David Thompson",
    title: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "15+ years in digital transformation with Fortune 500 companies.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@nexusdigital.com",
    },
  },
  {
    name: "Lisa Chen",
    title: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former Google engineer specializing in cloud architecture and AI.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@nexusdigital.com",
    },
  },
  {
    name: "Marcus Rodriguez",
    title: "VP of Strategy",
    image: "/placeholder.svg?height=300&width=300",
    bio: "McKinsey alum with expertise in business transformation.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@nexusdigital.com",
    },
  },
  {
    name: "Sarah Kim",
    title: "Head of Data Science",
    image: "/placeholder.svg?height=300&width=300",
    bio: "PhD in Machine Learning, former Microsoft Research scientist.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@nexusdigital.com",
    },
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced team combines deep technical expertise with strategic business acumen to deliver exceptional
            results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-blue-400" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Mail className="h-5 w-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
