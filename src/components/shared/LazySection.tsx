"use client";

import { useEffect, useRef, useState } from "react";

type LazySectionProps = {
    children: React.ReactNode;
    /** Height placeholder shown before the section enters view */
    fallbackClassName?: string;
    /** How far before the element enters the viewport to start loading (default 400px) */
    rootMargin?: string;
};

/**
 * Renders children only once the placeholder div is near the viewport.
 * Use alongside next/dynamic so that the JS chunk is not fetched at all
 * until the user is close to scrolling to that section.
 */
export default function LazySection({
    children,
    fallbackClassName = "min-h-screen",
    rootMargin = "400px",
}: LazySectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect(); // Once triggered, never unload
                }
            },
            { rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref}>
            {shouldRender ? children : <div className={fallbackClassName} />}
        </div>
    );
}

