import React from 'react'
import Image from 'next/image'

type PhaseCardProps = {
    title: string
    body?: string
    media?: { type: 'image' | 'map' | 'video'; src: string; alt?: string }[]
}

export default function PhaseCard({ title, body, media }: PhaseCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
            <h3 className="text-2xl font-bold mb-4 text-stone-800">{title}</h3>
            {body && <p className="text-stone-600 mb-6 leading-relaxed">{body}</p>}

            {media && media.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {media.map((item, index) => (
                        <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                            {item.type === 'image' && (
                                <Image
                                    src={item.src}
                                    alt={item.alt || title}
                                    fill
                                    className="object-cover"
                                />
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
    )
}
