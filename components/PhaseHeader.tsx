import React from 'react'

type PhaseHeaderProps = {
    name: string
    shortLabel: string
    description: string
    colorKey: string
}

export default function PhaseHeader({ name, shortLabel, description, colorKey }: PhaseHeaderProps) {
    return (
        <div className={`bg-${colorKey} text-white py-12 px-4 mb-8 rounded-lg shadow-md`}>
            <h1 className="text-4xl font-bold mb-2">{name}</h1>
            <h2 className="text-xl font-medium mb-4">{shortLabel}</h2>
            <p className="text-lg opacity-90">{description}</p>
        </div>
    )
}
