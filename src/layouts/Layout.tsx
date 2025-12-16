import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}
