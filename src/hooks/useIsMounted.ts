import { useState, useEffect } from "react";

/**
 * Returns `true` after the component has mounted on the client.
 * Use this to avoid SSR hydration mismatches for client-only logic.
 */
export function useIsMounted(): boolean {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}

