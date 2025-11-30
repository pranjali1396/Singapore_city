'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/chouhan-group', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaFacebook, href: 'https://www.facebook.com/share/17atysTgnf/', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FaInstagram, href: 'https://www.instagram.com/chouhan_housing_commercial?igsh=MTZuNXpibTF4N2k4bA==', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: FaTwitter, href: 'https://x.com/ChouhanHousing?t=qr_WRxVvfJ9a6q9yU_rHlA&s=09', label: 'X', color: 'hover:text-stone-900' },
  ]

  return (
    <footer className="bg-white border-t border-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/media/ChouhanG.png"
                  alt="Chouhan Group Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">Singapore Life City</h3>
                <p className="text-sm text-stone-500">By Chouhan Group</p>
              </div>
            </div>
            <p className="text-stone-600 leading-relaxed">
              A landmark plotted township along the Bhilai–Durg corridor.
              Building communities for the future with premium developments.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold text-stone-900 mb-6">Contact Us</h4>
            <div className="space-y-4 text-stone-600">
              <div>
                <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Singapore Life City Phase 1 and 2</p>
                <p className="text-sm">Surya Vihar, Bhilai - 490020, Chhattisgarh</p>
              </div>
              <div>
                <p className="font-bold text-stone-800 text-sm uppercase tracking-wide mb-1">Singapore Life City Phase 4</p>
                <p className="text-sm">Near IIT Bhilai, Surya Vihar Road, Village Kutelabhata, Bhilai, Chhattisgarh</p>
              </div>
              <div className="pt-2">
                <p className="font-medium text-stone-900">+91 98765 43210</p>
                <p>info@singaporelifecity.com</p>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-lg font-bold text-stone-900 mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl text-stone-400 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-stone-500 hover:text-orange-600 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-stone-500 hover:text-orange-600 transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 mt-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="relative w-6 h-6 opacity-80">
                <Image
                  src="/media/ChouhanG.png"
                  alt="Chouhan Group"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-stone-500 text-sm text-center">
                © {new Date().getFullYear()} Chouhan Group. All rights reserved.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="text-stone-400 hover:text-orange-600 transition-colors text-sm flex items-center gap-2"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

