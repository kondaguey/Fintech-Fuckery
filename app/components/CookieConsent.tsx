"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("ff-cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("ff-cookie-consent", "accepted");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem("ff-cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-2xl shadow-black/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                    <Cookie className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-zinc-200 mb-1">
                            Cookies &amp; Privacy
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            This site uses only essential cookies to remember your preferences
                            (like this banner). We do <strong className="text-zinc-300">not</strong> track
                            you. We do <strong className="text-zinc-300">not</strong> run ads. We do{" "}
                            <strong className="text-zinc-300">not</strong> sell data. Period. See our{" "}
                            <a href="/privacy" className="text-red-400 hover:text-red-300 underline underline-offset-2">
                                Privacy Policy
                            </a>.
                        </p>
                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={accept}
                                className="px-4 py-2 bg-zinc-100 text-zinc-900 text-xs font-bold rounded-lg hover:bg-white transition-colors cursor-pointer"
                            >
                                Accept
                            </button>
                            <button
                                onClick={decline}
                                className="px-4 py-2 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors cursor-pointer"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={decline}
                        className="text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
