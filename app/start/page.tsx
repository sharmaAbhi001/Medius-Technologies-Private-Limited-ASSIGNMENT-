import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function StartPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-[#00854B] font-medium">
            Better Mortgage
          </Link>
          <Link
            href="tel:(415) 523 8837"
            className="flex items-center gap-2 text-gray-800 hover:text-[#00854B] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Need help? Call (415) 523 8837</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Profile Image */}
          <div className="w-20 h-20 mx-auto mb-6 ">
            <Image width={100} height={100} className="rounded-full" src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg" alt="Profile" />
          </div>

          {/* Welcome Text */}
          <h1 className="text-4xl font-medium text-gray-900 mb-2">It&apos;s a great day!</h1>
          <h2 className="text-3xl font-medium text-gray-900 mb-8">What can I help you with?</h2>

          {/* Action Buttons */}
          <div className="space-y-4 mb-16">
            <button className="w-full p-4 text-left border rounded-lg hover:border-[#00854B] transition-colors flex items-center gap-3">
              <span className="text-[#00854B]">🏠</span>
              Buying a home
            </button>
            <button className="w-full p-4 text-left border rounded-lg hover:border-[#00854B] transition-colors flex items-center gap-3">
              <span className="text-[#00854B]">🏦</span>
              Refinance my mortgage
            </button>
            <button className="w-full p-4 text-left border rounded-lg hover:border-[#00854B] transition-colors flex items-center gap-3">
              <span className="text-[#00854B]">💰</span>
              Get cash from my home
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$100B</div>
              <div className="text-gray-600">home loans funded entirely online</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">400K</div>
              <div className="text-gray-600">Customers who chose a Better Mortgage</div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-green-50 p-6 rounded-lg text-left">
            <h3 className="text-gray-700 mb-4">After a few questions, you'll unlock:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-[#00854B]">⭐</span>
                <span>Custom mortgage rates</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#00854B]">💎</span>
                <span>Exclusive offers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#00854B]">📱</span>
                <span>A personalized dashboard</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

