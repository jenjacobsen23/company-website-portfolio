import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, BarChart3, Cog, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Migration & Strategy',
    description:
      'Seamlessly transition to cloud infrastructure with our proven methodologies and strategic planning.',
    features: ['AWS/Azure/GCP', 'Zero Downtime', 'Cost Optimization'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    description:
      'Transform raw data into actionable insights with advanced analytics and business intelligence.',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports'],
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description:
      'Streamline operations and reduce costs through intelligent automation and workflow optimization.',
    features: ['RPA Solutions', 'Workflow Design', 'Integration APIs'],
    color: 'bg-green-50 text-green-600',
  },
];

export default function ServicesAlternate() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Services That
                <span className="block text-blue-600">Drive Results</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our comprehensive digital transformation services are designed to accelerate your
                business growth and competitive advantage in today's rapidly evolving digital
                landscape.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Strategic Assessment</h3>
                  <p className="text-gray-600">
                    We analyze your current state and identify transformation opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Custom Implementation</h3>
                  <p className="text-gray-600">
                    Tailored solutions designed specifically for your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Continuous optimization and support to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group transition-all hover:shadow-lg hover:border-blue-600  duration-300 bg-white cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
