import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, BarChart3, Cog, Shield, Smartphone, Database } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration & Strategy",
    description:
      "Seamlessly migrate your infrastructure to the cloud with our proven methodologies and strategic planning.",
    color: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
    color: "text-orange-500",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamline operations and reduce costs through intelligent automation and workflow optimization.",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with comprehensive security frameworks and threat management.",
    color: "text-orange-500",
  },
  {
    icon: Smartphone,
    title: "Digital Experience",
    description: "Create engaging digital experiences that drive customer satisfaction and business growth.",
    color: "text-blue-600",
  },
  {
    icon: Database,
    title: "Enterprise Integration",
    description: "Connect disparate systems and create unified digital ecosystems for improved efficiency.",
    color: "text-orange-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Transformation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions designed to accelerate your business growth and competitive
            advantage in today's digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors`}
                >
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
