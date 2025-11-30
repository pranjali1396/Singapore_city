'use client'

import Link from 'next/link'

export default function BookAppointmentPage() {
    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center border border-orange-600 text-white">
                            <span className="font-serif font-bold text-xl">SL</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-serif text-xl tracking-wide">Singapore</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Life City</span>
                        </div>
                    </div>
                    <Link
                        href="/"
                        className="text-sm font-medium uppercase tracking-wider text-stone-500 hover:text-orange-600 transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Book an Appointment</h1>
                    <p className="text-stone-500">
                        Schedule a visit to our site and discover your dream home.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-stone-200">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="time" className="block text-sm font-medium text-stone-700 mb-2">Preferred Time</label>
                                <select
                                    id="time"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                >
                                    <option>Select Time Slot</option>
                                    <option>Morning (10 AM - 12 PM)</option>
                                    <option>Afternoon (12 PM - 3 PM)</option>
                                    <option>Evening (3 PM - 6 PM)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message (Optional)</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
                                placeholder="Any specific requirements or questions..."
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg uppercase tracking-wide text-sm transition transform hover:scale-[1.02]"
                        >
                            Confirm Appointment
                        </button>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-400 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">© {new Date().getFullYear()} Singapore Life City. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
