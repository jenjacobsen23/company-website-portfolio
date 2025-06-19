import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function HeroAlternate() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Takes 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              🚀 Trusted by 500+ Companies Worldwide
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Digital
                <span className="block text-blue-600">Transformation</span>
                <span className="block text-orange-500">Simplified</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We partner with ambitious companies to accelerate growth through strategic technology solutions, cloud
                innovation, and data-driven insights that deliver measurable business impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-full"
              >
                View Case Studies
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Proven ROI</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-orange-800 text-sm font-medium text-center">
                ⚠️ This is a portfolio demonstration website - Not a real business
              </p>
            </div>
          </div>

          {/* Right Content - Takes 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Quick Assessment</h3>
                    <span className="text-sm text-green-600 font-medium">Free</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select company size</option>
                        <option>1-50 employees</option>
                        <option>51-200 employees</option>
                        <option>201-1000 employees</option>
                        <option>1000+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Primary Challenge</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select main challenge</option>
                        <option>Legacy system modernization</option>
                        <option>Cloud migration</option>
                        <option>Data analytics</option>
                        <option>Process automation</option>
                      </select>
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">
                      Get Free Assessment
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
