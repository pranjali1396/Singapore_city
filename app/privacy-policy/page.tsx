import Link from 'next/link'

export const metadata = {
    title: 'Privacy Policy | Singapore Life City - Chouhan Group',
    description: 'Privacy Policy for Singapore Life City by Chouhan Group. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
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
                <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Privacy Policy</h1>
                <p className="text-stone-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-stone max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">1. Introduction</h2>
                        <p className="text-stone-600 leading-relaxed">
                            Welcome to Singapore Life City (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a project by Chouhan Group. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">2. Information We Collect</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 text-stone-600 space-y-2">
                            <li>Register for interest in our properties (Phase 1, Phase 2, Phase 4).</li>
                            <li>Fill out a contact form or book an appointment.</li>
                            <li>Subscribe to our newsletter or download brochures.</li>
                            <li>Contact our customer support.</li>
                        </ul>
                        <p className="text-stone-600 leading-relaxed mt-4">
                            The types of information we may collect include your name, email address, phone number, city, and property preferences.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">3. How We Use Your Information</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            We use the information we collect for various purposes, including:
                        </p>
                        <ul className="list-disc pl-6 text-stone-600 space-y-2">
                            <li>To provide and maintain our services.</li>
                            <li>To communicate with you about your inquiries and appointments.</li>
                            <li>To send you marketing communications, newsletters, and updates about Singapore Life City (you can opt-out at any time).</li>
                            <li>To improve our website and customer experience.</li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">4. Disclosure of Your Information</h2>
                        <p className="text-stone-600 leading-relaxed">
                            We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this policy. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">5. Data Security</h2>
                        <p className="text-stone-600 leading-relaxed">
                            We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">6. Your Rights</h2>
                        <p className="text-stone-600 leading-relaxed">
                            You have the right to access, correct, or delete your personal information. If you wish to exercise these rights or have any questions about our privacy practices, please contact us using the information below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">7. Contact Us</h2>
                        <p className="text-stone-600 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
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
