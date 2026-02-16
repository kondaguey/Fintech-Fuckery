"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    FileWarning,
    Scale,
    Info,
    Clock,
    Flame,
} from "lucide-react";

interface TimelineEvent {
    date: string;
    title: string;
    type: "success" | "neutral" | "danger" | "critical" | "warning";
    description: string;
    evidence: string;
    quote?: string;
}

const sagaEvents: TimelineEvent[] = [
    {
        date: "Jan 27, 2026",
        title: "The Trap is Set — Approval Granted",
        type: "success",
        description:
            'Wise Business explicitly approves the account holder for card payments via marketing email. "Your business is all set up to accept cards and Apple Pay." Fees disclosed: 2.9% + $0.30 domestic, 4.2% + $0.30 international.',
        evidence: 'Email: "Accept your first card payment today"',
        quote:
            "Your business is all set up to accept cards and Apple Pay. To get started, send a payment link or invoice to your customer.",
    },
    {
        date: "Feb 04, 2026",
        title: "The Capture — Client Pays $1,037.50",
        type: "neutral",
        description:
            "Client ([REDACTED]) pays $1,037.50. Wise captures the full amount immediately. Fee of $43.88 deducted. Net amount: $993.62. Funds promised within 7 days (Feb 11).",
        evidence: "Transaction Receipt: [CLIENT] → [ACCOUNT HOLDER]",
        quote:
            "You received 1,037.50 USD from [REDACTED]. We'll pay out your money in the next 7 days.",
    },
    {
        date: "Feb 05, 2026 — 7:51 AM",
        title: "The Rug Pull — Service Revoked After Payment",
        type: "danger",
        description:
            'Less than 12 hours after taking the money, Wise revokes card payment privileges. Reason: "we couldn\'t access or validate your company\'s website." The website they cited was the one on file WHEN THEY APPROVED the account.',
        evidence: 'Email: "Your business can no longer get paid by card"',
        quote:
            "Your business can no longer receive card payments. We're not able to offer this feature to your business any longer because we couldn't access or validate your company's website.",
    },
    {
        date: "Feb 05, 2026 — 3:03 PM",
        title: "The First Promise — \"Funds Are On Their Way\"",
        type: "success",
        description:
            'Support (Human) Agent W-01 reassures: "Your card payment is on its way and you should receive it within the next 7 days." But to restore card payments, Wise sends a laundry list of requirements the website must meet:',
        evidence: 'Email from (Human) Agent W-01: "your card payment is on its way"',
        quote:
            "I want to reassure you that your card payment is on its way and you should receive it within the next 7 days.",
    },
    {
        date: "Feb 05–09, 2026",
        title: "The Rebuild — Building an Entire Website From Scratch",
        type: "neutral",
        description:
            'Daniel builds a BRAND NEW website at a BRAND NEW URL specifically to satisfy Wise\'s requirements. Their demands: ① Company name displayed ② Physical address listed ③ Contact info (email/phone) ④ Detailed description of goods/services ⑤ Clear refund/return policy ⑥ Delivery policy ⑦ Privacy policy ⑧ Terms & conditions ⑨ Pricing information visible pre-checkout ⑩ Payment method logos (Visa, Mastercard, Amex) displayed. Daniel complies with ALL 10. Submits the new site for review. Wise says: "5 business days to review."',
        evidence:
            "New website built and submitted — all 10 requirements met",
    },
    {
        date: "Feb 10, 2026",
        title: "The Goalpost Shift — They Add MORE Requirements",
        type: "warning",
        description:
            'After complying with all 10 original requirements and building an entirely new website, (Human) Agent W-02 rejects it AGAIN. New demand that was NEVER in the original list: "a fully functioning website that can generate traffic." They literally added an 11th requirement after the fact — and reset the clock with ANOTHER 5 business days to review. Meanwhile, zero clarity on whether any of this is affecting the $993.62 payment that was supposed to arrive Feb 11.',
        evidence: "Email from (Human) Agent W-02 — new criteria introduced post-compliance",
        quote:
            "To enable the feature we need a fully functioning website that can generate traffic or at least has all information available for service promotion.",
    },
    {
        date: "Feb 11, 2026",
        title: "The Breach — Payment Date Silently Changed",
        type: "danger",
        description:
            'Funds NOT released on Feb 11 as promised by (Human) Agent W-01. The transaction page SILENTLY updates the availability date from Feb 11 → Feb 18 — adding 7 more days out of nowhere. No email. No notification. No explanation. Daniel only discovers it by checking the transaction page himself. It\'s now suspected the website verification circus is directly tied to the payment hold. CFPB Complaint #XXXXX-XXXX3622 filed.',
        evidence: "CFPB Case #XXXXX-XXXX3622 / Transaction page date shift: Feb 11 → Feb 18",
    },
    {
        date: "Feb 12, 2026",
        title: "The Escalation — Formal Legal Notice Served",
        type: "critical",
        description:
            "Formal pre-litigation notice sent to Wise executives citing violations of CFPB Consent Order 2025-CFPB-0004. Complaints filed with CFPB, NYDFS, BBB, and OCC. Second CFPB complaint filed: #XXXXX-XXXX6805.",
        evidence:
            "Email to executives / CFPB Cases #XXXXX-XXXX3622 & #XXXXX-XXXX6805",
    },
    {
        date: "Feb 13, 2026 — 2:27 PM",
        title: "The Nail in the Coffin — (Human) Agent W-04's False Promise",
        type: "critical",
        description:
            '(Human) Agent W-04 confirms IN WRITING on a phone follow-up: "the transfer will be refunded until the end of the day." Client informed. Business decisions made based on this official statement.',
        evidence:
            'Email from (Human) Agent W-04: "the transfer will be refunded until the end of the day"',
        quote:
            "Regarding the reboarding process, the team was not able to proceed with it. So in this case, the transfer will be refunded until the end of the day.",
    },
    {
        date: "Feb 14, 2026 — 2:36 AM",
        title: "The Gaslight — (Human) Agent W-05 Retracts W-04's Promise",
        type: "danger",
        description:
            'Hours later, (Human) Agent W-05 contradicts (Human) Agent W-04. Says funds will arrive Feb 18 (the 14-day mark). When confronted about the contradiction, W-05 admits W-04 gave "false information." FBI IC3 complaint filed for wire fraud.',
        evidence:
            'Email from (Human) Agent W-05: "the previous agent...give a false information"',
        quote:
            "I'm sorry for the inconvenience, the previous agent you've talked to on the phone give a false information and we're sorry for that.",
    },
    {
        date: "Feb 14, 2026",
        title: "The Indefinite Hold — Chargeback Purgatory",
        type: "danger",
        description:
            '(Human) Agent W-06 delivers the final blow: because the client initiated a chargeback (caused by Wise\'s failures), the funds will now be held INDEFINITELY. "Neither you nor your client should expect the funds to be available by February 18th."',
        evidence:
            'Email from (Human) Agent W-06: "Neither you nor your client should expect the funds"',
        quote:
            "You are correct—neither you nor your client should expect the funds to be available by February 18th.",
    },
    {
        date: "Feb 16, 2026",
        title: "The Public Confession — Copy-Paste Defense",
        type: "warning",
        description:
            'Wise posts nearly identical copy-paste responses on Google Maps and Trustpilot — and sends a similar message via Instagram DM — publicly citing "Section 4.6" of their Customer Agreement to justify retaining the $43.88 fee for a service they refused to render. They explicitly state: "if one of these card payments is refunded, then we\'re unable to return the fees" — publicly admitting to the exact practice the CFPB fined them for in Consent Order 2025-CFPB-0004: failing to refund fees when funds were not made available.',
        evidence:
            "Public posts on Google Maps & Trustpilot + Instagram DM (Exhibit D)",
        quote:
            "Similarly, if one of these card payments is refunded, then we're unable to return the fees.",
    },
];

