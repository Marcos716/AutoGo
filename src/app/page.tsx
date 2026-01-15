"use client"

import { Phone, MessageCircle, Wrench, Zap, Clock, Droplet, CircleDot, Cog, Shield, CheckCircle, MapPin, Car, Users, FileText } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const phoneNumber = "(475) 370-0824"
  const smsLink = "sms:+14753700824"

  const services = [
    { 
      icon: Wrench, 
      title: "Preventive Maintenance", 
      description: "Oil change, filters, general inspection",
      price: "$100–$150"
    },
    { 
      icon: Zap, 
      title: "Electronic Diagnostics", 
      description: "Scanner, light reset",
      price: "$80–$120"
    },
    { 
      icon: CircleDot, 
      title: "Brakes & Suspension", 
      description: "Pads, discs, shock absorbers",
      price: "$200–$500"
    },
    { 
      icon: Cog, 
      title: "Electrical & Starting", 
      description: "Battery, alternator",
      price: "$150–$400"
    },
    { 
      icon: Clock, 
      title: "24/7 Quick Rescue", 
      description: "Flat tire, out of gas",
      price: "$100–$200"
    },
    { 
      icon: Users, 
      title: "Corporate Solution", 
      description: "Fleet plans",
      price: "Custom"
    },
  ]

  const differentials = [
    { icon: Clock, text: "Fast and Professional On-Site Service" },
    { icon: Shield, text: "Certified and Uniformed Mechanics" },
    { icon: CheckCircle, text: "Secure and Transparent Online Payment" },
    { icon: FileText, text: "Complete Digital Vehicle History" },
    { icon: Wrench, text: "Warranty on All Services" },
  ]

  const cities = {
    CT: ["Bridgeport", "Waterbury", "Stamford", "New Haven", "Danbury"],
    NY: ["White Plains", "Bronx", "Queens", "Long Island"]
  }

  const packages = [
    {
      name: "START PACKAGE",
      badge: "Basic",
      description: "For those who want practical maintenance and basic safety",
      features: [
        "Oil and filter change (parts and labor included)",
        "Tire pressure check",
        "Simple electronic diagnostics",
        "25-point safety check-up"
      ],
      checkItems: [
        "Front and rear brakes",
        "Suspension system",
        "Fluid levels",
        "Lighting system",
        "Battery and charging"
      ],
      idealFor: "Drivers who want to keep their car up to date without spending much",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "FULL CARE PACKAGE",
      badge: "Most Popular",
      description: "The most chosen — predictive maintenance + comfort",
      features: [
        "Everything from START +",
        "All filter changes (engine, cabin, and fuel)",
        "Complete air conditioning sanitization",
        "Light electrical inspection",
        "Basic brake and steering system adjustment"
      ],
      benefits: [
        "Reduced fuel consumption",
        "Cleaner air inside the car",
        "Quieter car",
        "Smoother operation"
      ],
      idealFor: "Those who drive every day, families, professionals who depend on their car",
      color: "from-yellow-500 to-orange-500",
      popular: true
    },
    {
      name: "MASTER CARE PACKAGE",
      badge: "Premium",
      description: "Maximum automotive care experience",
      features: [
        "Everything from FULL CARE +",
        "Deep inspection of complete brakes",
        "Complete electrical system",
        "Cooling system",
        "Advanced computerized diagnostics"
      ],
      benefits: [
        "Safer car",
        "Lower chance of breakdowns",
        "Extended parts lifespan",
        "Registered history for future maintenance"
      ],
      idealFor: "Those who want total safety, owners of semi-new or premium cars, those who want future resale value",
      color: "from-purple-500 to-indigo-600"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER - Fixed & Premium */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/7e8da001-64eb-4190-81af-83897f2d4a91.png"
                alt="AutoGo"
                width={180}
                height={60}
                className="h-16 lg:h-16 w-auto"
                priority
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 lg:gap-4">
              <a
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="hidden md:flex items-center gap-3 text-[#212121] hover:text-[#0033A0] transition-colors group"
              >
                <div className="p-3 rounded-2xl bg-[#FFD700]/10 group-hover:bg-[#FFD700]/20 transition-all">
                  <Phone className="w-6 h-6 text-[#0033A0]" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-black tracking-tight">{phoneNumber}</span>
              </a>
              
              <a
                href={smsLink}
                className="bg-[#FFD700] hover:bg-[#FFC107] text-[#212121] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-black text-sm lg:text-base flex items-center gap-2 transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                <span>TEXT US</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION - Premium & Impactful */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 bg-gradient-to-br from-[#0033A0] via-[#0044CC] to-[#0033A0] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#FFD700] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-6 py-3 bg-[#FFD700]/20 backdrop-blur-sm rounded-full border border-[#FFD700]/30">
              <span className="text-[#FFD700] font-bold text-sm lg:text-base tracking-wide">PREMIUM MOBILE SERVICE</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 lg:mb-8 leading-[1.1] tracking-tight">
              AutoGo –<br />
              <span className="text-[#FFD700]">The Mechanic Comes to You.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-12 lg:mb-16 font-medium leading-relaxed max-w-3xl mx-auto">
              Complete mechanical services wherever your car is.<br className="hidden sm:block" />
              At home, at work, or on the road. No lines, no hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-6">
              <a
                href={smsLink}
                className="group w-full sm:w-auto bg-[#FFD700] hover:bg-[#FFC107] text-[#212121] px-10 lg:px-14 py-6 lg:py-7 rounded-full font-black text-lg lg:text-xl transition-all hover:scale-105 shadow-2xl hover:shadow-[#FFD700]/50 flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <Car className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
                <span className="relative">REQUEST A SERVICE</span>
              </a>
              
              <a
                href={smsLink}
                className="group w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white border-2 border-red-400 px-10 lg:px-14 py-6 lg:py-7 rounded-full font-black text-lg lg:text-xl transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3 animate-pulse hover:animate-none relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <Zap className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
                <span className="relative">EMERGENCY? CLICK HERE (SOS)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - 4 Steps Premium */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-[#212121] mb-6">
              How It Works
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent process in 4 steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <div className="relative text-center group">
              <div className="absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-[#FFD700] to-transparent hidden lg:block"></div>
              <div className="relative inline-flex items-center justify-center w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-[#FFD700] to-[#FFC107] text-[#212121] rounded-3xl text-5xl lg:text-6xl font-black mb-6 shadow-2xl group-hover:scale-110 transition-all">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <span className="relative">1</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-[#212121] mb-3">
                Choose the Service
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                On website or Text
              </p>
            </div>

            <div className="relative text-center group">
              <div className="absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-[#0033A0] to-transparent hidden lg:block"></div>
              <div className="relative inline-flex items-center justify-center w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-[#0033A0] to-[#0044CC] text-white rounded-3xl text-5xl lg:text-6xl font-black mb-6 shadow-2xl group-hover:scale-110 transition-all">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <span className="relative">2</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-[#212121] mb-3">
                Schedule or Request Now
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Set location and time
              </p>
            </div>

            <div className="relative text-center group">
              <div className="absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-[#FFD700] to-transparent hidden lg:block"></div>
              <div className="relative inline-flex items-center justify-center w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-[#FFD700] to-[#FFC107] text-[#212121] rounded-3xl text-5xl lg:text-6xl font-black mb-6 shadow-2xl group-hover:scale-110 transition-all">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <span className="relative">3</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-[#212121] mb-3">
                AutoGo Mechanic Arrives
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Professional service
              </p>
            </div>

            <div className="relative text-center group">
              <div className="relative inline-flex items-center justify-center w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-[#0033A0] to-[#0044CC] text-white rounded-3xl text-5xl lg:text-6xl font-black mb-6 shadow-2xl group-hover:scale-110 transition-all">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <span className="relative">4</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-[#212121] mb-3">
                Pay Securely
              </h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Online, digital receipt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - Premium Cards with Pricing */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-[#212121] mb-6">
              Our Services
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Complete solutions with transparent pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 lg:p-10 rounded-3xl border-2 border-gray-100 hover:border-[#FFD700] transition-all hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-bl-full"></div>
                
                <div className="relative">
                  <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-[#0033A0] to-[#0044CC] group-hover:from-[#FFD700] group-hover:to-[#FFC107] transition-all mb-6 shadow-lg">
                    <service.icon className="w-10 h-10 text-white group-hover:text-[#212121] transition-colors" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-black text-[#212121] mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl lg:text-4xl font-black text-[#0033A0]">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE PACKAGES - New Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-[#212121] mb-6">
              AutoGo Service Packages
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your vehicle's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl border-2 ${pkg.popular ? 'border-[#FFD700] shadow-2xl scale-105' : 'border-gray-100'} overflow-hidden transition-all hover:shadow-2xl hover:scale-105`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-bl-2xl font-black text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${pkg.color} p-8 text-white`}>
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4">
                    {pkg.badge}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black mb-3">
                    {pkg.name}
                  </h3>
                  <p className="text-lg opacity-90">
                    {pkg.description}
                  </p>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-black text-[#212121] mb-4">What You Get:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.checkItems && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
                      <h5 className="text-sm font-black text-[#212121] mb-3">Items Checked:</h5>
                      <ul className="space-y-2">
                        {pkg.checkItems.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#0033A0] rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {pkg.benefits && (
                    <div className="mb-6">
                      <h4 className="text-lg font-black text-[#212121] mb-4">Benefits:</h4>
                      <ul className="space-y-3">
                        {pkg.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6 p-4 bg-blue-50 rounded-2xl">
                    <h5 className="text-sm font-black text-[#212121] mb-2">Ideal For:</h5>
                    <p className="text-sm text-gray-700">{pkg.idealFor}</p>
                  </div>

                  <a
                    href={smsLink}
                    className={`block w-full text-center bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:scale-105 shadow-lg`}
                  >
                    SELECT {pkg.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS - Trust Badges */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0033A0] to-[#0044CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Why Choose AutoGo?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Differentials that make all the difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="flex-shrink-0 p-4 rounded-xl bg-[#FFD700]/20 group-hover:bg-[#FFD700]/30 transition-colors">
                  <item.icon className="w-8 h-8 text-[#FFD700]" strokeWidth={2.5} />
                </div>
                <p className="text-lg lg:text-xl font-bold text-white leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE AREA */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-[#212121] mb-6">
              Service Areas
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Complete coverage in Connecticut and New York
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#0033A0]/10">
                  <MapPin className="w-10 h-10 text-[#0033A0]" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-[#212121]">Connecticut</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cities.CT.map((city, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-lg font-bold text-[#212121]">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-10 lg:p-12 rounded-3xl border-2 border-gray-100 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#0033A0]/10">
                  <MapPin className="w-10 h-10 text-[#0033A0]" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-[#212121]">New York</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cities.NY.map((city, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-lg font-bold text-[#212121]">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET SOLUTION */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0033A0] to-[#0044CC] rounded-3xl lg:rounded-[3rem] p-10 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-[#FFD700]/20 backdrop-blur-sm rounded-full border border-[#FFD700]/30">
                  <Users className="w-5 h-5 text-[#FFD700]" strokeWidth={2.5} />
                  <span className="text-[#FFD700] font-bold text-sm tracking-wide">CORPORATE SOLUTION</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                  For Your Business<br />
                  <span className="text-[#FFD700]">(AutoGo Fleet)</span>
                </h2>
                
                <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed">
                  Mobile maintenance and fleet management solutions. Monthly subscription plans, reports, and automatic scheduling.
                </p>
                
                <a
                  href={smsLink}
                  className="inline-flex items-center gap-3 bg-[#FFD700] hover:bg-[#FFC107] text-[#212121] px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-105 shadow-2xl"
                >
                  <Users className="w-6 h-6" strokeWidth={2.5} />
                  LEARN MORE FOR FLEETS
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <CheckCircle className="w-10 h-10 text-[#FFD700] mb-4" strokeWidth={2.5} />
                  <p className="text-white font-bold text-lg">Monthly Plans</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <FileText className="w-10 h-10 text-[#FFD700] mb-4" strokeWidth={2.5} />
                  <p className="text-white font-bold text-lg">Detailed Reports</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Clock className="w-10 h-10 text-[#FFD700] mb-4" strokeWidth={2.5} />
                  <p className="text-white font-bold text-lg">Auto Scheduling</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Shield className="w-10 h-10 text-[#FFD700] mb-4" strokeWidth={2.5} />
                  <p className="text-white font-bold text-lg">Complete Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Maximum Conversion */}
      <section className="relative py-24 lg:py-40 bg-gradient-to-br from-[#FFD700] via-[#FFC107] to-[#FFD700] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#0033A0] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border-8 border-[#0033A0] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-8 border-white rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-8 px-8 py-4 bg-[#0033A0]/20 backdrop-blur-sm rounded-full border-2 border-[#0033A0]/30">
            <span className="text-[#0033A0] font-black text-lg tracking-wide">IMMEDIATE SERVICE</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#212121] mb-8 lg:mb-12 leading-[1.1]">
            Need a Mechanic?<br />
            <span className="text-[#0033A0]">Contact Us Now!</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-[#212121]/80 font-bold mb-12 lg:mb-16 max-w-3xl mx-auto">
            Fast, professional service wherever you need it
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-6 mb-12">
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="group w-full sm:w-auto bg-[#0033A0] hover:bg-[#0044CC] text-white px-12 lg:px-16 py-6 lg:py-8 rounded-full font-black text-xl lg:text-2xl flex items-center justify-center gap-4 transition-all hover:scale-105 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <Phone className="w-8 h-8 relative" strokeWidth={2.5} />
              <span className="relative">{phoneNumber}</span>
            </a>
            
            <a
              href={smsLink}
              className="group w-full sm:w-auto bg-white hover:bg-gray-50 text-[#212121] px-12 lg:px-16 py-6 lg:py-8 rounded-full font-black text-xl lg:text-2xl flex items-center justify-center gap-4 transition-all hover:scale-105 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <MessageCircle className="w-8 h-8 relative" strokeWidth={2.5} />
              <span className="relative">TEXT US</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-[#212121]/80">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#0033A0]" strokeWidth={2.5} />
              <span className="font-bold text-lg">Free Quote</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#0033A0]" strokeWidth={2.5} />
              <span className="font-bold text-lg">24/7 Service</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#0033A0]" strokeWidth={2.5} />
              <span className="font-bold text-lg">Full Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Professional & Legal */}
      <footer className="bg-[#212121] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10">
            {/* Logo & Description */}
            <div>
              <Image
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/7e8da001-64eb-4190-81af-83897f2d4a91.png"
                alt="AutoGo"
                width={180}
                height={60}
                className="h-12 w-auto mb-6"
              />
              <p className="text-white/70 text-base leading-relaxed">
                Premium mobile mechanical services for Connecticut and New York.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-black text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="/privacy-policy" className="text-white/70 hover:text-[#FFD700] transition-colors text-base">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-white/70 hover:text-[#FFD700] transition-colors text-base">Terms of Service</a></li>
                <li><a href="/contact" className="text-white/70 hover:text-[#FFD700] transition-colors text-base">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-black text-white mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href={smsLink} className="text-white/70 hover:text-[#FFD700] transition-colors text-base">Preventive Maintenance</a></li>
                <li><a href={smsLink} className="text-white/70 hover:text-[#FFD700] transition-colors text-base">Electronic Diagnostics</a></li>
                <li><a href={smsLink} className="text-white/70 hover:text-[#FFD700] transition-colors text-base">Emergency Service</a></li>
                <li><a href={smsLink} className="text-white/70 hover:text-[#FFD700] transition-colors text-base">Fleet Management</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-black text-white mb-4">Contact</h3>
              <div className="space-y-4">
                <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="flex items-center gap-3 text-white/70 hover:text-[#FFD700] transition-colors text-base">
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  {phoneNumber}
                </a>
                <a href={smsLink} className="flex items-center gap-3 text-white/70 hover:text-[#FFD700] transition-colors text-base">
                  <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                  Text Us
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                © {new Date().getFullYear()} <span className="font-bold text-white">AutoGo LLC</span> - All rights reserved
              </p>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                <Shield className="w-5 h-5 text-[#FFD700]" strokeWidth={2.5} />
                <span className="text-white/80 font-bold text-sm">Licensed and Insured • Mobile Auto Repair Permit</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
