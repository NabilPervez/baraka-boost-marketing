import { motion } from 'framer-motion';
import { Smartphone, CheckCircle, Star, Book, Mic, GraduationCap, Apple, DollarSign } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
    const features = [
        {
            icon: CheckCircle,
            title: "Gamified Habit Tracking",
            description: "Build istiqamah (consistency) with our RPG-style leveling system that makes spiritual growth engaging and rewarding."
        },
        {
            icon: Book,
            title: "Islamic Bullet Journaling",
            description: "Reflect on verses deeply with guided prompts and beautiful digital journaling tools designed for the modern believer."
        },
        {
            icon: Mic,
            title: "Quran Memorization Tool - Ayah Echo",
            description: "Accelerate your learning with the repetitive playback tool designed to help you commit verses to memory."
        },
        {
            icon: GraduationCap,
            title: "Learning About The Basics Of Islam",
            description: "Master the fundamentals of your faith with structured lessons and clear guidance."
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm mb-6">
                                <Star className="w-4 h-4 mr-2 fill-emerald-600" />
                                Islamic Atomic Habit Builder Gamified
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                                Get Closer To Allah <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">One Habit at a Time</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Transform your life with Islamic and Atomic Habits. Built for Muslims with all levels of practice and improve using our unique gamification system.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <Button
                                    href="https://play.google.com/store/apps"
                                    size="lg"
                                    icon={Smartphone}
                                    className="w-full sm:w-auto"
                                >
                                    Download Now On Android
                                </Button>
                                <Button
                                    href="#"
                                    size="lg"
                                    icon={Apple}
                                    variant="outline"
                                    className="w-full sm:w-auto cursor-not-allowed opacity-75"
                                >
                                    iOS Coming Soon
                                </Button>
                                <Button
                                    variant="outline"
                                    href="#features"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                >
                                    View Features
                                </Button>
                            </div>

                            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                                    ))}
                                </div>
                                <p>Join Muslims all over the world boosting their baraka</p>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-6 relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-emerald-200 rounded-full filter blur-3xl opacity-30"></div>
                            <img
                                src="/images/mosque_hero.jpg"
                                alt="Islamic Mosque"
                                className="relative z-10 mx-auto w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Baraka Boost?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We combine modern psychology with timeless Islamic wisdom to help you become the best version of yourself.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof / Stats */}
            <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Active Users", value: "100+" },
                            { label: "Habits Tracked", value: "1k+" },
                            { label: "Verses Journaled", value: "500+" },
                            { label: "App Store Rating", value: "4.9/5" }
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl font-bold mb-2 text-emerald-400">{stat.value}</div>
                                <div className="text-emerald-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Your Journey Today</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Join thousands of Muslims around the world who are transforming their lives with Baraka Boost.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Button size="lg" href="https://play.google.com/store/apps" icon={Smartphone}>
                            Download Now On Android
                        </Button>
                        <Button size="lg" variant="secondary" href="/premium" icon={Star}>
                            Get Premium Features
                        </Button>
                        <Button size="lg" variant="outline" href="/donation" icon={DollarSign}>
                            Donate Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
