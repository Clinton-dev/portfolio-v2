import { useEffect } from "react";

const GA_ID = "G-XZGKMCWQXW";
const GTAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
const SCRIPT_ID = "gtag-js";
let initPromise: Promise<void> | null = null;

function initGtag(): Promise<void> {
    if (typeof window === "undefined") {
        return Promise.resolve();
    }

    if (initPromise) {
        return initPromise;
    }

    initPromise = new Promise<void>((resolve, reject) => {
        if (!window.dataLayer) {
            window.dataLayer = [];
        }
        if (!window.gtag) {
            window.gtag = function gtag(...args: unknown[]) {
                window.dataLayer?.push(args);
            };
        }

        const existingScript = document.getElementById(SCRIPT_ID);
        if (existingScript) {
            window.gtag("js", new Date());
            resolve();
            return;
        }

        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.async = true;
        script.src = GTAG_SRC;
        script.onload = () => {
            window.gtag("js", new Date());
            resolve();
        };
        script.onerror = () => reject(new Error("Failed to load gtag.js"));
        document.head.appendChild(script);
    });

    return initPromise;
}

type AnalyticsOptions = {
    debug?: boolean;
};

export default function useAnalytics(options: AnalyticsOptions = {}) {
    const { debug = false } = options;

    useEffect(() => {
        initGtag()
            .then(() => {
                window.gtag("config", GA_ID, {
                    page_path: window.location.pathname + window.location.search,
                });
            })
            .catch((error) => {
                if (debug) {
                    // Optional debug logging without breaking the app.
                    console.warn("GA failed to load:", error);
                }
            });
    }, [debug]);
}
