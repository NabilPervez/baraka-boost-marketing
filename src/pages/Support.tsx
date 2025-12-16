
import { Mail, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

export default function Support() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Support</h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    We're here to help! Whether you have a question about features, pricing, or need technical assistance, our team is ready to answer all your questions.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col items-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-600 mb-6">
                            Send us an email and we'll get back to you within 24 hours.
                        </p>
                        <a href="mailto:support@barakaboost.com" className="text-emerald-600 font-semibold hover:underline">
                            support@barakaboost.com
                        </a>
                    </div>

                    <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col items-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                            <MessageCircle size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                        <p className="text-gray-600 mb-6">
                            Chat with our support team for immediate assistance.
                        </p>
                        <Button href="#" variant="outline">Start Chat</Button>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4 text-left max-w-2xl mx-auto">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-2">How do I reset my password?</h3>
                            <p className="text-gray-600">You can reset your password by clicking on the "Forgot Password" link on the login screen.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-2">Is Baraka Boost free?</h3>
                            <p className="text-gray-600">Yes, the core features are free. We offer a Premium subscription for advanced analytics and unlimited habits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
