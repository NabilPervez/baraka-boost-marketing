import { Heart, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-emerald-900 text-emerald-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Baraka Boost</h3>
                        <p className="text-emerald-200/80 mb-6 max-w-sm">
                            Empowering your spiritual journey through gamified habits, Quran journaling, and community connection. Build your Jannah, one good deed at a time.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/premium" className="hover:text-white transition-colors">Premium Features</Link></li>
                            <li><Link to="/donation" className="hover:text-white transition-colors">Support Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="/support" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-400">
                    <p>&copy; {new Date().getFullYear()} Baraka Boost. All rights reserved.</p>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <span>Made with</span>
                        <Heart size={16} className="text-red-400 fill-current" />
                        <span>for the Ummah</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
