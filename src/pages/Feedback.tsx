import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, User, Mail, Star, AlertCircle, FileText } from 'lucide-react';
import Button from '../components/Button';
import { supabase } from '../lib/supabase';

export default function Feedback() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('General');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase
                .from('feedback')
                .insert([{
                    email,
                    message: `Type: ${type}\nSource: Sales Site\n${name ? `Name: ${name}\n` : ''}\n${message}`
                }]);

            if (error) throw error;

            setSubmitted(true);
        } catch (err: any) {
            console.error('Error submitting feedback:', err);
            setError(err.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const feedbackTypes = [
        { id: 'General', label: 'General Feedback', icon: MessageSquare },
        { id: 'Feature', label: 'Feature Request', icon: Star },
        { id: 'Bug', label: 'Report a Bug', icon: AlertCircle },
        { id: 'Other', label: 'Other', icon: FileText },
    ];

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

                    <div className="p-8 md:p-10">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm flex items-center">
                                        <AlertCircle className="w-5 h-5 mr-2" />
                                        {error}
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Name <span className="text-gray-400 font-normal">(Optional)</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="Your name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email <span className="text-gray-400 font-normal">(Optional)</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="you@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Feedback Type
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {feedbackTypes.map((t) => (
                                            <button
                                                key={t.id}
                                                type="button"
                                                onClick={() => setType(t.id)}
                                                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${type === t.id
                                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-600'
                                                    }`}
                                            >
                                                <t.icon className={`w-6 h-6 mb-2 ${type === t.id ? 'text-blue-600' : 'text-gray-400'}`} />
                                                <span className="text-xs font-medium">{t.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        required
                                        className="block w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us what you think..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full md:w-auto px-8"
                                        icon={loading ? undefined : Send}
                                    >
                                        {loading ? 'Sending...' : 'Send Feedback'}
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send className="w-10 h-10 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    Your feedback has been sent successfully. We appreciate you taking the time to help us improve.
                                </p>
                                <Button
                                    href="/"
                                    variant="secondary"
                                    className="px-8"
                                >
                                    Back to Home
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
