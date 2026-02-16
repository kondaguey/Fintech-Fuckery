"use client";

import { useState } from "react";
import {
    Send,
    CheckCircle2,
    ShieldCheck,
    Plus,
    Trash2,
    XCircle,
    Info,
    FileWarning,
    Flame,
    Link2,
    ChevronRight,
    ChevronLeft,
    Scale,
} from "lucide-react";

type EventCategory = "success" | "neutral" | "warning" | "danger" | "critical";

interface TimelineEventEntry {
    date: string;
    title: string;
    category: EventCategory;
    description: string;
    evidence: string;
}

interface RegulatoryFiling {
    agency: string;
    caseNumber: string;
    status: string;
    dateFiled: string;
}

const CATEGORIES: {
    key: EventCategory;
    label: string;
    color: string;
    bgColor: string;
    borderColor: string;
    icon: React.ReactNode;
}[] = [
        {
            key: "success",
            label: "Approval",
            color: "text-emerald-400",
            bgColor: "bg-emerald-950/30",
            borderColor: "border-emerald-900/40",
            icon: <CheckCircle2 className="w-3.5 h-3.5" />,
        },
        {
            key: "neutral",
            label: "Neutral",
            color: "text-blue-400",
            bgColor: "bg-blue-950/30",
            borderColor: "border-blue-900/40",
            icon: <Info className="w-3.5 h-3.5" />,
        },
        {
            key: "warning",
            label: "Warning",
            color: "text-amber-400",
            bgColor: "bg-amber-950/30",
            borderColor: "border-amber-900/40",
            icon: <FileWarning className="w-3.5 h-3.5" />,
        },
        {
            key: "danger",
            label: "Violation",
            color: "text-red-400",
            bgColor: "bg-red-950/30",
            borderColor: "border-red-900/40",
            icon: <XCircle className="w-3.5 h-3.5" />,
        },
        {
            key: "critical",
            label: "Critical",
            color: "text-purple-400",
            bgColor: "bg-purple-950/30",
            borderColor: "border-purple-900/40",
            icon: <Flame className="w-3.5 h-3.5" />,
        },
    ];

const AGENCIES = [
    "CFPB",
    "NYDFS",
    "OCC",
    "FTC",
    "FBI IC3",
    "BBB",
    "DE OSBC (Delaware)",
    "State AG",
    "FDIC",
    "Other",
];

const STATUSES = [
    "Filed — Pending",
    "Under Review",
    "Responded",
    "Rejected",
    "Rejected — Loophole",
    "Resolved",
    "Escalated",
];

const emptyEvent = (): TimelineEventEntry => ({
    date: "",
    title: "",
    category: "neutral",
    description: "",
    evidence: "",
});

const emptyFiling = (): RegulatoryFiling => ({
    agency: "",
    caseNumber: "",
    status: "Filed — Pending",
    dateFiled: "",
});

