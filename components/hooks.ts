import { useEffect } from 'react';

export const useEventListener = <K extends keyof WindowEventMap>(eventName: K, callback: (event: WindowEventMap[K]) => void): void => {
    useEffect(() => {
        window.addEventListener(eventName, callback);
        return () => {
            window.removeEventListener(eventName, callback);
        };
    }, [callback, eventName]);
};
