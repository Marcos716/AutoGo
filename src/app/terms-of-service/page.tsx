"use client"

import { FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TermsOfService() {
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
              <FileText className="w-10 h-10 text-[#0033A0]" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-[#212121]">
              Terms of Service
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-xl mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using AutoGo's mobile mechanical services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AutoGo provides mobile automotive repair and maintenance services in Connecticut and New York. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Preventive maintenance (oil changes, filter replacements, inspections)</li>
                <li>Electronic diagnostics and troubleshooting</li>
                <li>Brake and suspension repairs</li>
                <li>Electrical system services</li>
                <li>24/7 emergency roadside assistance</li>
                <li>Corporate fleet management solutions</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">3. Service Scheduling and Cancellation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Scheduling:</strong> Services can be scheduled via phone, WhatsApp, or our website. We will confirm your appointment and provide an estimated arrival time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Cancellation:</strong> You may cancel or reschedule your appointment up to 2 hours before the scheduled time without penalty. Cancellations made less than 2 hours in advance may incur a $50 cancellation fee.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>No-Show:</strong> If you are not available at the scheduled location and time, a $75 no-show fee will apply.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">4. Pricing and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Pricing:</strong> Service prices are estimates and may vary based on vehicle condition, parts availability, and additional work required. Final pricing will be confirmed before work begins.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Payment:</strong> Payment is due upon completion of service. We accept credit cards, debit cards, and digital payment methods. All payments are processed securely.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Parts and Materials:</strong> Prices include parts and labor unless otherwise specified. We use OEM or high-quality aftermarket parts.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">5. Warranty and Guarantees</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Service Warranty:</strong> All services are warranted for 90 days or 3,000 miles, whichever comes first. This warranty covers defects in workmanship and parts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Parts Warranty:</strong> Parts are covered by manufacturer warranties, which vary by part and manufacturer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Exclusions:</strong> Warranty does not cover damage caused by misuse, accidents, modifications, or normal wear and tear.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">6. Customer Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate vehicle information and service history</li>
                <li>Ensure safe and accessible location for service</li>
                <li>Be present or designate an authorized representative during service</li>
                <li>Provide payment upon completion of service</li>
                <li>Follow recommended maintenance schedules</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                AutoGo's liability is limited to the cost of the service provided. We are not liable for indirect, incidental, or consequential damages. Our mechanics are licensed, insured, and certified, and we maintain appropriate insurance coverage.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">8. Emergency Services</h2>
              <p className="text-gray-700 leading-relaxed">
                24/7 emergency services are subject to availability and may incur additional fees. Emergency response times vary based on location and demand. We prioritize safety-critical situations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">9. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these terms or our services will be resolved through binding arbitration in accordance with the laws of Connecticut. You waive the right to participate in class action lawsuits.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-black text-[#212121] mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-gray-700 font-bold mb-2">AutoGo LLC</p>
                <p className="text-gray-700">Phone: (475) 370-0824</p>
                <p className="text-gray-700">Email: support@autogo.com</p>
                <p className="text-gray-700">Service Areas: Connecticut & New York</p>
                <p className="text-gray-700 mt-4 text-sm">Licensed and Insured • Mobile Auto Repair Permit</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
