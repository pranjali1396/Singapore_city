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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Filter only the phases we want (1 & 2 combined, and 4)
  const targetPhases = phases.filter(p => [1, 4].includes(p.id))
  const activePhase = phases.find(p => p.id === activePhaseId) || phases[0]

  // Get gallery images for the bottom thumbnails
  const galleryImages = activePhase.sections.find(s => s.title === 'Gallery')?.media || []
  const displayImages = galleryImages.slice(1, 4) // Show next 3 images (skipping main)

  return (
    <div className="relative w-full min-h-screen bg-cream font-sans text-dark-green flex flex-col">

      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-stone-100 via-cream to-stone-200" />

      {/* Top Header Area (Logo & Register Button) */}
      <div className="sticky top-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex justify-between items-start bg-cream/90 backdrop-blur-sm shadow-sm">
        {/* Logo Placeholder */}
        <div className="relative w-48 h-16 -mt-2">
          <Image
            src="/media/logo.png"
            alt="Singapore Life City"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Header Actions */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-16 h-10 sm:w-24 sm:h-12 hidden sm:block">
              <Image
                src="/media/ChouhanG.png"
                alt="Chouhan Group Logo"
                fill
                className="object-contain"
              />
            </div>
            <Link href="/contact" className="bg-dark-green hover:bg-dark-green/90 text-white font-bold py-1.5 px-3 sm:py-2 sm:px-6 rounded shadow-lg uppercase tracking-wide text-xs sm:text-sm transition whitespace-nowrap">
              Register
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
            {/* Dark Overlay for Text Readability - Adjusted to be bottom-heavy */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Text Content Overlay */}
          <div className="relative z-10 p-6 md:p-10 lg:p-12 flex flex-col justify-start items-start min-h-[600px] md:min-h-[700px] max-w-xl h-full">
            <div className="mt-8 md:mt-12">
              {/* Decorative Line */}
              <div className="w-10 h-1 bg-orange-500 mb-3"></div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 text-white drop-shadow-lg">
                {activePhase.shortLabel.split(' ').slice(0, 2).join(' ')} <br />
                <span className="font-light text-cream">{activePhase.shortLabel.split(' ').slice(2).join(' ')}</span>
              </h1>

              <p className="text-[10px] uppercase tracking-widest text-cream/90 mb-3">
                AT SINGAPORE LIFE CITY<br />BY CHOUHAN GROUP
              </p>

              <div className="w-full h-px bg-white/30 mb-3 max-w-[200px]"></div>
            </div>

            <div className="mt-24 md:mt-32 flex flex-col items-start gap-4">
              <p className="text-white font-bold uppercase text-sm md:text-base tracking-wide drop-shadow-md">
                {activePhase.id === 4 ? 'Premium Selection' : 'New Release | Now Selling'}
              </p>

              <Link href="/book-appointment" className="inline-block w-auto px-10 py-5 text-center bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase text-base tracking-widest transition duration-300 shadow-lg hover:shadow-xl">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Thumbnails Row */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 pb-8 grid grid-cols-3 gap-4">
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img.src)}
            className="relative h-32 md:h-40 rounded-lg overflow-hidden border-2 border-transparent hover:border-dark-green transition cursor-pointer group"
          >
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

      {/* Overview Section (Moved from Hero) */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 pb-16 pt-8">
        <div className="text-center mb-8">
          <h3 className="font-serif text-3xl md:text-4xl text-dark-green mb-3">Overview</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="text-stone-600 text-sm md:text-base leading-relaxed space-y-4 text-left max-w-4xl">
          {activePhase.id === 4 ? (
            <>
              <p>
                Discover <strong className="text-dark-green">Singapore Life City Phase 4, Bhilai</strong> – where opulence meets meticulous planning. Developed by <strong className="text-dark-green">Chouhan Group & DHL Indiabulls</strong>, this premium phase embodies Singapore&apos;s legendary excellence in urban development, offering an unparalleled investment opportunity in residential plots and luxury bungalows.
              </p>
              <p>
                This meticulously planned smart township features premium plots (2400-4000 sq ft) and exclusive 3/4 BHK independent villas. With world-class amenities including landscaped entrance gates, underground utilities, modern sewage systems, and lush green spaces, Phase 4 delivers a self-reliant, sustainable lifestyle that combines affordability with sophistication in the heart of Bhilai.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong className="text-dark-green">Singapore Life City Phase 1, Bhilai</strong> – a premium plotting township in Surya Vihar by <strong className="text-dark-green">Chouhan&apos;s & DHL Infrabulls</strong>. Inspired by Singapore&apos;s modern urban design, the project offers well-planned, sustainable, and affordable living with residential plots and provisions for future-ready homes.
              </p>
              <p>
                The township features a grand landscaped entrance, wide concrete roads, underground electrification, landscaped gardens, jogging & cycling tracks, children&apos;s play areas, and a robust water and drainage system—creating a clean, safe, and modern living environment.
              </p>
              <p>
                Designed to set a new benchmark in urban development, Singapore Life City brings together smart planning, green spaces, and top-quality infrastructure for a truly elevated lifestyle in Bhilai.
              </p>
            </>
          )}
        </div>
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



      {/* Image Modal */}
      {
        selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-[101]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIdx = displayImages.findIndex(img => img.src === selectedImage)
                const prevIdx = (currentIdx - 1 + displayImages.length) % displayImages.length
                setSelectedImage(displayImages[prevIdx].src)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all z-[101]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIdx = displayImages.findIndex(img => img.src === selectedImage)
                const nextIdx = (currentIdx + 1) % displayImages.length
                setSelectedImage(displayImages[nextIdx].src)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all z-[101]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Full View"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )
      }
    </div >
  )
}
