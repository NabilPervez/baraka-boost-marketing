import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle, Star, Book, Mic, GraduationCap, DollarSign, Activity, Heart, Brain, Zap, Layers, BarChart3 } from 'lucide-react';
import Button from '../components/Button';
import { useCarousel } from '../hooks/useCarousel';

export default function Home() {
    const [index, setIndex] = useState(0);
    const { containerRef: howToRef, handleTap: handleHowToTap } = useCarousel(3000);
    const { containerRef: featuresRef, handleTap: handleFeaturesTap } = useCarousel(3500);
    const { containerRef: improveRef, handleTap: handleImproveTap } = useCarousel(4000);

    const phrases = [
        "Improve?",
        "Build Habits?",
        "Pray?",
        "Understand Allah?",
        "Understand Islam?"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
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
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
                                <Star className="w-4 h-4 mr-2 fill-blue-600" />
                                Gamified Islamic Atomic Habit Building App
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                                Get Closer To Allah <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">One Habit at a Time</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Empowering your spiritual journey through gamified habits, Quran repetition, and Islamic bullet journaling. Build a better you, one good deed at a time.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <Button
                                    href="/sign-up"
                                    size="lg"
                                    icon={Star}
                                    className="w-full sm:w-auto"
                                >
                                    Sign Up For Exclusive Early Access
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
                            className="lg:col-span-6 relative hidden md:block"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
                            <img
                                src="/images/mosque_hero.jpg"
                                alt="Islamic Mosque"
                                className="relative z-10 mx-auto w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Emotional Hook Section */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="min-h-[160px] md:min-h-[120px] mb-12 flex flex-col items-center justify-center">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">Are You</h2>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-500 mb-4">Struggling To</h2>

                        <div className="h-20 md:h-24 overflow-hidden flex items-center justify-center relative w-full">
                            <AnimatePresence mode='wait'>
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-500 leading-tight block whitespace-nowrap absolute"
                                >
                                    {phrases[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto space-y-6">
                        <p>
                            We understand how difficult it can be to balance life in this dunya while trying to build your akhira. The distractions of the modern world make it harder than ever to stay consistent.
                        </p>

                        <div className="space-y-4 pt-4">
                            <p className="text-2xl font-medium text-gray-800 italic">
                                But you don't have to do it alone.
                            </p>

                            <p className="text-2xl font-bold text-gray-900">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Baraka Boost</span> is designed to help you regain control, build consistency, and reconnect with your faith—one small step at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mb-12 lg:mb-0">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Baraka Boost</span>?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Baraka Boost is your comprehensive digital companion for spiritual growth. We've combined the powerful principles of "Atomic Habits" with Islamic teachings to create a system that works for the modern Muslim.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Whether you want to establish your 5 daily prayers, memorize more Quran, or simply learn the basics of your deen, Baraka Boost provides the structure, motivation, and tools you need to succeed.
                            </p>
                        </div>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
                            <img
                                src="/images/mosque_hero.jpg"
                                alt="Baraka Boost App"
                                className="relative rounded-2xl shadow-xl w-full object-cover h-64 lg:h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Baraka Boost</span></h2>
                        <p className="text-xl text-gray-600">Start your journey in three simple steps</p>
                    </div>

                    <div
                        ref={howToRef}
                        onClick={handleHowToTap}
                        className="relative flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible no-scrollbar cursor-pointer md:cursor-default"
                    >
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10"></div>

                        {[
                            {
                                step: "Step 1",
                                title: "Choose Your Habits To Stack",
                                icon: Layers,
                                description: "Select from our curated list of sunnah habits or create your own custom routine."
                            },
                            {
                                step: "Step 2",
                                title: "Check In For Prayer",
                                icon: CheckCircle,
                                description: "Log your daily prayers and mark off the habits you've successfully completed."
                            },
                            {
                                step: "Step 3",
                                title: "Monitor Your Growth",
                                icon: BarChart3,
                                description: "Track your consistency and watch your improved spirituality with broken-down analytics."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative bg-white pt-8 px-6 pb-6 text-center min-w-[85vw] md:min-w-0 snap-center rounded-2xl border md:border-none border-gray-100 shadow-sm md:shadow-none mx-2 md:mx-0 select-none"
                            >
                                <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg mb-6 border-4 border-white">
                                    <item.icon size={40} />
                                </div>
                                <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wide">{item.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof / Stats */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold leading-relaxed italic">
                        "The most beloved deeds to Allah are those that are done regularly, even if they are small"
                    </h3>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Baraka Boost</span>?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We combine modern psychology with timeless Islamic wisdom to help you become the best version of yourself.
                        </p>
                    </div>

                    <div
                        ref={featuresRef}
                        onClick={handleFeaturesTap}
                        className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible no-scrollbar px-4 md:px-0 -mx-4 md:mx-0 cursor-pointer md:cursor-default"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-blue-50 border border-blue-100 min-w-[85vw] md:min-w-0 snap-center select-none"
                            >
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 mx-auto">
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

            {/* Improvements Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Improve 1% <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Everyday</span></h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Track your consistency and watch your improved spirituality with broken-down analytics. We help you measure your progress so you can see your growth across:
                        </p>
                    </div>

                    <div
                        ref={improveRef}
                        onClick={handleImproveTap}
                        className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible no-scrollbar px-4 md:px-0 -mx-4 md:mx-0 cursor-pointer md:cursor-default"
                    >
                        {[
                            { icon: Activity, title: "Physically", color: "text-red-500", bg: "bg-red-50" },
                            { icon: Zap, title: "Spiritually", color: "text-amber-500", bg: "bg-amber-50" },
                            { icon: Heart, title: "Emotionally", color: "text-pink-500", bg: "bg-pink-50" },
                            { icon: Brain, title: "Mentally", color: "text-indigo-500", bg: "bg-indigo-50" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl ${item.bg} text-center min-w-[70vw] md:min-w-0 snap-center select-none`}
                            >
                                <div className={`w-16 h-16 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-4 ${item.color}`}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Your Journey Today</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Join Muslims around the world who are transforming their lives with Baraka Boost.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Button size="lg" href="/sign-up" icon={Star}>
                            Sign Up For Exclusive Early Access
                        </Button>
                        <Button size="lg" variant="outline" href="/donation" icon={DollarSign}>
                            Donate Now
                        </Button>
                        <Button size="lg" variant="secondary" href="/premium" icon={Star}>
                            Get Premium Features
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
