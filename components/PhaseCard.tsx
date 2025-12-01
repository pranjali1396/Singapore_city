import React, { useState } from 'react'
import Image from 'next/image'

type PhaseCardProps = {
    title: string
    body?: string
    media?: { type: 'image' | 'map' | 'video'; src: string; alt?: string }[]
}

export default function PhaseCard({ title, body, media }: PhaseCardProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // Only enable modal for Gallery section
    const isGallerySection = title === 'Gallery'

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 className="text-2xl font-bold mb-4 text-stone-800">{title}</h3>
                {body && <p className="text-stone-600 mb-6 leading-relaxed">{body}</p>}

                {media && media.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {media.map((item, index) => (
                            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                                {item.type === 'image' && (
                                    isGallerySection ? (
                                        <div
                                            className="relative w-full h-full cursor-pointer group"
                                            onClick={() => setSelectedImage(item.src)}
                                        >
                                            <Image
                                                src={item.src}
                                                alt={item.alt || title}
                                                fill
                                                className="object-cover group-hover:opacity-90 transition-opacity"
                                            />
                                        </div>
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.alt || title}
                                            fill
                                            className="object-cover"
                                        />
                                    )
                                )}
                                {item.type === 'map' && (
                                    <iframe
                                        src={item.src}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={item.alt || title}
                                    ></iframe>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Image Modal */}
            {selectedImage && isGallerySection && media && (
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
                            const currentIdx = media.filter(m => m.type === 'image').findIndex(m => m.src === selectedImage)
                            const imageMedia = media.filter(m => m.type === 'image')
                            const prevIdx = (currentIdx - 1 + imageMedia.length) % imageMedia.length
                            setSelectedImage(imageMedia[prevIdx].src)
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
                            const currentIdx = media.filter(m => m.type === 'image').findIndex(m => m.src === selectedImage)
                            const imageMedia = media.filter(m => m.type === 'image')
                            const nextIdx = (currentIdx + 1) % imageMedia.length
                            setSelectedImage(imageMedia[nextIdx].src)
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
            )}
        </>
    )
}
