import { motion } from 'framer-motion';
import { Calendar, Globe, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import { useCarousel } from '../hooks/useCarousel';

export default function NPC() {
    const { containerRef, handleTap } = useCarousel(3000);
    const { containerRef: companiesRef, handleTap: companiesTap } = useCarousel(2500);

    const companies = [
        { name: "Red Bull", domain: "redbull.com" },
        { name: "LEGO", domain: "lego.com" },
        { name: "Coca-Cola", domain: "coca-cola.com.sg" }, // Singapore domain often better for logos or just coca-cola.com
        { name: "Paramount Pictures", domain: "paramount.com" },
        { name: "Kraft Group", domain: "thekraftgroup.com" },
        { name: "Activision Blizzard", domain: "activisionblizzard.com" },
        { name: "Riot Games", domain: "riotgames.com" }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 mb-12 lg:mb-0"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Assalamu Alaikum, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                                    I'm Nabil Pervez
                                </span>
                            </h1>

                            {/* Mobile Headshot */}
                            <div className="lg:hidden mb-8 relative inline-block w-full max-w-sm mx-auto">
                                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-2"></div>
                                <img
                                    src="https://nabilpervezconsulting.com/assets/nabil-headshot-Curnkhgz.jpg"
                                    alt="Nabil Pervez"
                                    className="relative z-10 rounded-2xl shadow-xl w-full object-cover"
                                />
                            </div>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    I am the former CTO and Co-Founder of AOE Creative, an award-winning, multi-million dollar agency.
                                </p>
                                <p>
                                    I spent years building brand identities and strategies for some of the world's most powerful companies.
                                </p>

                                {/* Company Showcase */}
                                <div className="py-4 -mx-4 px-4 md:mx-0 md:px-0">
                                    <div
                                        ref={companiesRef}
                                        onClick={companiesTap}
                                        className="flex overflow-x-auto gap-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-4 no-scrollbar cursor-pointer md:cursor-default"
                                    >
                                        {companies.map((company, i) => (
                                            <div
                                                key={i}
                                                className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm min-w-[140px] snap-center flex flex-col items-center justify-center text-center h-32 select-none hover:shadow-md transition-shadow"
                                            >
                                                <img
                                                    src={`https://logo.clearbit.com/${company.domain}`}
                                                    alt={`${company.name} Logo`}
                                                    className="w-12 h-12 object-contain mb-3 opacity-80"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                    }}
                                                />
                                                <span className="text-xs font-bold text-gray-700 leading-tight">{company.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p>
                                    I built Baraka Boost to help Muslims of varying levels of iman to improve by combining my love of Islam and gaming. I really wanted connect with the ummah and use the unique skillset Allah gave me to help.
                                </p>
                                <p>
                                    Now, I am available to apply my executive expertise to the most important projects of all: <span className="font-semibold text-gray-900">your career, your business, and your deen.</span>
                                </p>
                            </div>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Button
                                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0kZar29aYDXn9vfvL2JZVskJndufzirA6liCU2CDAtOy8WH6iAmvJj_05lGjat4NuH2U-QO_4-"
                                    size="lg"
                                    icon={Calendar}
                                >
                                    Book a Free Consulting Call
                                </Button>
                                <Button
                                    href="https://nabilpervezconsulting.com"
                                    variant="outline"
                                    size="lg"
                                    icon={Globe}
                                >
                                    Visit nabilpervezconsulting.com
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:block lg:col-span-5 text-center"
                        >
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
                                <img
                                    src="https://nabilpervezconsulting.com/assets/nabil-headshot-Curnkhgz.jpg"
                                    alt="Nabil Pervez"
                                    className="relative z-10 rounded-2xl shadow-xl w-full max-w-sm mx-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">How I Can Help You</h2>

                    <div
                        ref={containerRef}
                        onClick={handleTap}
                        className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible no-scrollbar px-4 md:px-0 -mx-4 md:mx-0 cursor-pointer md:cursor-default"
                    >
                        {[
                            {
                                title: "Brand Marketing",
                                description: "Crafting compelling narratives and visual identities that resonate with your target audience.",
                                icon: Globe
                            },
                            {
                                title: "IT Operations",
                                description: "Streamlining your technical infrastructure and optimizing workflows for maximum efficiency.",
                                icon: Briefcase
                            },
                            {
                                title: "Business Strategy",
                                description: "Developing actionable roadmaps to scale your business and achieve sustainable growth.",
                                icon: Calendar
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 min-w-[85vw] md:min-w-0 snap-center select-none"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 text-blue-600">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 inline-block max-w-4xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Great Together</h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Whether you're an individual looking to level up your career, or a business ready to scale, I'm here to guide you through the process.
                        </p>
                        <Button
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0kZar29aYDXn9vfvL2JZVskJndufzirA6liCU2CDAtOy8WH6iAmvJj_05lGjat4NuH2U-QO_4-"
                            size="lg"
                            className="w-full sm:w-auto"
                        >
                            Schedule Your Free Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
