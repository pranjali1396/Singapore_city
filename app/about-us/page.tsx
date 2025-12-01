import Link from 'next/link'
import Image from 'next/image'

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="relative w-48 h-16">
                        <Image
                            src="/media/logo.png"
                            alt="Singapore Life City"
                            fill
                            className="object-contain object-left mix-blend-multiply"
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

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">About Chouhan Group</h1>
                    <p className="text-stone-500 max-w-2xl mx-auto">
                        Shaping Central India&apos;s landscapes with excellence since 1998
                    </p>
                </div>

                {/* Our Story */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl text-stone-900 mb-6">Our Story</h2>
                    <div className="space-y-4 text-stone-600 leading-relaxed">
                        <p>
                            Founded in 1998 by Mr. Ajay Chouhan, Chouhan Group has earned its reputation as the most reliable real estate developer in Central India through an unwavering commitment to quality, timely delivery, and customer trust.
                        </p>
                        <p>
                            Our legacy of excellence spans over two decades, marked by a steadfast belief that homes are the foundation of joyful lives and aspirations. We&apos;ve been shaping Bhilai&apos;s residential and commercial landscapes with iconic buildings that have become integral parts of their communities.
                        </p>
                        <p>
                            Expanding our commitment to excellence, Chouhan Group has diversified into the automotive and hospitality sectors. Chouhan Automobiles, featuring the exclusive Maruti Suzuki ARENA and NEXA showrooms, is a leading dealership in Chhattisgarh. Additionally, our hospitality ventures, including Empyrean Hotels and Empyrean Lake Resorts, reflect our dedication to providing comprehensive services that meet diverse lifestyle needs.
                        </p>
                    </div>
                </section>

                {/* Business Sectors */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">Our Business Sectors</h2>
                    <p className="text-center text-stone-500 mb-12">Diversified excellence across real estate, automotive, and hospitality</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-orange-600 mb-4">Real Estate</h3>
                            <p className="text-stone-600">
                                Shaping Bhilai&apos;s residential and commercial landscapes with iconic buildings since 1998.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-orange-600 mb-4">Automobiles</h3>
                            <p className="text-stone-600">
                                Chouhan Automobiles featuring exclusive Maruti Suzuki ARENA and NEXA showrooms.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-orange-600 mb-4">Hospitality</h3>
                            <p className="text-stone-600">
                                Empyrean Hotels and Empyrean Lake Resorts providing comprehensive lifestyle services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">Meet Our Dynamic Team</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-4xl font-bold text-orange-600">AC</span>
                            </div>
                            <h3 className="font-bold text-lg text-stone-900">Mr. Ajay Chouhan</h3>
                            <p className="text-sm text-orange-600 mb-2">Founder & MD</p>
                            <p className="text-sm text-stone-600">Visionary leader and founder of Chouhan Group</p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-4xl font-bold text-orange-600">SC</span>
                            </div>
                            <h3 className="font-bold text-lg text-stone-900">Mr. Suraj Chouhan</h3>
                            <p className="text-sm text-orange-600 mb-2">Director</p>
                            <p className="text-sm text-stone-600">Driving innovation and excellence</p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-4xl font-bold text-orange-600">SC</span>
                            </div>
                            <h3 className="font-bold text-lg text-stone-900">Mr. Sunny Chouhan</h3>
                            <p className="text-sm text-orange-600 mb-2">Director</p>
                            <p className="text-sm text-stone-600">Leading strategic growth initiatives</p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-4xl font-bold text-orange-600">SC</span>
                            </div>
                            <h3 className="font-bold text-lg text-stone-900">Mr. Sourabh Chouhan</h3>
                            <p className="text-sm text-orange-600 mb-2">Director</p>
                            <p className="text-sm text-stone-600">Ensuring quality and customer satisfaction</p>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
                            <h3 className="font-serif text-2xl text-orange-600 mb-4">Vision</h3>
                            <p className="text-stone-700 leading-relaxed">
                                Chouhan Group envisions crossing boundaries and creating sustainable destinations that redefine life experiences globally. With a commitment to innovation and excellence, we aspire to be at the forefront of transformative real estate, automotive, and hospitality solutions, shaping a future where every endeavor reflects our dedication to exceeding expectations.
                            </p>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
                            <h3 className="font-serif text-2xl text-orange-600 mb-4">Mission</h3>
                            <p className="text-stone-700 leading-relaxed">
                                Our mission is to create a lasting impact on lives, inspiring through quality, transparency, and customer-centric initiatives. Driven by a passion for excellence, we aim to pioneer innovative solutions in real estate, automobiles, and hotels. By embracing change, fostering growth, and consistently delivering exceptional experiences, we endeavor to shape a future where every interaction with the Chouhan Group is a testament to trust, reliability, and transformative living.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">Our Values</h2>
                    <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
                        At Chouhan Group, we hold dear the values of integrity, transparency, and openness. We aspire to inspire and guide our customers towards excellence in every interaction.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-2xl text-white">✓</span>
                            </div>
                            <h3 className="font-bold text-lg text-stone-900 mb-2">Integrity</h3>
                            <p className="text-stone-600 text-sm">
                                We hold dear the values of integrity, transparency, and openness in every interaction and decision we make.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-2xl text-white">★</span>
                            </div>
                            <h3 className="font-bold text-lg text-stone-900 mb-2">Excellence</h3>
                            <p className="text-stone-600 text-sm">
                                We strive for excellence in every project, delivering exceptional quality and attention to detail.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-2xl text-white">♥</span>
                            </div>
                            <h3 className="font-bold text-lg text-stone-900 mb-2">Customer-Centric</h3>
                            <p className="text-stone-600 text-sm">
                                Inspiring through quality, transparency, and customer-centric initiatives that exceed expectations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center bg-orange-500 text-white py-16 px-8 rounded-2xl">
                    <h2 className="font-serif text-3xl mb-4">Ready to Experience Excellence?</h2>
                    <p className="mb-8 text-orange-100">
                        Discover how Chouhan Group can help you find your dream home or investment opportunity.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-orange-600 hover:bg-stone-100 font-bold py-4 px-10 rounded-lg shadow-lg uppercase tracking-wide text-sm transition transform hover:scale-105"
                    >
                        Contact Us Today
                    </Link>
                </section>

            </main>



        </div>
    )
}
