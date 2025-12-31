import { motion } from 'framer-motion';
import { CheckCircle, Book, Mic, Star, Flame, Trophy } from 'lucide-react';
import SignUpCard from '../components/SignUpCard';

export default function SignUp() {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Hero Card */}
                <SignUpCard />

                {/* What is the problem being solved? */}
                <section className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Modern Struggle</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We live in an age of constant distraction. Between social media, work, and endless notifications, it’s harder than ever to find focus—especially when it comes to our deen. We want to be consistent, but life gets in the way.
                        </p>
                    </motion.div>
                </section>

                {/* What is Baraka Boost? & Why does it work? */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Baraka Boost?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Baraka Boost is your comprehensive digital companion for spiritual growth. It's the first app designed to merge high-performance productivity tools with timeless Islamic practices.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Does It Work?</h2>
                        <p className="text-lg text-gray-600">
                            It works because it respects your psychology. By using gamification—streaks, levels, and badging—we turn spiritual discipline into a rewarding, engaging experience rather than a chore.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                        >
                            <div className="w-14 h-14 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                                <Flame size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Streaks</h3>
                            <p className="text-sm text-gray-600">
                                Build momentum by keeping your daily streak alive.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center"
                        >
                            <div className="w-14 h-14 mx-auto bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                                <Trophy size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Rewards</h3>
                            <p className="text-sm text-gray-600">
                                Unlock badges as you hit key spiritual milestones.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* How does it work? (Steps) */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Select Your Habits", desc: "Choose from Sunnah-inspired habits or create your own custom routine." },
                            { step: "02", title: "Track Every Day", desc: "Log your prayers and habits daily to build your streak and earn consistency points." },
                            { step: "03", title: "Watch Your Iman Grow", desc: "Unlock achievements and view detailed analytics on your spiritual progress." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden"
                            >
                                <div className="text-6xl font-black text-gray-100 absolute -top-4 -right-4 select-none">{item.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{item.title}</h3>
                                <p className="text-gray-600 relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Unique Features */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Unique Features</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: CheckCircle, title: "RPG Leveling System", desc: "Level up your character stats like 'Discipline' and 'Knowledge' based on real-world actions." },
                            { icon: Mic, title: "Ayah Echo", desc: "A specialized tool for memorizing Quran on the go using audio looping and repetition." },
                            { icon: Book, title: "Private Journal", desc: "A secure, digital space to reflect on verses and your daily state of heart." },
                            { icon: Star, title: "Privacy First", desc: "Your data is yours. We prioritize local-first storage options and strict privacy." }
                        ].map((feat, i) => (
                            <div key={i} className="flex items-start">
                                <div className="bg-blue-50 p-3 rounded-lg mr-4 text-blue-600">
                                    <feat.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                                    <p className="text-gray-600 text-sm">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <div className="transform scale-90 md:scale-100">
                    <SignUpCard />
                </div>
            </div>
        </div>
    );
}
