
import { useEffect, useRef, useState } from 'react';

export function useCarousel(interval = 3000) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const autoScroll = () => {
            if (isPaused) return;

            const { scrollLeft, scrollWidth, clientWidth } = container;
            // Get the width of the first child to know how much to scroll
            const itemWidth = container.firstElementChild?.getBoundingClientRect().width || clientWidth;

            // Check if we are at the end (with a small buffer for float precision)
            const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10;

            if (isAtEnd) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: itemWidth, behavior: 'smooth' });
            }
        };

        const timer = setInterval(autoScroll, interval);

        return () => clearInterval(timer);
    }, [interval, isPaused]);

    const handleTap = () => {
        const container = containerRef.current;
        if (!container) return;

        const itemWidth = container.firstElementChild?.getBoundingClientRect().width || container.clientWidth;
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10;

        if (isAtEnd) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    };

    // Pause on touch start (user interaction) and resume on touch end could be added,
    // but usually standard overflow-scrolling handles the 'fight' between auto-scroll and user scroll well enough if the interval is not too short.
    // However, explicit pausing is better for accessibility and UX.
    const pause = () => setIsPaused(true);
    const resume = () => setIsPaused(false);

    return { containerRef, handleTap, pause, resume };
}
