"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
    { href: "/", label: "Home" },
    { href: "/background", label: "Background" },
    { href: "/#battle-log", label: "The Complaints" },
    { href: "/consent-order", label: "Consent Order" },
    { href: "/language", label: "Our Language" },
];

export default function SiteNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
            {/* Desktop — centered links */}
            <div className="hidden md:flex max-w-5xl mx-auto px-6 items-center justify-center h-10 gap-5">
                {links.map((link, i) => (
                    <div key={link.href} className="flex items-center gap-5">
                        {i > 0 && <span className="w-px h-3 bg-zinc-800" />}
                        <Link
                            href={link.href}
                            className={`text-xs font-mono uppercase tracking-wider transition-colors ${(link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.replace("/#battle-log", "")) && link.href !== "/")
                                ? "text-zinc-200"
                                : "text-zinc-500 hover:text-zinc-300"
                                }`}
                        >
                            {link.label}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Mobile — logo left, burger right */}
            <div className="flex md:hidden items-center justify-between px-4 h-10">
                <Link
                    href="/"
                    className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-bold"
                >
                    Fintech Fuckery
                </Link>
                <button
                    onClick={() => setOpen(!open)}
                    className="p-1.5 text-zinc-500 hover:text-zinc-300 transition-colors"
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-sm">
                    <div className="px-4 py-3 space-y-1">
                        {links.map((link) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href.replace("/#battle-log", "")) &&
                                    link.href !== "/";
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`block py-2 px-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${isActive
                                        ? "text-zinc-200 bg-zinc-800/50"
                                        : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
