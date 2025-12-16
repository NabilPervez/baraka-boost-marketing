import { motion } from 'framer-motion';
import { Heart, Globe, Users, Coffee } from 'lucide-react';
import Button from '../components/Button';

export default function Donation() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="bg-emerald-50 py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-block p-4 bg-emerald-100 rounded-full mb-6"
                    >
                        <Heart className="w-12 h-12 text-emerald-600 fill-current animate-pulse" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Support Open Source Sadaqah Jariyah</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        Baraka Boost is built by the community, for the community. Your donations help us keep the app ad-free, develop new features, and translate content for Muslims worldwide.
                    </p>

                    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm mx-auto transform hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Monthly Server Goal</h3>
                        <div className="w-full bg-gray-100 rounded-full h-4 mb-4 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "65%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="bg-emerald-500 h-full rounded-full"
                            ></motion.div>
                        </div>
                        <div className="flex justify-between text-sm font-medium mb-6">
                            <span className="text-emerald-600">$650 raised</span>
                            <span className="text-gray-400">of $1,000 goal</span>
                        </div>
                        <Button size="lg" className="w-full shadow-emerald-200" icon={Heart}>
                            Donate Now
                        </Button>
                    </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
            </section>

            {/* Where money goes */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Your Impact</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: "Server Costs",
                                desc: "Keeping the app fast, reliable, and accessible to users in 150+ countries."
                            },
                            {
                                icon: Users,
                                title: "Community Features",
                                desc: "Developing social features to connect Muslims and encourage group challenges."
                            },
                            {
                                icon: Coffee,
                                title: "Developer Support",
                                desc: "Allowing our team to dedicate more hours to coding, bug fixing, and support."
                            }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Tiers */}
            <section className="py-16 bg-gray-50 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Choose an Amount</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['$5', '$10', '$25', '$50'].map((amount) => (
                            <button
                                key={amount}
                                className="bg-white border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 text-xl font-bold text-gray-700 hover:text-emerald-700 py-6 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                {amount}
                            </button>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Button size="lg" className="px-12">Confirm Donation</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