const typeConfig = {
    success: {
        color: "bg-emerald-500",
        shadow: "shadow-emerald-900/30",
        text: "text-emerald-400",
        Icon: CheckCircle2,
    },
    neutral: {
        color: "bg-blue-500",
        shadow: "shadow-blue-900/30",
        text: "text-blue-400",
        Icon: Info,
    },
    warning: {
        color: "bg-amber-500",
        shadow: "shadow-amber-900/30",
        text: "text-amber-400",
        Icon: AlertTriangle,
    },
    danger: {
        color: "bg-red-500",
        shadow: "shadow-red-900/30",
        text: "text-red-400",
        Icon: XCircle,
    },
    critical: {
        color: "bg-orange-500",
        shadow: "shadow-orange-900/30",
        text: "text-orange-400",
        Icon: Flame,
    },
};

export default function WiseTimeline() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

    return (
        <div className="w-full">
            {/* Wise Dropdown Header */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left p-4 md:p-6 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group"
                >
                    <div className="flex items-start gap-3 md:gap-4">
                        {/* Wise Logo */}
                        <div className="h-10 w-10 md:h-14 md:w-14 bg-[#9fe870] rounded-lg md:rounded-xl flex items-center justify-center font-black text-lg md:text-2xl text-[#163300] shadow-lg shadow-[#9fe870]/10 group-hover:shadow-[#9fe870]/20 transition-shadow shrink-0">
                            W
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="text-base md:text-xl font-bold text-zinc-100 tracking-tight">
                                    Wise{" "}
                                    <span className="text-zinc-500 font-normal text-xs md:text-sm">
                                        (formerly TransferWise)
                                    </span>
                                </h3>
                                <ChevronDown
                                    className={`text-zinc-500 transition-transform duration-300 shrink-0 mt-1 ${isOpen ? "rotate-180" : ""}`}
                                    size={18}
                                />
                            </div>
                            <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-relaxed">
                                They approved the payment method. They assessed the fee. Then they revoked the service.{" "}
                                <span className="text-zinc-500 italic">This is the receipts.</span>
                            </p>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    <span className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest whitespace-nowrap">
                                        Daniel L. — LLC Owner • Feb 2026
                                    </span>
                                </div>
                                <span className="hidden md:inline-block px-2 py-0.5 bg-zinc-800 border border-zinc-700/50 rounded text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                                    #001
                                </span>
                                <span className="px-2 py-0.5 bg-red-950/40 border border-red-900/30 rounded text-[10px] font-mono text-red-400 uppercase">
                                    12 Incidents
                                </span>
                            </div>
                        </div>
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="border-t border-zinc-800 overflow-hidden"
                        >
                            {/* Stats Bar */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800">
                                {[
                                    { label: "Days in Limbo", value: "13+", icon: Clock },
                                    { label: "Reps Involved", value: "8", icon: Info },
                                    { label: "Complaints Filed", value: "7", icon: FileWarning },
                                    { label: "Promises Broken", value: "3", icon: XCircle },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="bg-zinc-900 p-4 flex items-center gap-3"
                                    >
                                        <stat.icon className="w-4 h-4 text-zinc-600" />
                                        <div>
                                            <div className="text-lg font-bold text-zinc-100 font-mono">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-zinc-500">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Resolved Status */}
                            <div className="mx-4 md:mx-6 lg:mx-8 mt-4 flex items-center gap-3 bg-zinc-900/50 border border-zinc-800/50 rounded-xl px-4 py-3">
                                <div className="w-3 h-3 rounded-full bg-red-500 shrink-0 animate-pulse" />
                                <div>
                                    <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-bold">
                                        Unresolved
                                    </span>
                                    <p className="text-[11px] text-zinc-600 mt-0.5 leading-relaxed">
                                        Resolutions don&apos;t necessarily need to be made public — because the point of
                                        this site is that it shouldn&apos;t be happening at all in the first place.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="p-4 md:p-6 lg:p-8 space-y-1 relative">
                                {/* Vertical Line */}
                                <div className="absolute left-[2.05rem] md:left-[2.55rem] top-8 bottom-8 w-px bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800" />

                                {sagaEvents.map((event, index) => {
                                    const config = typeConfig[event.type];
                                    const EventIcon = config.Icon;
                                    const isExpanded = expandedEvent === index;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                            className="relative flex gap-4 md:gap-6"
                                        >
                                            {/* Dot */}
                                            <div
                                                className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-[3px] border-zinc-900 z-10 shrink-0 mt-4 flex items-center justify-center shadow-lg ${config.color} ${config.shadow}`}
                                            >
                                                <EventIcon className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                                            </div>

                                            {/* Content Card */}
                                            <button
                                                onClick={() =>
                                                    setExpandedEvent(isExpanded ? null : index)
                                                }
                                                className="flex-1 text-left mb-2 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-800/30 transition-all duration-200 cursor-pointer group"
                                            >
                                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                                                    <h4
                                                        className={`text-base md:text-lg font-semibold tracking-tight ${config.text}`}
                                                    >
                                                        {event.title}
                                                    </h4>
                                                    <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap bg-zinc-950/60 px-2 py-1 rounded-md border border-zinc-800/50 self-start">
                                                        {event.date}
                                                    </span>
                                                </div>

                                                <p className="text-zinc-400 text-sm leading-relaxed mt-2">
                                                    {event.description}
                                                </p>

                                                <AnimatePresence>
                                                    {isExpanded && event.quote && (
                                                        <motion.blockquote
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="mt-3 pl-4 border-l-2 border-zinc-700 text-sm text-zinc-500 italic overflow-hidden"
                                                        >
                                                            &ldquo;{event.quote}&rdquo;
                                                            <span className="block text-xs text-zinc-600 mt-1 not-italic">
                                                                — Wise, verbatim
                                                            </span>
                                                        </motion.blockquote>
                                                    )}
                                                </AnimatePresence>

                                                <div className="flex items-center gap-2 mt-3 text-[11px] font-mono text-zinc-600">
                                                    <FileWarning className="w-3 h-3" />
                                                    <span>{event.evidence}</span>
                                                </div>
                                            </button>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* The Damage */}
                            <div className="mx-4 md:mx-6 lg:mx-8 mb-4 bg-amber-950/10 border border-amber-900/20 rounded-xl p-5 md:p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                                    <h5 className="font-bold text-amber-200 text-sm uppercase tracking-wider">
                                        The Damage
                                    </h5>
                                </div>
                                <div className="space-y-3 text-sm text-amber-300/70 leading-relaxed">
                                    <div className="flex gap-3">
                                        <span className="text-amber-500 font-bold shrink-0">01</span>
                                        <p>
                                            <strong className="text-amber-200">Professional embarrassment.</strong>{" "}
                                            Had to email my client multiple times after the transaction
                                            explaining why their payment hadn&apos;t gone through — after they
                                            already paid. As a startup LLC trying to build credibility,
                                            being unable to process a simple card payment and having to
                                            repeatedly follow up makes the business look unprofessional
                                            and unreliable.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-amber-500 font-bold shrink-0">02</span>
                                        <p>
                                            <strong className="text-amber-200">Financial hardship.</strong>{" "}
                                            As a startup, every dollar matters. Being out $993.62 with
                                            no clear timeline for resolution puts the business in a
                                            dangerous financial position. Bills don&apos;t wait for Wise to
                                            finish their &ldquo;5 business day&rdquo; review cycles. The
                                            money was earned, the fee was paid, and the funds are being
                                            held hostage.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-amber-500 font-bold shrink-0">03</span>
                                        <p>
                                            <strong className="text-amber-200">Time and energy wasted.</strong>{" "}
                                            Hours spent building an entirely new website to meet their
                                            10 requirements, only for them to add an 11th and reset the
                                            clock. Hours spent on support calls, emails, and filing
                                            regulatory complaints — time that should have been spent
                                            running the business.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-amber-500 font-bold shrink-0">04</span>
                                        <p>
                                            <strong className="text-amber-200">Client relationship at risk.</strong>{" "}
                                            The client initiated a chargeback because of Wise&apos;s
                                            failures — not because of any issue with the service
                                            provided. Now Wise uses that chargeback as justification to
                                            hold the funds indefinitely. The very problem they created
                                            became their excuse.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* What I Want Done About This */}
                            <div className="mx-4 md:mx-6 lg:mx-8 mb-4 bg-blue-950/10 border border-blue-900/20 rounded-xl p-5 md:p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Scale className="w-5 h-5 text-blue-400 shrink-0" />
                                    <h5 className="font-bold text-blue-200 text-sm uppercase tracking-wider">
                                        What I Want Done About This
                                    </h5>
                                </div>
                                <div className="space-y-3 text-sm text-blue-300/70 leading-relaxed">
                                    <div className="flex gap-3">
                                        <span className="text-blue-500 font-bold shrink-0">①</span>
                                        <p>
                                            <strong className="text-blue-200">Immediate refund to my client.</strong>{" "}
                                            The client paid for a legitimate service. Wise took the
                                            money, assessed the fee, then created every obstacle to prevent
                                            disbursement. The client should be made whole immediately.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-blue-500 font-bold shrink-0">②</span>
                                        <p>
                                            <strong className="text-blue-200">Compensation for time, trouble, and damages.</strong>{" "}
                                            Under the doctrine of <em>unjust enrichment</em>, Wise
                                            profited from the $43.88 fee while actively preventing the
                                            service from being delivered. Under <em>promissory estoppel</em>,
                                            business decisions were made based on (Human) Agent W-04&apos;s
                                            written promise of a same-day refund — a promise Wise
                                            retracted hours later. Compensation should reflect the
                                            professional damage, wasted time, and financial hardship
                                            caused.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-blue-500 font-bold shrink-0">③</span>
                                        <p>
                                            <strong className="text-blue-200">Regulatory accountability.</strong>{" "}
                                            This experience is not an edge case — it&apos;s a pattern.
                                            Wise has an active CFPB consent order
                                            (2025-CFPB-0004) for similar consumer protection
                                            violations. Regulators should investigate whether
                                            Wise&apos;s post-approval revocation practices constitute
                                            systemic unfair, deceptive, or abusive acts (UDAAP violations)
                                            under the Dodd-Frank Act.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-blue-500 font-bold shrink-0">④</span>
                                        <p>
                                            <strong className="text-blue-200">A written apology and explanation.</strong>{" "}
                                            Why was the service approved in the first place? Why was
                                            there no notification when the payment date changed? Why did
                                            (Human) Agent W-04 make a false promise? A transparent accounting of
                                            what went wrong and why.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-red-950/15 p-5 md:p-6 border-t border-red-900/20">
                                <div className="flex gap-4 items-start">
                                    <Scale className="shrink-0 w-6 h-6 text-red-400 mt-0.5" />
                                    <div>
                                        <h5 className="font-bold text-red-200 text-sm uppercase tracking-wider">
                                            Current Legal Standing
                                        </h5>
                                        <p className="text-sm mt-2 text-red-300/70 leading-relaxed">
                                            Wise approved the account. Captured $1,037.50 + $43.88
                                            fee. Revoked the service
                                            <strong className="text-red-300"> after</strong> capture.
                                            Promised a refund ((Human) Agent W-04, Feb 13) then retracted it
                                            ((Human) Agent W-05, next morning). Funds now held{" "}
                                            <strong className="text-red-200">indefinitely</strong> due
                                            to chargeback friction that{" "}
                                            <em>Wise&apos;s own failures caused</em>.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {[
                                                "CFPB ×2",
                                                "NYDFS",
                                                "BBB",
                                                "OCC",
                                                "FBI IC3",
                                            ].map((agency) => (
                                                <span
                                                    key={agency}
                                                    className="px-2.5 py-1 bg-red-950/40 border border-red-900/30 rounded-md text-[10px] font-mono text-red-400 uppercase tracking-wider"
                                                >
                                                    {agency} Filed
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
