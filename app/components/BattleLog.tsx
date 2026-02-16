"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquarePlus } from "lucide-react";
import WiseTimeline from "./WiseTimeline";

interface BattleEntry {
    id: string;
    name: string;
    company: string;
    entryNumber: number;
    active: boolean;
}

// For now, only Daniel's entry exists. Future DB entries will populate this list.
const entries: BattleEntry[] = [
    {
        id: "wise-daniel",
        name: "Daniel L.",
        company: "Wise",
        entryNumber: 1,
        active: true,
    },
];

export default function BattleLog() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            {/* Tab Bar */}
            <div className="flex items-stretch gap-0 mb-6 overflow-x-auto scrollbar-hide">
                {entries.map((entry, index) => (
                    <button
                        key={entry.id}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${activeTab === index
                            ? "border-red-500 text-white bg-zinc-900/50"
                            : "border-zinc-800 text-zinc-600 hover:text-zinc-400 hover:border-zinc-700"
                            }`}
                    >
                        <span
                            className={`w-2 h-2 rounded-full shrink-0 ${entry.active ? "bg-red-500" : "bg-zinc-700"
                                }`}
                        />
                        <span>{entry.company}</span>
                        <span>🥊</span>
                        <span className="hidden sm:inline">{entry.name}</span>
                        <span className="text-zinc-700 text-[10px]">
                            #{String(entry.entryNumber).padStart(3, "0")}
                        </span>
                    </button>
                ))}

                {/* "Your Story" placeholder tab */}
                <button
                    onClick={() => {
                        const el = document.getElementById("submit-complaint");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider border-b-2 border-dashed border-zinc-800 text-zinc-700 hover:text-zinc-500 hover:border-zinc-600 transition-all cursor-pointer whitespace-nowrap"
                >
                    <MessageSquarePlus className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Your Story Here</span>
                    <span className="sm:hidden">Add Yours</span>
                </button>

                {/* Fill remaining space with bottom border */}
                <div className="flex-1 border-b-2 border-zinc-800/50" />
            </div>

            {/* Tab Navigation (for when there are multiple entries) */}
            {entries.length > 1 && (
                <div className="flex items-center justify-between mb-4 px-1">
                    <button
                        onClick={() =>
                            setActiveTab(Math.max(0, activeTab - 1))
                        }
                        disabled={activeTab === 0}
                        className="flex items-center gap-1 text-xs text-zinc-600 hover:text-zinc-400 disabled:text-zinc-800 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        Previous
                    </button>
                    <span className="text-[10px] font-mono text-zinc-700">
                        {activeTab + 1} of {entries.length}
                    </span>
                    <button
                        onClick={() =>
                            setActiveTab(Math.min(entries.length - 1, activeTab + 1))
                        }
                        disabled={activeTab === entries.length - 1}
                        className="flex items-center gap-1 text-xs text-zinc-600 hover:text-zinc-400 disabled:text-zinc-800 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                        Next
                        <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            )}

            {/* Content */}
            <div>
                {activeTab === 0 && <WiseTimeline />}
                {/* Future entries will render here based on activeTab */}
            </div>
        </div>
    );
}
