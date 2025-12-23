import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function Feedback() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-10 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h1 className="text-3xl font-bold mb-2">We Value Your Feedback</h1>
                            <p className="text-blue-100 max-w-xl">
                                Help us improve Baraka Boost. Share your thoughts, report issues, or suggest new features.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-10 h-10 text-blue-600" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us an Email</h2>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                            We're currently updating our feedback system. In the meantime, we'd love to hear from you directly via email. Your input helps us make Baraka Boost better for everyone.
                        </p>

                        <div className="flex justify-center">
                            <Button
                                href="mailto:nabilpervezconsulting+barakaboost@gmail.com"
                                className="px-8 shadow-lg shadow-blue-500/30"
                                icon={ArrowRight}
                            >
                                Send Feedback Email
                            </Button>
                        </div>

                        <p className="mt-8 text-sm text-gray-400">
                            nabilpervezconsulting+barakaboost@gmail.com
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
