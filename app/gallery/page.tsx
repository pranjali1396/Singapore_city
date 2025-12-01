'use client'

import { phases } from '@/data/phases'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function GalleryPage() {
    const [activePhaseId, setActivePhaseId] = useState(1)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // Get images for the active phase
    const activePhase = phases.find(p => p.id === activePhaseId)
    const gallerySection = activePhase?.sections.find(s => s.title === 'Gallery')
    const images = gallerySection?.media?.map(media => ({
        ...media,
        phaseName: activePhase?.shortLabel
    })) || []

    return (
        <div className="min-h-screen bg-cream font-sans text-dark-green">
            {/* Header */}
            <div className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-sm shadow-sm border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-dark-green rounded flex items-center justify-center border border-dark-green text-cream group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                            <span className="font-serif font-bold text-lg">SL</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-serif text-lg tracking-wide text-dark-green group-hover:text-orange-600 transition-colors">Singapore</span>
                            <span className="text-[8px] uppercase tracking-[0.2em] text-dark-green/70">Life City</span>
                        </div>
                    </Link>

                    <Link href="/" className="text-sm font-bold uppercase tracking-widest text-dark-green hover:text-orange-600 transition-colors">
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl text-dark-green mb-4">Image Gallery</h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-dark-green/70 max-w-2xl mx-auto">
                        Explore the visual journey of Singapore Life City. From premium plots to lush green landscapes, witness the future of modern living.
                    </p>
                </div>

                {/* Phase Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActivePhaseId(1)}
                        className={`px-8 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-all ${activePhaseId === 1
                            ? 'bg-dark-green text-cream shadow-lg'
                            : 'bg-white text-dark-green border-2 border-dark-green hover:bg-dark-green hover:text-cream'
                            }`}
                    >
                        Phase 1 & 2
                    </button>
                    <button
                        onClick={() => setActivePhaseId(4)}
                        className={`px-8 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-all ${activePhaseId === 4
                            ? 'bg-dark-green text-cream shadow-lg'
                            : 'bg-white text-dark-green border-2 border-dark-green hover:bg-dark-green hover:text-cream'
                            }`}
                    >
                        Phase 4
                    </button>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedImage(img.src)}
                            className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt || 'Gallery Image'}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">{img.phaseName}</span>
                                <span className="text-white font-serif text-lg">{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


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
                                const currentIdx = images.findIndex(img => img.src === selectedImage)
                                const prevIdx = (currentIdx - 1 + images.length) % images.length
                                setSelectedImage(images[prevIdx].src)
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
                                const currentIdx = images.findIndex(img => img.src === selectedImage)
                                const nextIdx = (currentIdx + 1) % images.length
                                setSelectedImage(images[nextIdx].src)
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
