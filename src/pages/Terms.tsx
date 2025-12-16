
export default function Terms() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="mb-4">Last upated: {new Date().toLocaleDateString()}</p>
                    <p className="mb-4">
                        Please read these Terms of Service carefully before using the Baraka Boost application and website.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing or using Baraka Boost, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Accounts</h2>
                    <p className="mb-4">
                        When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
                    <p className="mb-4">
                        The Service and its original content, features, and functionality are and will remain the exclusive property of Baraka Boost and its licensors.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Termination</h2>
                    <p className="mb-4">
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                </div>
            </div>
        </div>
    );
}
