"use client"

import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Contact() {
  const phoneNumber = "(475) 370-0824"
  const whatsappLink = "https://api.whatsapp.com/send/?phone=14753700824&text&type=phone_number&app_absent=0"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <Image
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/7e8da001-64eb-4190-81af-83897f2d4a91.png"
                alt="AutoGo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-[#0033A0] hover:text-[#0044CC] font-bold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black text-[#212121] mb-6">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              We're here to help! Reach out for service requests, questions, or support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#0033A0] to-[#0044CC] p-8 rounded-3xl text-white shadow-2xl">
                <h2 className="text-3xl font-black mb-6">Get in Touch</h2>
                <p className="text-lg text-white/90 mb-8">
                  Choose your preferred method to contact us. We're available 24/7 for emergency services.
                </p>

                <div className="space-y-6">
                  <a
                    href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                    className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-[#FFD700]/20 group-hover:bg-[#FFD700]/30 transition-colors">
                      <Phone className="w-6 h-6 text-[#FFD700]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 font-bold">Call Us</p>
                      <p className="text-xl font-black">{phoneNumber}</p>
                    </div>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-[#FFD700]/20 group-hover:bg-[#FFD700]/30 transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#FFD700]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 font-bold">WhatsApp</p>
                      <p className="text-xl font-black">Chat with Us</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="p-3 rounded-xl bg-[#FFD700]/20">
                      <Mail className="w-6 h-6 text-[#FFD700]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 font-bold">Email</p>
                      <p className="text-xl font-black">support@autogo.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#0033A0]/10">
                    <Clock className="w-6 h-6 text-[#0033A0]" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#212121]">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-bold">Monday - Friday</span>
                    <span className="text-[#0033A0] font-black">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-bold">Saturday</span>
                    <span className="text-[#0033A0] font-black">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-bold">Sunday</span>
                    <span className="text-[#0033A0] font-black">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-red-600 font-black text-lg">🚨 Emergency Services: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#0033A0]/10">
                    <MapPin className="w-6 h-6 text-[#0033A0]" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#212121]">Service Areas</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-black text-[#212121] mb-4">Connecticut</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {["Bridgeport", "Waterbury", "Stamford", "New Haven", "Hartford", "Norwalk"].map((city) => (
                        <div key={city} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                          <div className="w-2 h-2 bg-[#0033A0] rounded-full"></div>
                          <span className="text-gray-700 font-bold">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-[#212121] mb-4">New York</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {["White Plains", "Bronx", "Queens", "Long Island", "Yonkers", "New Rochelle"].map((city) => (
                        <div key={city} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                          <div className="w-2 h-2 bg-[#0033A0] rounded-full"></div>
                          <span className="text-gray-700 font-bold">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> We serve additional areas within Connecticut and New York. Contact us to confirm service availability in your location.
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFC107] p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-black text-[#212121] mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#0033A0] hover:bg-[#0044CC] text-white px-8 py-5 rounded-full font-black text-lg text-center transition-all hover:scale-105 shadow-lg"
                  >
                    REQUEST SERVICE NOW
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-full font-black text-lg text-center transition-all hover:scale-105 shadow-lg"
                  >
                    🚨 EMERGENCY SOS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
