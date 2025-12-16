import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import Button from '../components/Button';

export default function Premium() {
    const benefits = [
        "Unlimited Habit Tracking",
        "Advanced Analytics & Insights",
        "Cloud Sync Across Devices",
        "Exclusive Quran Journal Themes",
        "Priority Customer Support",
        "Ad-Free Experience"
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Upgrade to Baraka Boost Premium</h1>
                    <p className="text-xl text-gray-600">
                        Unlock the full potential of your spiritual journey with advanced tools and insights designed for serious growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 relative"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
                        <div className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-500 font-normal">/forever</span></div>
                        <p className="text-gray-600 mb-8">Essential tools for your daily spiritual habits.</p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Track up to 3 habits",
                                "Basic analytics",
                                "Daily prayer times",
                                "Local data storage"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                    <Check className="w-5 h-5 text-gray-400 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" className="w-full" href="/">Download Free</Button>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-600 to-teal-500 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">
                            MOST POPULAR
                        </div>

                        <div className="flex items-center space-x-2 mb-4">
                            <Zap className="text-yellow-400 fill-current w-6 h-6" />
                            <h3 className="text-2xl font-bold text-white">Premium</h3>
                        </div>

                        <div className="text-5xl font-bold text-white mb-6">$4.99<span className="text-lg text-blue-200 font-normal">/month</span></div>
                        <p className="text-blue-100 mb-8">Supercharge your productivity and spiritual growth.</p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((item, i) => (
                                <li key={i} className="flex items-center text-blue-50">
                                    <div className="bg-white/20 rounded-full p-1 mr-3 backdrop-blur-sm">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg shadow-blue-900/20"
                            icon={Star}
                        >
                            Subscribe Now
                        </Button>

                        <p className="text-center text-blue-400 text-sm mt-4">
                            7-day free trial included. Cancel anytime.
                        </p>
                    </motion.div>
                </div>

                {/* Comparison or FAQ could go here */}
                <div className="mt-24 text-center">
                    <p className="text-gray-500">
                        Need help choosing? <a href="mailto:support@barakaboost.com" className="text-blue-600 font-medium underline">Contact our support team</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
