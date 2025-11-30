import Link from 'next/link'

export const metadata = {
    title: 'Terms & Conditions | Singapore Life City - Chouhan Group',
    description: 'Terms and Conditions for Singapore Life City by Chouhan Group. Read our terms of use, property booking policies, and disclaimers.',
}

export default function TermsPage() {
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
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Terms & Conditions</h1>
                <p className="text-stone-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-stone max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-stone-600 leading-relaxed">
                            By accessing and using the Singapore Life City website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">2. Property Information</h2>
                        <p className="text-stone-600 leading-relaxed">
                            All property information, including but not limited to plot sizes, layouts, amenities, and pricing, is subject to change without prior notice. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">3. Booking and Payments</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            Booking of plots or bungalows is subject to availability and confirmation by Chouhan Group.
                        </p>
                        <ul className="list-disc pl-6 text-stone-600 space-y-2">
                            <li>Prices are subject to change without notice.</li>
                            <li>All payments must be made through authorized channels only.</li>
                            <li>Taxes and other government levies are applicable as per prevailing laws.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">4. Intellectual Property</h2>
                        <p className="text-stone-600 leading-relaxed">
                            The content, design, layout, graphics, and other materials on this website are owned by or licensed to Chouhan Group and are protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any material on this site without our prior written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">5. Limitation of Liability</h2>
                        <p className="text-stone-600 leading-relaxed">
                            In no event will Chouhan Group be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">6. External Links</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Through this website, you may be able to link to other websites which are not under the control of Chouhan Group. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">7. Governing Law</h2>
                        <p className="text-stone-600 leading-relaxed">
                            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Durg/Bhilai, Chhattisgarh.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">8. Contact Us</h2>
                        <p className="text-stone-600 leading-relaxed">
                            If you have any questions about these Terms & Conditions, please contact us at:
                        </p>
                        <div className="mt-4 p-6 bg-white rounded-lg border border-stone-200">
                            <p className="font-bold text-stone-800">Chouhan Group</p>
                            <p className="text-stone-600">Chouhan Estate, Ground & 1st Floor, G. E. Road</p>
                            <p className="text-stone-600">Supela, Bhilai (C.G.)</p>
                            <p className="text-stone-600 mt-2">Email: info@singaporelifecity.com</p>
                            <p className="text-stone-600">Phone: +91 98765 43210</p>
                        </div>
                    </section>
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
