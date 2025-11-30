import React from 'react'
import Link from 'next/link'

type PhaseNavProps = {
    prev: string | null
    next: string | null
}

export default function PhaseNav({ prev, next }: PhaseNavProps) {
    return (
        <div className="flex justify-between mt-12 pt-8 border-t border-stone-200">
            {prev ? (
                <Link
                    href={`/phases/${prev}`}
                    className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition font-medium"
                >
                    ← Previous Phase
                </Link>
            ) : (
                <div />
            )}

            {next ? (
                <Link
                    href={`/phases/${next}`}
                    className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition font-medium"
                >
                    Next Phase →
                </Link>
            ) : (
                <div />
            )}
        </div>
    )
}
