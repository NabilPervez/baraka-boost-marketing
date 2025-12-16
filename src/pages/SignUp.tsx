import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Book, Mic, Star, ArrowRight, Mail } from 'lucide-react';
import Button from '../components/Button';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the email to your backend or API
        console.log('Submitted email:', email);
        setSubmitted(true);
    };

    const features = [
        {
            icon: CheckCircle,
            title: "Rebuild Your Habits",
            description: " gamified system to help you build and maintain consistent Islamic habits."
        },
        {
            icon: Book,
            title: "Digital Quran Journal",
            description: "A beautiful space to reflect on verses and connect deeper with the Quran."
        },
        {
            icon: Mic,
            title: "Ayah Echo",
            description: "Memorize Quran faster with our specialized audio tools."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                    <div className="grid md:grid-cols-2">
                        {/* Content Side */}
                        <div className="p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-6">
                                    <Star className="w-3 h-3 mr-1 fill-blue-600" />
                                    Early Access
                                </div>

                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Join Baraka Boost
                                </h1>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Be the first to experience the future of Islamic productivity. Sign up now to get exclusive updates and early access to our revolutionary app.
                                </p>

                                <div className="space-y-6 mb-8">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600">
                                                    <feature.icon size={18} />
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                                                <p className="text-xs text-gray-500">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>

                            <div className="relative z-10">
                                {!submitted ? (
                                    <>
                                        <h2 className="text-2xl font-bold mb-4">Get Early Access</h2>
                                        <p className="text-blue-100 mb-8">
                                            Enter your email address to join our waiting list. We'll notify you as soon as we launch!
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                                                    Email Address
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <Mail className="h-5 w-5 text-blue-300" />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        required
                                                        className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-white/10 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all"
                                                        placeholder="you@example.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                variant="secondary"
                                                className="w-full justify-center"
                                                icon={ArrowRight}
                                            >
                                                Sign Up Now
                                            </Button>

                                            <p className="text-xs text-blue-200 text-center mt-4">
                                                We respect your privacy. No spam, ever.
                                            </p>
                                        </form>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold mb-2">You're on the list!</h2>
                                        <p className="text-blue-100 mb-8">
                                            JazakAllah Khair! We've received your details and will be in touch soon.
                                        </p>
                                        <Button
                                            href="/"
                                            variant="secondary"
                                            className="w-full justify-center"
                                        >
                                            Back to Home
                                        </Button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
