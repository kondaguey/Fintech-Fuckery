"use client";

import Link from "next/link";

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

export default function SiteFooter() {
    const now = new Date();
    const month = MONTHS[now.getMonth()];
    const year = now.getFullYear();

    return (
        <footer className="border-t border-zinc-800 py-8 px-4 text-center bg-[#09090b] space-y-4">
            {/* Nav Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-mono text-zinc-600">
                <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
                <span className="text-zinc-800">•</span>
                <Link href="/background" className="hover:text-zinc-400 transition-colors">Background</Link>
                <span className="text-zinc-800">•</span>
                <Link href="/language" className="hover:text-zinc-400 transition-colors">Our Language</Link>
                <span className="text-zinc-800">•</span>
                <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy</Link>
                <span className="text-zinc-800">•</span>
                <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms</Link>
                <span className="text-zinc-800">•</span>
                <Link href="/disclaimer" className="hover:text-zinc-400 transition-colors">Disclaimer</Link>
            </div>

            {/* Contact */}
            <p className="text-[11px] font-mono text-zinc-600">
                Contact:{" "}
                <a
                    href="mailto:dm@fintechfuckery.org"
                    className="text-zinc-400 hover:text-zinc-300 transition-colors"
                >
                    dm@fintechfuckery.org
                </a>
            </p>

            {/* Disclaimer */}
            <p className="text-[11px] font-mono text-zinc-500 leading-relaxed max-w-2xl mx-auto">
                This site does not advocate for, encourage, or condone violence, harassment, or illegal activity
                of any kind against any person, company, or institution. All advocacy is limited to regulatory filings,
                public documentation, consumer protection reporting, and potential class action participation.
            </p>

            {/* Copyright */}
            <p className="text-[10px] font-mono text-zinc-600">
                © {month} {year} FINTECH FUCKERY — NOT FOR PROFIT — CONSUMER ADVOCACY
            </p>
        </footer>
    );
}
