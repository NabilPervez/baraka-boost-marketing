import { motion } from 'framer-motion';
import { CheckCircle, Book, Mic, Star } from 'lucide-react';
import NewsletterEmbed from './NewsletterEmbed';

export default function SignUpCard() {
    const features = [
        {
            icon: CheckCircle,
            title: "Rebuild Your Habits",
            description: " gamified system to help you build and maintain consistent Islamic habits."
        },
        {
            icon: Book,
            title: "Digital Islamic Bullet Journal",
            description: "A beautiful space to reflect on verses and connect deeper with Islam."
        },
        {
            icon: Mic,
            title: "Ayah Echo",
            description: "Memorize Quran faster with our specialized audio tools."
        }
    ];

    return (
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
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-6 md:p-8 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4">Get Early Access</h2>
                        <p className="text-blue-100 mb-8">
                            Subscribe to our newsletter to get exclusive updates and early access!
                        </p>
                        <NewsletterEmbed />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
