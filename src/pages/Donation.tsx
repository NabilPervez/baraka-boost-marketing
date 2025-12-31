import { motion } from 'framer-motion';
import { Heart, Globe, Users, Coffee } from 'lucide-react';
import Button from '../components/Button';

export default function Donation() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="bg-blue-50 py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="inline-block p-4 bg-blue-100 rounded-full mb-6"
                            >
                                <Heart className="w-12 h-12 text-blue-600 fill-current animate-pulse" />
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Support Open Source Sadaqah Jariyah</h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Baraka Boost is built by the community, for the community. Your donations help us keep the app running, develop new features, and generate content for Muslims worldwide.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose an Amount</h3>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { amount: '$5', link: 'https://buy.stripe.com/cNi9AU8TD3IQgiW5Sa6EU01' },
                                    { amount: '$10', link: 'https://buy.stripe.com/4gM6oI0n7fryd6K2FY6EU02' },
                                    { amount: '$20', link: 'https://buy.stripe.com/eVq5kEc5P0wE5Ei3K26EU03' },
                                    { amount: '$50', link: 'https://buy.stripe.com/3cIeVed9T5QY6Im80i6EU04' }
                                ].map((item) => (
                                    <Button
                                        key={item.amount}
                                        href={item.link}
                                        variant='outline'
                                        className="bg-white border-2 border-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500 hover:text-white text-xl font-bold text-gray-700 py-4 h-auto rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {item.amount}
                                    </Button>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
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
                                desc: "Keeping the app fast, reliable, and accessible to users."
                            },
                            {
                                icon: Users,
                                title: "Community Features",
                                desc: "Developing social features to connect Muslims."
                            },
                            {
                                icon: Coffee,
                                title: "Developer Support",
                                desc: "Allowing our team to dedicate more hours to coding, bug fixing, and support."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="text-center p-6"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}
