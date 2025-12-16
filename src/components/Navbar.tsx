import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Heart, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Premium', path: '/premium', icon: Zap },
        { name: 'Donate', path: '/donation', icon: Heart },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-200">
                            Baraka Boost
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${location.pathname === link.path
                                    ? 'text-emerald-600'
                                    : 'text-gray-600 hover:text-emerald-500'
                                    }`}
                            >
                                {link.icon && <link.icon size={16} />}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                        <a
                            href="https://play.google.com/store/apps" // Placeholder
                            className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center space-x-2"
                        >
                            <Smartphone size={18} />
                            <span>Get App</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-emerald-600 transition-colors p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-3 rounded-md text-base font-medium flex items-center space-x-3 ${location.pathname === link.path
                                        ? 'bg-emerald-50 text-emerald-600'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.icon && <link.icon size={20} />}
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                            <a
                                href="https://play.google.com/store/apps"
                                className="block w-full text-center mt-4 px-4 py-3 bg-emerald-600 text-white rounded-lg font-medium"
                            >
                                Download Now On Android
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
