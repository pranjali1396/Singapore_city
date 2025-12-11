import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="relative w-48 h-16 mix-blend-multiply">
                        <Image
                            src="/media/logo.png"
                            alt="Singapore Life City"
                            fill
                            className="object-contain object-left"
                            priority
                        />
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Contact & Registration</h1>
                    <p className="text-stone-500 max-w-2xl mx-auto">
                        We are here to help you find your dream home. Reach out to us for any inquiries about Singapore Life City.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                            <h2 className="text-2xl font-serif text-stone-900 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600 text-xl">📍</span>
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <div>
                                            <h3 className="font-bold text-stone-800 mb-1">Singapore Life City Phase 1 & 2</h3>
                                            <p className="text-stone-600 leading-relaxed text-sm">
                                                Surya Vihar, Bhilai - 490020, Chhattisgarh
                                            </p>
                                        </div>
                                        <div className="border-t border-stone-100 pt-4">
                                            <h3 className="font-bold text-stone-800 mb-1">Singapore Life City Phase 4</h3>
                                            <p className="text-stone-600 leading-relaxed text-sm">
                                                Near IIT Bhilai, Surya Vihar Road, Village Kutelabhata,<br />
                                                Bhilai, Chhattisgarh
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600 text-xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-stone-800 mb-1">Call Us</h3>
                                        <p className="text-stone-600">+91 98765 43210</p>
                                        <p className="text-stone-600">+91 12345 67890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600 text-xl">✉️</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-stone-800 mb-1">Email Us</h3>
                                        <p className="text-stone-600">info@singaporelifecity.com</p>
                                        <p className="text-stone-600">sales@singaporelifecity.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Maps */}
                        <div className="space-y-4">
                            <div className="bg-white p-2 rounded-xl shadow-sm border border-stone-200 h-64 overflow-hidden relative">
                                <div className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded shadow text-xs font-bold text-stone-800">Phase 1 & 2</div>
                                <iframe
                                    src="https://maps.google.com/maps?q=Chouhan+Singapore+City+Phase+1&z=15&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                    title="Phase 1 Map"
                                ></iframe>
                            </div>
                            <div className="bg-white p-2 rounded-xl shadow-sm border border-stone-200 h-64 overflow-hidden relative">
                                <div className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded shadow text-xs font-bold text-stone-800">Phase 4</div>
                                <iframe
                                    src="https://maps.google.com/maps?q=IIT+Bhilai&z=15&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                    title="Phase 4 Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
                        <h2 className="text-2xl font-serif text-stone-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-stone-700 mb-2">City / Country</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    placeholder="Bhilai, India"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phase" className="block text-sm font-medium text-stone-700 mb-2">Phase of Interest</label>
                                    <select
                                        id="phase"
                                        name="phase"
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    >
                                        <option>Select Phase</option>
                                        <option>Phase 1</option>
                                        <option>Phase 2</option>
                                        <option>Phase 4</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="propertyType" className="block text-sm font-medium text-stone-700 mb-2">Property Type</label>
                                    <select
                                        id="propertyType"
                                        name="propertyType"
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                    >
                                        <option>Select Type</option>
                                        <option>Plot</option>
                                        <option>Bungalow</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Are you a Broker?</label>
                                    <div className="flex gap-4 mt-2">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="broker" value="yes" className="text-orange-500 focus:ring-orange-500" />
                                            <span className="text-stone-600">Yes</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="broker" value="no" className="text-orange-500 focus:ring-orange-500" defaultChecked />
                                            <span className="text-stone-600">No</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="source" className="block text-sm font-medium text-stone-700 mb-2">Source of Referral</label>
                                    <input
                                        type="text"
                                        id="source"
                                        name="source"
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                                        placeholder="e.g. Google, Friend"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
                                    placeholder="Tell us what you&apos;re looking for..."
                                ></textarea>
                            </div>

                            <div className="space-y-4">
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg uppercase tracking-wide text-sm transition transform hover:scale-[1.02]"
                                >
                                    Submit
                                </button>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow uppercase tracking-wide text-xs transition"
                                    >
                                        WhatsApp Us
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded-lg shadow uppercase tracking-wide text-xs transition"
                                    >
                                        Download Brochure
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>


        </div>
    )
}
