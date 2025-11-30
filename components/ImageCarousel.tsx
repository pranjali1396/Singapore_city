'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

interface ImageCarouselProps {
    images: { src: string; alt?: string }[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 4000) // Rotate every 4 seconds

        return () => clearInterval(timer)
    }, [images.length])

    const navigate = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        } else {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }
    }

    if (!images.length) return null

    return (
        <div className="relative w-full max-w-6xl mx-auto px-4 pb-16">
            <div className="text-center mb-10">
                <h3 className="font-serif text-3xl md:text-4xl text-dark-green mb-3">Project Gallery</h3>
                <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-stone-200 group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt || 'Gallery Image'}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={() => navigate('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                >
                    <PiCaretLeftBold className="text-2xl" />
                </button>
                <button
                    onClick={() => navigate('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                >
                    <PiCaretRightBold className="text-2xl" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-orange-500 w-6' : 'bg-white/50 hover:bg-white'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
