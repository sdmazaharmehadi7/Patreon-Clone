import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "About - Get Me A Chai",
    description: "Learn about Get Me a Chai, a community-driven micro-crowdfunding platform for creators and developers.",
}

const About = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl text-gray-200">
            {/* Header / Hero */}
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Get Me a Chai</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    A friendly, community-first micro-funding platform designed for developers, artists, and creators to turn audience appreciation into sustainable creative work.
                </p>
            </div>

            {/* Platform Overview */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-10 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-3">What is Get Me a Chai?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Get Me a Chai is a patronage and crowdfunding platform that allows passionate fans and followers to support their favorite creators directly. Whether you write open-source code, produce educational videos, design digital artwork, or write newsletters, our platform makes it effortless for your audience to say thank you with a cup of chai.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Instead of complex recurring subscription walls, we provide a casual, low-friction micro-donation channel where fans can contribute any amount they wish, leave heartwarming messages, and be recognized on your public page.
                </p>
            </div>

            {/* How It Works */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-lg mb-4">
                            1
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Claim Your Creator Profile</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Sign in with your GitHub account in one click. Customize your public page with your avatar, bio, custom cover banner, and a unique creator username.
                        </p>
                    </div>

                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 font-bold flex items-center justify-center text-lg mb-4">
                            2
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Connect Direct Payments</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Add your Razorpay credentials in your dashboard. Payments from your fans are processed directly through Razorpay test/live gateways, ensuring fast and secure settlements.
                        </p>
                    </div>

                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-pink-600/20 text-pink-400 font-bold flex items-center justify-center text-lg mb-4">
                            3
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Share Your Link</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Place your unique Get Me a Chai link in your GitHub README, social bios, blogs, or YouTube descriptions so your community always knows where to support you.
                        </p>
                    </div>

                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6">
                        <div className="w-10 h-10 rounded-lg bg-green-600/20 text-green-400 font-bold flex items-center justify-center text-lg mb-4">
                            4
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Receive Chai & Community Love</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Fans send funds and leave encouraging messages. Your page highlights the top 10 supporters on a public leaderboard, celebrating the people who fuel your growth.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Chai? */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-800/40 rounded-2xl p-6 sm:p-8 mb-10">
                <h2 className="text-2xl font-bold text-white mb-3">Why &ldquo;Chai&rdquo;?</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                    Across many cultures, sharing a hot cup of chai symbolizes connection, warmth, hospitality, and meaningful conversations. When you ask your audience to &ldquo;Get Me a Chai&rdquo;, it represents an informal, friendly coffee-break exchange of gratitude rather than an impersonal financial transaction.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    It transforms passive followers into an active community of patrons who care about your work and want to see you succeed.
                </p>
            </div>

            {/* Key Platform Features */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Key Platform Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
                        <h3 className="text-lg font-semibold text-white mb-2">Direct Contributions</h3>
                        <p className="text-gray-400 text-sm">Funds are sent directly to the creator&apos;s linked gateway without unnecessary middleman delays.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
                        <h3 className="text-lg font-semibold text-white mb-2">Supporter Leaderboard</h3>
                        <p className="text-gray-400 text-sm">Top supporters and their heartwarming messages are displayed proudly on your creator page.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
                        <h3 className="text-lg font-semibold text-white mb-2">Creator Search</h3>
                        <p className="text-gray-400 text-sm">Visitors can search for any creator by username directly from the navigation bar to send support.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
                        <h3 className="text-lg font-semibold text-white mb-2">Custom Profile & Branding</h3>
                        <p className="text-gray-400 text-sm">Personalize your avatar and cover banner images to match your personal brand.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
                        <h3 className="text-lg font-semibold text-white mb-2">Razorpay Security</h3>
                        <p className="text-gray-400 text-sm">Industry-standard payment security supporting cards, UPI, net banking, and digital wallets.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-900/40 border border-gray-800">
                        <h3 className="text-lg font-semibold text-white mb-2">Zero Obligation</h3>
                        <p className="text-gray-400 text-sm">No monthly lock-ins for fans. Support creators whenever you enjoy their latest creation.</p>
                    </div>
                </div>
            </div>

            {/* Call to action */}
            <div className="text-center py-8 border-t border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Your Journey?</h2>
                <p className="text-gray-400 mb-6">Create your page today and start receiving chai from your biggest supporters.</p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link href="/login">
                        <button className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold rounded-lg text-sm px-6 py-2.5 transition-all cursor-pointer">
                            Get Started
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 font-semibold rounded-lg text-sm px-6 py-2.5 transition-all cursor-pointer">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;