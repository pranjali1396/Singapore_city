'use client'

import { useState } from 'react'
import { phases } from '@/data/phases'
import Image from 'next/image'
import Link from 'next/link'
import { PiStarFourFill } from 'react-icons/pi'
import ImageCarousel from './ImageCarousel'

export default function FullScreenTabs() {
  // Default to Phase 1
  const [activePhaseId, setActivePhaseId] = useState(1)

  // Filter only the phases we want (1 & 2 combined, and 4)
  const targetPhases = phases.filter(p => [1, 4].includes(p.id))
  const activePhase = phases.find(p => p.id === activePhaseId) || phases[0]

  // Get gallery images for the bottom thumbnails
  const galleryImages = activePhase.sections.find(s => s.title === 'Gallery')?.media || []
  const displayImages = galleryImages.slice(1, 4) // Show next 3 images (skipping main)

  return (
    <div className="relative w-full min-h-screen bg-cream font-sans text-dark-green flex flex-col">

      {/* Background Image - Blurred/Darkened */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-2a4d9fdd4070?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          fill
          className="object-cover opacity-40 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-cream/30" />
      </div>

      {/* Top Header Area (Logo & Register Button) */}
      <div className="sticky top-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex justify-between items-start bg-cream/90 backdrop-blur-sm shadow-sm">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          {/* Simulating the logo from the image */}
          <div className="w-10 h-10 bg-dark-green rounded flex items-center justify-center border border-dark-green text-cream">
            <span className="font-serif font-bold text-xl">SL</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-wide text-dark-green">Singapore</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-dark-green/70">Life City</span>
          </div>
        </div>

        {/* Right Header Actions */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-3">
            <div className="relative w-24 h-12">
              <Image
                src="/media/ChouhanG.png"
                alt="Chouhan Group Logo"
                fill
                className="object-contain"
              />
            </div>
            <Link href="/contact" className="bg-dark-green hover:bg-dark-green/90 text-white font-bold py-2 px-6 rounded shadow-lg uppercase tracking-wide text-sm transition">
              Register Today
            </Link>
          </div>
          <div className="text-xs font-medium text-dark-green space-x-2 mr-2">
            <Link href="/contact" className="hover:text-orange-600 active:text-orange-600">CONTACT</Link>
            <span>|</span>
            <button className="hover:text-orange-600 active:text-orange-600">EN</button>
            <span>|</span>
            <button className="hover:text-orange-600 active:text-orange-600">HINDI</button>
          </div>
        </div>
      </div>

      {/* Main Content Area - Centered Card */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center w-full max-w-6xl mx-auto px-4 py-4">

        {/* Tab Navigation Bar (Top of Card) */}
        <div className="sticky top-[88px] z-40 w-full bg-cream/95 text-dark-green/80 flex items-center px-6 py-0 rounded-t-lg overflow-hidden shadow-md border-b border-stone-100">
          {targetPhases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhaseId(phase.id)}
              className={`
                py-4 px-6 text-sm font-medium uppercase tracking-wider border-t-4 transition-colors
                ${activePhaseId === phase.id
                  ? 'border-dark-green text-dark-green bg-white'
                  : 'border-transparent text-dark-green/60 hover:text-dark-green hover:bg-white/50'
                }
              `}
            >
              {phase.name}
            </button>
          ))}
          <Link href="/gallery" className="ml-auto py-4 px-6 text-sm font-medium uppercase tracking-wider border-t-4 border-transparent text-dark-green/60 hover:text-dark-green hover:bg-white/50">
            Gallery
          </Link>
          <Link href="/about-us" className="py-4 px-6 text-sm font-medium uppercase tracking-wider border-t-4 border-transparent text-dark-green/60 hover:text-dark-green hover:bg-white/50">
            About Us
          </Link>
        </div>

        {/* Main Card Content (Full Background Image with Text Overlay) */}
        <div className="w-full shadow-2xl rounded-b-lg overflow-hidden relative min-h-[600px] md:min-h-[700px]">

          {/* Background Hero Image */}
          <div className="absolute inset-0 z-0">
            {activePhase.sections.find(s => s.title === 'Gallery')?.media?.[0] ? (
              <Image
                src={activePhase.sections.find(s => s.title === 'Gallery')!.media![0].src}
                alt={activePhase.name}
                fill
                className="object-cover object-center"
                priority
              />
            ) : (
              <div className="w-full h-full bg-stone-100 flex items-center justify-center text-gray-500">No Image Available</div>
            )}
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>

          {/* Text Content Overlay */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[600px] md:min-h-[700px] max-w-3xl">
            {/* Decorative Line */}
            <div className="w-12 h-1 bg-orange-500 mb-8"></div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 text-white drop-shadow-lg">
              {activePhase.shortLabel.split(' ').slice(0, 2).join(' ')} <br />
              <span className="font-light text-cream">{activePhase.shortLabel.split(' ').slice(2).join(' ')}</span>
            </h1>

            <p className="text-xs uppercase tracking-widest text-cream/90 mb-8">
              AT SINGAPORE LIFE CITY<br />BY CHOUHAN GROUP
            </p>

            <div className="w-full h-px bg-white/30 mb-8"></div>

            <p className="text-white font-bold uppercase text-sm mb-6 tracking-wide">
              {activePhase.id === 4 ? 'Premium Selection' : 'New Release | Now Selling'}
            </p>

            {/* Project Overview (SEO Optimized) */}
            <div className="mb-8 text-white/90 text-sm md:text-base leading-relaxed space-y-4 border-l-2 border-orange-500 pl-4 bg-black/30 backdrop-blur-sm p-4 rounded-r-lg">
              {activePhase.id === 4 ? (
                <>
                  <p>
                    Discover <strong className="text-white">Singapore Life City Phase 4, Bhilai</strong> – where opulence meets meticulous planning. Developed by <strong className="text-white">Chouhan Group & DHL Indiabulls</strong>, this premium phase embodies Singapore's legendary excellence in urban development, offering an unparalleled investment opportunity in residential plots and luxury bungalows.
                  </p>
                  <p>
                    This meticulously planned smart township features premium plots (2400-4000 sq ft) and exclusive 3/4 BHK independent villas. With world-class amenities including landscaped entrance gates, underground utilities, modern sewage systems, and lush green spaces, Phase 4 delivers a self-reliant, sustainable lifestyle that combines affordability with sophistication in the heart of Bhilai.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Experience the pinnacle of modern living at <strong className="text-white">Singapore Life City, Bhilai</strong> – a landmark township in Surya Vihar by <strong className="text-white">Chouhan Group & DHL Infrabulls</strong>. Inspired by the architectural excellence of Singapore, this project redefines urban lifestyle with sustainable planning and premium residential plots.
                  </p>
                  <p>
                    Designed for a smart, green future, the township features world-class infrastructure including a grand landscaped entrance, underground electrification, wide concrete roads, and dedicated cycling & jogging tracks. With lush gardens, children's play areas, and robust water & drainage systems, Singapore Life City offers a perfect blend of luxury, comfort, and affordability in the heart of Bhilai.
                  </p>
                </>
              )}
            </div>

            <Link href="/book-appointment" className="inline-block w-auto px-8 py-4 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase text-sm tracking-widest transition duration-300 shadow-lg hover:shadow-xl">
              Book an Appointment
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Thumbnails Row */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 pb-8 grid grid-cols-3 gap-4">
        {displayImages.map((img, idx) => (
          <div key={idx} className="relative h-32 md:h-40 rounded-lg overflow-hidden border-2 border-transparent hover:border-dark-green transition cursor-pointer group">
            <Image
              src={img.src}
              alt={`Thumbnail ${idx}`}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
          </div>
        ))}
        {/* Fill with placeholders if not enough images */}
        {[...Array(Math.max(0, 3 - displayImages.length))].map((_, i) => (
          <div key={`placeholder-${i}`} className="h-32 md:h-40 bg-stone-200 rounded-lg border border-stone-300"></div>
        ))}
      </div>

      {/* Amenities Section (Modern Text Layout) */}
      {activePhase.sections.find(s => s.title === 'Amenities')?.body && (
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 pb-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl md:text-4xl text-dark-green mb-3">World-Class Amenities</h3>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activePhase.sections.find(s => s.title === 'Amenities')!.body!.split('•').map((item, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cream rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-700 opacity-50"></div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className="mt-1 p-2 bg-cream rounded-lg text-dark-green group-hover:bg-dark-green group-hover:text-cream transition-colors duration-300">
                    <PiStarFourFill className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-dark-green mb-1 group-hover:text-orange-600 transition-colors">{item.trim()}</h4>
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Premium Feature</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Specifications Section */}
      {activePhase.sections.find(s => s.title === 'Project Specifications') && (
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 pb-12">
          <h3 className="text-dark-green font-bold uppercase text-lg tracking-wider mb-6 text-center">Project Specifications</h3>
          <div className="bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden">
            {/* RERA Number - Highlighted */}
            <div className="bg-dark-green text-cream p-6 text-center">
              <div className="text-sm uppercase tracking-wider mb-2 opacity-90">RERA Registration Number</div>
              <div className="text-2xl md:text-3xl font-bold tracking-wide">PCGRERA150318000006</div>
            </div>

            {/* Land Area Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-200">
              <div className="bg-white p-6 text-center hover:bg-cream transition">
                <div className="text-xs uppercase tracking-wider text-dark-green/60 mb-2">Total Land Area</div>
                <div className="text-xl md:text-2xl font-bold text-dark-green">92,500</div>
                <div className="text-xs text-dark-green/80 mt-1">SQ.MT</div>
              </div>

              <div className="bg-white p-6 text-center hover:bg-cream transition">
                <div className="text-xs uppercase tracking-wider text-dark-green/60 mb-2">Planning Area</div>
                <div className="text-xl md:text-2xl font-bold text-dark-green">85,650</div>
                <div className="text-xs text-dark-green/80 mt-1">SQ.MT</div>
              </div>

              <div className="bg-white p-6 text-center hover:bg-cream transition">
                <div className="text-xs uppercase tracking-wider text-dark-green/60 mb-2">Net Planning Area</div>
                <div className="text-xl md:text-2xl font-semibold text-dark-green">48,630</div>
                <div className="text-xs text-dark-green/80 mt-1">SQ.MT</div>
              </div>

              <div className="bg-white p-6 text-center hover:bg-cream transition">
                <div className="text-xs uppercase tracking-wider text-dark-green/60 mb-2">Plotting Area</div>
                <div className="text-xl md:text-2xl font-bold text-dark-green">28,742</div>
                <div className="text-xs text-dark-green/80 mt-1">SQ.MT</div>
              </div>

              <div className="bg-white p-6 text-center hover:bg-cream transition">
                <div className="text-xs uppercase tracking-wider text-dark-green/60 mb-2">Open Area</div>
                <div className="text-xl md:text-2xl font-bold text-dark-green">4,861</div>
                <div className="text-xs text-dark-green/80 mt-1">SQ.MT</div>
              </div>

              <div className="bg-white p-6 text-center hover:bg-cream transition">
                <div className="text-xs uppercase tracking-wider text-dark-green/60 mb-2">Road Area</div>
                <div className="text-xl md:text-2xl font-bold text-dark-green">11,669</div>
                <div className="text-xs text-dark-green/80 mt-1">SQ.MT</div>
              </div>

              <div className="bg-white p-6 text-center hover:bg-cream transition">
                <div className="text-xs uppercase tracking-wider text-dark-green/60 mb-2">Utility Shop Area</div>
                <div className="text-xl md:text-2xl font-bold text-dark-green">451</div>
                <div className="text-xs text-dark-green/80 mt-1">SQ.MT</div>
              </div>

              <div className="bg-white p-6 text-center hover:bg-cream transition">
                <div className="text-xs uppercase tracking-wider text-dark-green/60 mb-2">Future Planning</div>
                <div className="text-xl md:text-2xl font-bold text-dark-green">37,020</div>
                <div className="text-xs text-dark-green/80 mt-1">SQ.MT</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plot Area Details Section */}
      {activePhase.sections.find(s => s.title === 'Plot Area Details') && (
        <div className="relative z-20 w-full max-w-3xl mx-auto px-4 pb-12">
          <h3 className="text-dark-green font-bold uppercase text-base tracking-wider mb-4 text-center">Plot Area Details</h3>
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-dark-green text-cream">
                  <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase tracking-wider w-8">SR</th>
                  <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase tracking-wider w-16">Size</th>
                  <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase tracking-wider">Plot Numbers</th>
                  <th className="px-2 py-2 text-right text-[10px] font-semibold uppercase tracking-wider w-14">Area</th>
                  <th className="px-2 py-2 text-right text-[10px] font-semibold uppercase tracking-wider w-8">No.</th>
                  <th className="px-2 py-2 text-right text-[10px] font-semibold uppercase tracking-wider w-14">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {JSON.parse(activePhase.sections.find(s => s.title === 'Plot Area Details')!.body!).map((plotType: any, typeIdx: number) => (
                  <>
                    {plotType.plots.map((plot: any, plotIdx: number) => (
                      <tr key={`${typeIdx}-${plotIdx}`} className="hover:bg-cream transition">
                        <td className="px-2 py-1.5 text-xs font-bold text-dark-green align-top">
                          {plotType.srNo}
                        </td>
                        <td className="px-2 py-1.5 text-[10px] font-semibold text-dark-green align-top">
                          <div className="break-words leading-tight">{plotType.plotSize}</div>
                        </td>
                        <td className="px-2 py-1.5 text-[10px] text-dark-green/80 align-top">
                          <div className="break-all leading-tight">
                            {plot.plotNos}
                          </div>
                        </td>
                        <td className="px-2 py-1.5 text-[10px] text-right text-dark-green align-top">
                          {plot.area}
                        </td>
                        <td className="px-2 py-1.5 text-[10px] text-right text-dark-green align-top">
                          {plot.count}
                        </td>
                        <td className="px-2 py-1.5 text-[10px] text-right font-semibold text-dark-green align-top">
                          {plot.total}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Master Layout Section (Moved before Why Choose Us) */}
      {activePhase.sections.find(s => s.title === 'Master Layout') && (
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 pb-12 text-center">
          <h3 className="text-dark-green font-bold uppercase text-lg tracking-wider mb-6">Master Layout</h3>

          {/* Layout Image */}
          {activePhase.sections.find(s => s.title === 'Master Layout')?.media?.[0] && (
            <div className="relative w-full aspect-video md:aspect-[21/9] mb-8 rounded-lg overflow-hidden border border-stone-200 shadow-xl">
              <Image
                src={activePhase.sections.find(s => s.title === 'Master Layout')!.media![0].src}
                alt="Master Layout"
                fill
                className="object-contain bg-cream"
              />
            </div>
          )}

          {/* Brochure Button */}
          {activePhase.sections.find(s => s.title === 'Master Layout')?.action && (
            <a
              href={activePhase.sections.find(s => s.title === 'Master Layout')!.action!.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dark-green hover:bg-dark-green/90 text-white font-bold py-3 px-8 rounded shadow-lg uppercase tracking-wide text-sm transition transform hover:scale-105"
            >
              {activePhase.sections.find(s => s.title === 'Master Layout')!.action!.label}
            </a>
          )}
        </div>
      )}

      {/* Auto-Rotating Gallery Carousel */}
      <ImageCarousel images={galleryImages} />

      {/* Location Section (Added after Gallery) */}
      {activePhase.sections.find(s => s.title === 'Location') && (
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 pb-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl md:text-4xl text-dark-green mb-3">Location</h3>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {activePhase.sections.find(s => s.title === 'Location')?.media?.[0] && (
            <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-stone-200">
              <iframe
                src={activePhase.sections.find(s => s.title === 'Location')!.media![0].src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${activePhase.name} Location Map`}
              ></iframe>
            </div>
          )}
        </div>
      )}

      {/* Why Choose Us Section (Moved below Amenities) */}
      {activePhase.sections.find(s => s.title === 'Why Choose Us?') && (
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 pb-16 text-center">
          <h3 className="text-dark-green font-bold uppercase text-lg tracking-wider mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {activePhase.sections.find(s => s.title === 'Why Choose Us?')!.body!.split('•').map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-stone-200 hover:bg-cream transition shadow-sm">
                <span className="text-dark-green text-xl">✓</span>
                <span className="text-dark-green/80 text-sm leading-relaxed">{item.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
