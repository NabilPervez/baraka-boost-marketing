import { useEffect } from 'react';

export default function NewsletterEmbed() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://subscribe-forms.beehiiv.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Check if the script is still in the body before removing
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full flex justify-center items-center overflow-hidden">
            <iframe
                src="https://subscribe-forms.beehiiv.com/f9935cc6-3353-4240-95a0-4c0f351500ec"
                data-test-id="beehiiv-embed"
                frameBorder="0"
                scrolling="no"
                style={{
                    width: '100%',
                    height: '250px',
                    margin: '0',
                    borderRadius: '0px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    overflow: 'hidden'
                }}
            />
        </div>
    );
}
