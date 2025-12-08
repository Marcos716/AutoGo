"use client"

import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicy() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-[#0033A0]/10">
              <Shield className="w-10 h-10 text-[#0033A0]" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-[#212121]">
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-xl mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At AutoGo, we collect information necessary to provide you with the best mobile mechanical services. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Information:</strong> Name, phone number, email address, and service location</li>
                <li><strong>Vehicle Information:</strong> Make, model, year, VIN, and service history</li>
                <li><strong>Payment Information:</strong> Credit card details processed securely through our payment partners</li>
                <li><strong>Location Data:</strong> GPS coordinates to dispatch mechanics to your location</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Schedule and dispatch mobile mechanics to your location</li>
                <li>Process payments securely and provide digital receipts</li>
                <li>Maintain your vehicle service history and records</li>
                <li>Send service reminders and maintenance notifications</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> Certified mechanics and technicians who perform services</li>
                <li><strong>Payment Processors:</strong> Secure third-party payment platforms</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">5. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to improve your experience, analyze usage patterns, and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or your personal information, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-gray-700 font-bold mb-2">AutoGo LLC</p>
                <p className="text-gray-700">Phone: (475) 370-0824</p>
                <p className="text-gray-700">Email: privacy@autogo.com</p>
                <p className="text-gray-700">Service Areas: Connecticut & New York</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