export default function ComplaintCTA() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        summary: "",
        email: "",
        socialMediaUrl: "",
        hideLastName: true,
        allowPublic: false,
        legalSummary: "",
        damage: "",
        resolution: "",
    });
    const [events, setEvents] = useState<TimelineEventEntry[]>([emptyEvent()]);
    const [filings, setFilings] = useState<RegulatoryFiling[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError(null);

        try {
            const res = await fetch("/api/submit-complaint", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formData, events, filings }),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || "Submission failed");
            }

            setSubmitted(true);
        } catch (err) {
            setSubmitError(err instanceof Error ? err.message : "Something went wrong. Try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const addEvent = () => setEvents([...events, emptyEvent()]);
    const removeEvent = (i: number) => {
        if (events.length > 1) setEvents(events.filter((_, idx) => idx !== i));
    };
    const updateEvent = (i: number, field: keyof TimelineEventEntry, val: string) => {
        const u = [...events];
        u[i] = { ...u[i], [field]: val };
        setEvents(u);
    };

    const addFiling = () => setFilings([...filings, emptyFiling()]);
    const removeFiling = (i: number) => setFilings(filings.filter((_, idx) => idx !== i));
    const updateFiling = (i: number, field: keyof RegulatoryFiling, val: string) => {
        const u = [...filings];
        u[i] = { ...u[i], [field]: val };
        setFilings(u);
    };

    const totalSteps = 3;

    if (submitted) {
        return (
            <div className="w-full">
                <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-8 text-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-emerald-200">
                        Your Story Has Been Received
                    </h3>
                    <p className="text-emerald-300/60 text-sm mt-2">
                        Thank you for speaking up. Every complaint strengthens the
                        collective case.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                    Has Your Online Bank<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                        Fucked You Over
                    </span>
                    , Too?
                </h2>
                <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                    You&apos;re not alone. Build your case below — every story strengthens
                    the fight for accountability.
                </p>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-2 mb-6">
                {[
                    { num: 1, label: "Your Info" },
                    { num: 2, label: "Timeline" },
                    { num: 3, label: "Filings" },
                ].map((s, i) => (
                    <div key={s.num} className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setStep(s.num)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${step === s.num
                                ? "bg-red-950/40 border border-red-900/30 text-red-400"
                                : step > s.num
                                    ? "bg-emerald-950/30 border border-emerald-900/30 text-emerald-400"
                                    : "bg-zinc-900 border border-zinc-800 text-zinc-600"
                                }`}
                        >
                            {step > s.num ? (
                                <CheckCircle2 className="w-3 h-3" />
                            ) : (
                                <span className="w-4 text-center">{s.num}</span>
                            )}
                            <span className="hidden sm:inline">{s.label}</span>
                        </button>
                        {i < 2 && (
                            <div
                                className={`w-6 h-px ${step > s.num ? "bg-emerald-800" : "bg-zinc-800"}`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 md:p-8"
            >
                {/* ═══ STEP 1: Identity + Company ═══ */}
                {step === 1 && (
                    <div className="space-y-5">
                        <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest border-b border-zinc-800/50 pb-2">
                            Your Info & The Company
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    required
                                    placeholder="Jane"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    required
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
                                />
                            </div>
                        </div>

                        <label
                            htmlFor="hideLastName"
                            className="flex items-center gap-3 p-3 bg-zinc-950/50 border border-zinc-800/50 rounded-xl cursor-pointer hover:bg-zinc-950 transition-colors"
                        >
                            <input
                                id="hideLastName"
                                type="checkbox"
                                checked={formData.hideLastName}
                                onChange={(e) => setFormData({ ...formData, hideLastName: e.target.checked })}
                                className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-red-500 focus:ring-red-500/20 accent-red-500"
                            />
                            <div>
                                <span className="text-sm text-zinc-300">Show my last name as initial only</span>
                                <span className="block text-[11px] text-zinc-600 mt-0.5">
                                    e.g. &ldquo;Jane D.&rdquo; instead of &ldquo;Jane Doe&rdquo;
                                </span>
                            </div>
                        </label>

                        <div>
                            <label htmlFor="company" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                Which Company?
                            </label>
                            <input
                                id="company"
                                type="text"
                                required
                                placeholder="e.g. Wise, Revolut, Chime, PayPal..."
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="summary" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                One-Line Summary
                            </label>
                            <input
                                id="summary"
                                type="text"
                                required
                                placeholder="e.g. They approved the payment, assessed the fee, then revoked the service."
                                value={formData.summary}
                                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
                            />
                            <p className="text-[11px] text-zinc-700 mt-1">
                                This line appears as the headline on your public complaint card.
                            </p>
                        </div>

                        {/* Social Media */}
                        <div>
                            <label htmlFor="socialMediaUrl" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                Did you post about this on social media?
                            </label>
                            <div className="relative">
                                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700" />
                                <input
                                    id="socialMediaUrl"
                                    type="url"
                                    placeholder="Paste your TikTok, YouTube, X, or Instagram link..."
                                    value={formData.socialMediaUrl}
                                    onChange={(e) => setFormData({ ...formData, socialMediaUrl: e.target.value })}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
                                />
                            </div>
                            <p className="text-[11px] text-zinc-700 mt-1">
                                Optional — if you made a video, we&apos;ll embed it on your entry.
                            </p>
                        </div>
                    </div>
                )}

                {/* ═══ STEP 2: Timeline Builder ═══ */}
                {step === 2 && (
                    <div className="space-y-5">
                        <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest border-b border-zinc-800/50 pb-2">
                            Build Your Timeline
                        </h3>
                        <p className="text-[11px] text-zinc-600 leading-relaxed">
                            Add events in chronological order. Each event gets a date, title,
                            category, and description. Pick a category to color-code your
                            timeline.
                        </p>

                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className="bg-zinc-950/60 border border-zinc-800/60 rounded-xl p-4 space-y-3 relative"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                                            Event {index + 1}
                                        </span>
                                        {events.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeEvent(index)}
                                                className="text-zinc-700 hover:text-red-400 transition-colors cursor-pointer"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
                                        <input
                                            type="text"
                                            placeholder="Feb 05, 2026"
                                            value={event.date}
                                            onChange={(e) => updateEvent(index, "date", e.target.value)}
                                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all font-mono"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Event title — e.g. 'The Rug Pull'"
                                            value={event.title}
                                            onChange={(e) => updateEvent(index, "title", e.target.value)}
                                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-2">
                                            Category
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {CATEGORIES.map((cat) => (
                                                <button
                                                    key={cat.key}
                                                    type="button"
                                                    onClick={() => updateEvent(index, "category", cat.key)}
                                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider border transition-all cursor-pointer ${event.category === cat.key
                                                        ? `${cat.bgColor} ${cat.borderColor} ${cat.color} shadow-sm`
                                                        : "bg-zinc-900/50 border-zinc-800/50 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400"
                                                        }`}
                                                >
                                                    {cat.icon}
                                                    {cat.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <textarea
                                        rows={2}
                                        placeholder="What happened? Be specific — dates, dollar amounts, names you can share..."
                                        value={event.description}
                                        onChange={(e) => updateEvent(index, "description", e.target.value)}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all resize-none"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Evidence (optional) — e.g. 'Email screenshot from Feb 5'"
                                        value={event.evidence}
                                        onChange={(e) => updateEvent(index, "evidence", e.target.value)}
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={addEvent}
                            className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-zinc-800 rounded-xl text-xs font-mono text-zinc-600 hover:text-zinc-400 hover:border-zinc-700 transition-all cursor-pointer"
                        >
                            <Plus className="w-3.5 h-3.5" />
                            Add Another Event
                        </button>
                    </div>
                )}

                {/* ═══ STEP 3: Damage, Resolution, Filings + Submit ═══ */}
                {step === 3 && (
                    <div className="space-y-5">
                        <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest border-b border-zinc-800/50 pb-2">
                            Impact, Resolution & Filings
                        </h3>

                        {/* The Damage */}
                        <div>
                            <label htmlFor="damage" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                ⚠️ The Damage — How did this affect you?
                            </label>
                            <textarea
                                id="damage"
                                rows={4}
                                placeholder="e.g. I had to contact my client multiple times after payment — embarrassing for my business. As a startup, being out this money puts me in a dangerous financial position. Hours wasted building a website to meet their requirements..."
                                value={formData.damage}
                                onChange={(e) => setFormData({ ...formData, damage: e.target.value })}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all resize-none"
                            />
                            <p className="text-[11px] text-zinc-700 mt-1">
                                Professional, financial, emotional — all of it matters for the record.
                            </p>
                        </div>

                        {/* What I Want Done */}
                        <div>
                            <label htmlFor="resolution" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                ✊ What I Want Done About This
                            </label>
                            <textarea
                                id="resolution"
                                rows={4}
                                placeholder="e.g. I want them to refund my client immediately. I want compensation for the time and trouble. I want regulators to investigate whether this is a pattern..."
                                value={formData.resolution}
                                onChange={(e) => setFormData({ ...formData, resolution: e.target.value })}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all resize-none"
                            />
                            <p className="text-[11px] text-zinc-700 mt-1">
                                Refund? Compensation? Apology? Regulatory action? Say what you need.
                            </p>
                        </div>

                        {/* Regulatory Filings */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-zinc-300 font-medium flex items-center gap-2">
                                        <Scale className="w-4 h-4 text-zinc-500" />
                                        Have you filed any complaints?
                                    </p>
                                    <p className="text-[11px] text-zinc-600 mt-0.5">
                                        Optional — CFPB, BBB, state attorney general, FTC, etc.
                                    </p>
                                </div>
                                {filings.length === 0 && (
                                    <button
                                        type="button"
                                        onClick={addFiling}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 border border-zinc-700/50 rounded-lg text-[11px] font-mono text-zinc-400 hover:text-zinc-300 hover:bg-zinc-700 transition-all cursor-pointer"
                                    >
                                        <Plus className="w-3 h-3" />
                                        Add Filing
                                    </button>
                                )}
                            </div>

                            {filings.map((filing, index) => (
                                <div
                                    key={index}
                                    className="bg-zinc-950/60 border border-zinc-800/60 rounded-xl p-4 space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                                            Filing {index + 1}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => removeFiling(index)}
                                            className="text-zinc-700 hover:text-red-400 transition-colors cursor-pointer"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                                                Agency
                                            </label>
                                            <select
                                                value={filing.agency}
                                                onChange={(e) => updateFiling(index, "agency", e.target.value)}
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-zinc-600 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-zinc-900">
                                                    Select agency...
                                                </option>
                                                {AGENCIES.map((a) => (
                                                    <option key={a} value={a} className="bg-zinc-900">
                                                        {a}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                                                Status
                                            </label>
                                            <select
                                                value={filing.status}
                                                onChange={(e) => updateFiling(index, "status", e.target.value)}
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-zinc-600 transition-all appearance-none cursor-pointer"
                                            >
                                                {STATUSES.map((s) => (
                                                    <option key={s} value={s} className="bg-zinc-900">
                                                        {s}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                                                Case / Reference Number
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. XXXXX-XXXX3622"
                                                value={filing.caseNumber}
                                                onChange={(e) => updateFiling(index, "caseNumber", e.target.value)}
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all font-mono"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-1.5">
                                                Date Filed
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Feb 10, 2026"
                                                value={filing.dateFiled}
                                                onChange={(e) => updateFiling(index, "dateFiled", e.target.value)}
                                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all font-mono"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {filings.length > 0 && (
                                <button
                                    type="button"
                                    onClick={addFiling}
                                    className="w-full flex items-center justify-center gap-2 py-2 border border-dashed border-zinc-800 rounded-xl text-xs font-mono text-zinc-600 hover:text-zinc-400 hover:border-zinc-700 transition-all cursor-pointer"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Add Another Filing
                                </button>
                            )}
                        </div>

                        {/* Legal Summary */}
                        <div>
                            <label htmlFor="legalSummary" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                Legal Summary (Optional)
                            </label>
                            <textarea
                                id="legalSummary"
                                rows={3}
                                placeholder="Briefly describe the legal basis of your complaint — breach of contract, unjust enrichment, regulatory violation, etc."
                                value={formData.legalSummary}
                                onChange={(e) => setFormData({ ...formData, legalSummary: e.target.value })}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all resize-none"
                            />
                            <p className="text-[11px] text-zinc-700 mt-1">
                                Not required — but it helps strengthen the public record.
                            </p>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
                            />
                            <div className="flex items-center gap-2 mt-2">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <p className="text-[11px] text-zinc-600 leading-relaxed">
                                    Your email is used{" "}
                                    <strong className="text-zinc-500">for verification only</strong>.
                                    We will never market to you, sell your information, or share it.
                                    This site is not for profit.
                                </p>
                            </div>
                        </div>

                        {/* Consent */}
                        <label
                            htmlFor="allowPublic"
                            className="flex items-start gap-3 p-4 bg-red-950/10 border border-red-900/20 rounded-xl cursor-pointer hover:bg-red-950/20 transition-colors"
                        >
                            <input
                                id="allowPublic"
                                type="checkbox"
                                required
                                checked={formData.allowPublic}
                                onChange={(e) => setFormData({ ...formData, allowPublic: e.target.checked })}
                                className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-red-500 focus:ring-red-500/20 accent-red-500 mt-0.5"
                            />
                            <div>
                                <span className="text-sm text-zinc-200 font-medium">
                                    Allow my complaint and timeline to be publicly displayed on
                                    fintechfuckery.org
                                </span>
                                <span className="block text-[11px] text-zinc-500 mt-1">
                                    Required — your story will be anonymized per your privacy
                                    preferences above. Your email will never be shown.
                                </span>
                            </div>
                        </label>

                        {submitError && (
                            <div className="w-full p-3 bg-red-950/30 border border-red-900/40 rounded-xl text-sm text-red-400 text-center">
                                {submitError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm rounded-xl transition-all cursor-pointer shadow-lg shadow-red-900/20 hover:shadow-red-900/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-4 h-4" />
                            {submitting ? "Submitting..." : "Submit Your Story"}
                        </button>

                        <p className="text-[11px] text-zinc-600 text-center leading-relaxed">
                            See our{" "}
                            <a href="/privacy" className="text-zinc-500 hover:text-zinc-400 underline underline-offset-2">
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="/terms" className="text-zinc-500 hover:text-zinc-400 underline underline-offset-2">
                                Terms of Use
                            </a>
                            .
                        </p>
                    </div>
                )}

                {/* ─── Navigation Buttons ─── */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-zinc-800/50">
                    {step > 1 ? (
                        <button
                            type="button"
                            onClick={() => setStep(step - 1)}
                            className="flex items-center gap-1.5 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back
                        </button>
                    ) : (
                        <div />
                    )}

                    <span className="text-[10px] font-mono text-zinc-700">
                        Step {step} of {totalSteps}
                    </span>

                    {step < totalSteps && (
                        <button
                            type="button"
                            onClick={() => setStep(step + 1)}
                            className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/50 rounded-xl text-sm text-zinc-300 font-medium transition-all cursor-pointer"
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
