"use client";

import {
    ArrowRight,
    ExternalLink,
    FileText,
    ShieldAlert,
    Siren,
    AlertTriangle,
    Quote,
    Scale,
    Flame,
    CheckCircle2,
    XCircle,
    ChevronDown,
    BookOpen,
    Target,
    Zap,
    Ban,
    Landmark,
    Gavel,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Violation {
    id: string;
    label: string;
    danielsSituation: string;
    paragraph: string;
    quote: string;
    color: string;
    borderColor: string;
    bgColor: string;
    interpretation: string;
    icon: typeof FileText;
}

const receipts: Violation[] = [
    {
        id: "fee-retention",
        label: "The $43.88 Fee",
        icon: Target,
        danielsSituation:
            "Wise told Daniel on Google Maps, Trustpilot, and via Instagram DM (Feb 16, 2026) that they \"cannot refund the fee.\" They are keeping $43.88 for a card payment that was never settled to DnDL Creative LLC.",
        paragraph: "¶ 96–97",
        quote:
            "Section 1005.33(c)(2)(ii) of the Remittance Rule requires that when an error occurs that concerns the failure to make funds available to a designated recipient by the date of availability... the remittance provider must... refund any fees imposed on the transfer due to such failure. In certain instances, Respondent failed to refund sender fees even where Respondent found that funds were not made available... As a result, Respondent identified 351 instances of sender fees that were not refunded.",
        color: "text-red-400",
        borderColor: "border-red-900/30",
        bgColor: "bg-red-950/15",
        interpretation:
            "The CFPB found 351 instances where Wise kept fees even though funds were never made available. Daniel is instance 352. Worse — Wise went on social media AFTER signing this consent order and publicly stated they still \"cannot refund the fee.\" That is a public admission that the practice continues.",
    },
    {
        id: "support-chaos",
        label: "W-04 vs. W-05 (The Support Chaos)",
        icon: AlertTriangle,
        danielsSituation:
            "(Human) Agent W-04 promised Daniel a same-day refund in writing on Feb 13 at 2:27 PM. (Human) Agent W-05 revoked that promise the next morning at 2:36 AM on Feb 14, admitting W-04 gave \"false information.\" Six agents total, six different answers, over 9+ days.",
        paragraph: "¶ 81–82",
        quote:
            "Respondent failed to follow its policies and procedures and failed to provide customer service staff with adequate training on required timelines. As a result, Respondent failed to determine whether errors occurred within 90 days of receiving a Notice of Error.",
        color: "text-orange-400",
        borderColor: "border-orange-900/30",
        bgColor: "bg-orange-950/15",
        interpretation:
            "The consent order specifically mandated that Wise fix staff training (¶ 121(c): \"Oversee and, at least annually, train all agents, employees...\"). One year later, (Human) Agent W-04 promised a refund he wasn't authorized to give, and (Human) Agent W-05 had to walk it back. The training deficiency cited in ¶ 81 has not been corrected.",
    },
    {
        id: "deceptive-marketing",
        label: "The Approval Email (Bait & Switch)",
        icon: Flame,
        danielsSituation:
            "On Jan 27, 2026, Wise sent Daniel an email: \"Your business is all set up to accept cards and Apple Pay.\" He relied on this, processed a $1,037.50 payment on Feb 4. Wise revoked the feature on Feb 5 — after capturing funds — citing website non-compliance (§ 4.6).",
        paragraph: "¶ 117",
        quote:
            "Respondent... may not violate sections 1031 and 1036 of the CFPA... and are prohibited from misrepresenting, or Assisting Others in misrepresenting, expressly or impliedly, any fees or charges.",
        color: "text-amber-400",
        borderColor: "border-amber-900/30",
        bgColor: "bg-amber-950/15",
        interpretation:
            "The consent order PROHIBITS Wise from misrepresenting fees or charges. An email saying \"You're all set up to accept cards\" — followed by capturing a fee and then revoking the service that fee paid for — is an implied misrepresentation of what that fee covers. The merchant was told they could accept payments. They did. Then they were told they couldn't, and the fee was kept.",
    },
    {
        id: "error-resolution",
        label: "No Remedies Offered",
        icon: Scale,
        danielsSituation:
            "Across 9+ days and 6 agents, Wise never once offered Daniel a formal list of available remedies. (Human) Agent W-06 explicitly said: \"Neither you nor your client should expect the funds.\" No error resolution process was ever initiated.",
        paragraph: "¶ 88–92",
        quote:
            "When reporting the results of error investigations, Respondent failed to provide some consumers with notices of remedies available for correcting the errors. By failing to provide notices of remedies available, some consumers were unable to request an available remedy. Respondent also failed to report the results of investigations within three business days (or at all) after completing its investigation.",
        color: "text-purple-400",
        borderColor: "border-purple-900/30",
        bgColor: "bg-purple-950/15",
        interpretation:
            "Wise was ordered to provide consumers with written notice of available remedies when errors occur. Instead, (Human) Agent W-06 told Daniel to expect nothing. No remedies were offered — ever. This is a direct violation of the conduct provisions in ¶ 120(f).",
    },
    {
        id: "fund-availability",
        label: "Funds Never Made Available",
        icon: Siren,
        danielsSituation:
            "The $1,037.50 payment was captured on Feb 4. The estimated settlement date was Feb 11. It is now Feb 16+. The funds have never been made available to Daniel. Wise is now using the chargeback — which their own failures caused — as justification to hold funds indefinitely.",
        paragraph: "¶ 76–79",
        quote:
            "In some instances, when senders' alleged funds were not made available to the designated recipient by the date Respondent previously disclosed to the sender... Respondent failed to investigate the error as alleged... Respondent identified over 1,000 cases where funds were not made available by the disclosed date of availability, and thus senders incurred fees that were not refunded.",
        color: "text-red-400",
        borderColor: "border-red-900/30",
        bgColor: "bg-red-950/15",
        interpretation:
            "The CFPB found over 1,000 cases of this exact pattern. Wise disclosed a date of availability, the funds didn't arrive by that date, and they didn't refund the fees. Daniel's case is identical. The settlement date passed. The funds weren't made available. The fee wasn't refunded. And now they're citing the chargeback — which their own delays caused — to justify holding everything indefinitely.",
    },
];

const conductProvisions = [
    {
        paragraph: "¶ 117",
        text: "Prohibited from misrepresenting, expressly or impliedly, any fees or charges.",
        violated: true,
        how: "The Jan 27 approval email implied card payment fees would result in service. They didn't.",
    },
    {
        paragraph: "¶ 120(f)",
        text: "Must report investigation results to the sender and include notice of remedies available.",
        violated: true,
        how: "No error investigation was initiated. No remedies were offered. (Human) Agent W-06 told Daniel to expect nothing.",
    },
    {
        paragraph: "¶ 120(k)",
        text: "Must refund a sender all fees and taxes imposed when an error occurred.",
        violated: true,
        how: "Wise publicly stated on Google Maps/Trustpilot (and via Instagram DM) they \"cannot refund the fee.\"",
    },
    {
        paragraph: "¶ 121(c)",
        text: "Must oversee and annually train all agents and employees to ensure compliance.",
        violated: true,
        how: "(Human) Agent W-04 promised a refund; (Human) Agent W-05 revoked it hours later. 6 agents, 6 answers.",
    },
    {
        paragraph: "¶ 121(a)",
        text: "Must develop, implement, and maintain written policies ensuring compliance with EFTA and Regulation E.",
        violated: true,
        how: "No consistent policy was applied across any of the 6 agents who handled this case.",
    },
];

export default function ConsentOrderPage() {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-[#09090b] font-sans">
            {/* Header */}
            <div className="max-w-3xl mx-auto pt-16 pb-12 px-4 md:px-6">
                <Link
                    href="/"
                    className="text-xs font-mono text-zinc-600 hover:text-zinc-400 uppercase tracking-widest transition-colors"
                >
                    ← Back to Battle Log
                </Link>
                <div className="mt-8 flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-red-950/30 border border-red-900/20 rounded-lg text-[10px] font-mono text-red-400 uppercase tracking-wider font-bold">
                        CFPB File No. 2025-CFPB-0004
                    </span>
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                        Entered Jan 30, 2025
                    </span>
                </div>
                <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-3">
                    As it relates to Daniel Lewis &mdash; Fintech Fuckery&apos;s first complaint
                </p>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    The{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                        Consent Order
                    </span>
                </h1>
                <p className="text-zinc-400 text-lg mt-4 leading-relaxed max-w-2xl">
                    Wise signed a federal consent order promising to stop doing exactly
                    what they&apos;re doing to Daniel right now. Here are the receipts.
                </p>
            </div>

            {/* What Is This Order */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-5 h-5 text-zinc-400" />
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                            What Is a Consent Order?
                        </h2>
                    </div>

                    <div className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                        <p>
                            On{" "}
                            <strong className="text-zinc-200">
                                January 30, 2025
                            </strong>
                            , the Consumer Financial Protection Bureau issued Consent
                            Order 2025-CFPB-0004 against{" "}
                            <strong className="text-zinc-200">Wise US Inc.</strong> — a
                            Delaware-incorporated remittance transfer provider
                            headquartered in New York.
                        </p>
                        <p>
                            A consent order is{" "}
                            <strong className="text-zinc-200">
                                not a suggestion
                            </strong>
                            . It is a legally binding federal enforcement action. Wise
                            agreed — under penalty of law — to stop engaging in specific
                            deceptive practices, fix their compliance systems, and pay
                            penalties.
                        </p>
                        <p>
                            The order found Wise guilty of{" "}
                            <strong className="text-red-300">
                                deceptive marketing disclosures
                            </strong>
                            ,{" "}
                            <strong className="text-red-300">
                                failing to refund fees when funds weren&apos;t made
                                available
                            </strong>
                            ,{" "}
                            <strong className="text-red-300">
                                inadequate staff training on error resolution
                            </strong>
                            , and{" "}
                            <strong className="text-red-300">
                                failing to comply with disclosure requirements
                            </strong>{" "}
                            — among other violations.
                        </p>
                    </div>

                    {/* Penalty Summary */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-zinc-800/50">
                        {[
                            {
                                label: "Civil Penalty",
                                value: "$2.025M",
                                sub: "Subsequently reduced to ~$45K",
                            },
                            {
                                label: "Consumer Redress",
                                value: "$449,550",
                                sub: "For affected consumers",
                            },
                            {
                                label: "Violations Found",
                                value: "20+",
                                sub: "Across CFPA, EFTA, Reg E",
                            },
                            {
                                label: "Affected Consumers",
                                value: "1,000+",
                                sub: "Documented in the order",
                            },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-xl md:text-2xl font-black text-white">
                                    {stat.value}
                                </p>
                                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mt-1">
                                    {stat.label}
                                </p>
                                <p className="text-[9px] text-zinc-700 mt-0.5">
                                    {stat.sub}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="https://www.consumerfinance.gov/enforcement/actions/wise-us-inc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-xs font-mono transition-colors"
                        >
                            Read the Full Consent Order{" "}
                            <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="w-px h-4 bg-zinc-800 self-center" />
                        <a
                            href="https://www.consumerfinance.gov/about-us/newsroom/cfpb-amends-wise-order-for-remittance-practices/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-400 text-xs font-mono transition-colors"
                        >
                            Amended Order (May 2025){" "}
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </section>

            {/* The Hard Truth */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-zinc-950 to-red-900/10" />
                    <div className="relative border border-amber-900/20 rounded-2xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-5">
                            <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-amber-900/20 flex items-center justify-center shrink-0">
                                <AlertTriangle className="w-6 h-6 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-amber-200 text-base">
                                    The Honest Caveat
                                </h3>
                                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mt-0.5">
                                    What a $1,200/hr defense attorney would say
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm leading-relaxed">
                            <p className="text-zinc-400">
                                The Consent Order focuses on{" "}
                                <strong className="text-zinc-200">
                                    Remittance Transfers
                                </strong>{" "}
                                (consumers sending money internationally) and{" "}
                                <strong className="text-zinc-200">
                                    Prepaid Accounts
                                </strong>
                                . Daniel&apos;s situation involves a{" "}
                                <strong className="text-zinc-200">
                                    Merchant Card Payment
                                </strong>{" "}
                                — a different product line.
                            </p>
                            <p className="text-zinc-400">
                                Wise&apos;s lawyers will argue:{" "}
                                <em className="text-zinc-500">
                                    &ldquo;The Consent Order applies to Remittance
                                    Transfers under Regulation E. Mr. Lewis is a merchant
                                    using our Acquiring Service. Different product,
                                    different rules.&rdquo;
                                </em>
                            </p>
                            <p className="text-zinc-400">
                                <strong className="text-amber-300">
                                    They&apos;re technically correct.
                                </strong>{" "}
                                On the strict product classification.
                            </p>
                            <p className="text-zinc-400">
                                <strong className="text-amber-300">
                                    But regulators don&apos;t think in product lines.
                                </strong>{" "}
                                They think in patterns. And the pattern here is identical:
                                deceptive representations about fees, untrained support
                                staff contradicting each other, funds not made available by
                                the disclosed date, and fees retained for services not
                                rendered.{" "}
                                <strong className="text-zinc-200">Same company. Same behavior. Different label on the product.</strong>
                            </p>
                            <p className="text-zinc-400">
                                The legal term is{" "}
                                <strong className="text-red-300">
                                    &ldquo;Recidivist.&rdquo;
                                </strong>{" "}
                                A repeat offender. A company that signed a federal
                                agreement to stop doing X, and then immediately did X
                                again on a different product. That&apos;s not a contract
                                dispute — that&apos;s{" "}
                                <strong className="text-red-300">
                                    regulatory contempt
                                </strong>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE RECEIPTS */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="flex items-center gap-3 mb-2">
                    <Siren className="w-5 h-5 text-red-500" />
                    <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                        The Receipts
                    </h2>
                </div>
                <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-6">
                    Where their own words bury them
                </p>

                <div className="space-y-3">
                    {receipts.map((item) => {
                        const ItemIcon = item.icon;
                        const isExpanded = expandedItem === item.id;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`${item.bgColor} border ${item.borderColor} rounded-2xl overflow-hidden transition-all duration-300`}
                            >
                                <button
                                    onClick={() =>
                                        setExpandedItem(
                                            isExpanded ? null : item.id
                                        )
                                    }
                                    className="w-full text-left p-5 md:p-6 hover:bg-white/[0.02] transition-colors cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`w-10 h-10 rounded-lg border ${item.borderColor} flex items-center justify-center shrink-0 ${item.bgColor}`}
                                        >
                                            <ItemIcon
                                                className={`w-5 h-5 ${item.color}`}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <span
                                                        className={`text-xs font-mono ${item.color} font-bold tracking-wider`}
                                                    >
                                                        {item.paragraph}
                                                    </span>
                                                    <h4 className="text-zinc-200 font-bold text-base mt-0.5">
                                                        {item.label}
                                                    </h4>
                                                </div>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-zinc-600 transition-transform duration-300 shrink-0 mt-1 ${isExpanded
                                                        ? "rotate-180"
                                                        : ""
                                                        }`}
                                                />
                                            </div>
                                            <p className="text-zinc-500 text-sm mt-2 leading-relaxed line-clamp-2">
                                                {item.danielsSituation}
                                            </p>
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-6 md:px-6 space-y-5">
                                                {/* Your situation */}
                                                <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-4">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <Zap className="w-3.5 h-3.5 text-zinc-400" />
                                                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">
                                                            Your situation
                                                        </span>
                                                    </div>
                                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                                        {item.danielsSituation}
                                                    </p>
                                                </div>

                                                {/* The consent order quote */}
                                                <div
                                                    className={`${item.bgColor} border ${item.borderColor} rounded-xl p-4`}
                                                >
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <Quote
                                                            className={`w-3.5 h-3.5 ${item.color}`}
                                                        />
                                                        <span
                                                            className={`text-[10px] font-mono ${item.color} uppercase tracking-wider font-bold`}
                                                        >
                                                            Consent Order —{" "}
                                                            {item.paragraph}
                                                        </span>
                                                    </div>
                                                    <blockquote className="text-zinc-300 text-sm leading-relaxed italic border-l-2 border-current pl-4 opacity-90">
                                                        &ldquo;{item.quote}
                                                        &rdquo;
                                                    </blockquote>
                                                </div>

                                                {/* The interpretation */}
                                                <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-xl p-4">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <ArrowRight
                                                            className={`w-3.5 h-3.5 ${item.color}`}
                                                        />
                                                        <span
                                                            className={`text-[10px] font-mono ${item.color} uppercase tracking-wider font-bold`}
                                                        >
                                                            Why this matters now
                                                        </span>
                                                    </div>
                                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                                        {item.interpretation}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Conduct Provisions Violated */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden"
                >
                    <div className="p-5 md:p-6 border-b border-zinc-800 flex items-center gap-3">
                        <ShieldAlert className="w-5 h-5 text-red-400" />
                        <div>
                            <h3 className="font-bold text-zinc-200 text-base">
                                Conduct Provisions — Active Violations
                            </h3>
                            <p className="text-zinc-600 text-xs font-mono mt-0.5">
                                The consent order PROHIBITS these practices. They&apos;re
                                all happening right now.
                            </p>
                        </div>
                    </div>
                    <div className="divide-y divide-zinc-800/50">
                        {conductProvisions.map((provision, i) => (
                            <div
                                key={i}
                                className="p-5 md:p-6 hover:bg-zinc-800/20 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex flex-col items-center gap-1 shrink-0">
                                        <span className="text-xs font-mono text-red-400 font-bold">
                                            {provision.paragraph}
                                        </span>
                                        <XCircle className="w-4 h-4 text-red-500" />
                                    </div>
                                    <div className="flex-1">
                                        <blockquote className="text-zinc-400 text-sm leading-relaxed italic border-l-2 border-zinc-700 pl-3 mb-3">
                                            &ldquo;{provision.text}&rdquo;
                                        </blockquote>
                                        <div className="flex items-start gap-2">
                                            <ArrowRight className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                                            <p className="text-zinc-300 text-sm">
                                                <strong className="text-red-300">
                                                    Violated:
                                                </strong>{" "}
                                                {provision.how}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* The LLC Loophole */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 via-zinc-950 to-red-900/10" />
                    <div className="relative border border-amber-900/20 rounded-2xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-amber-900/20 flex items-center justify-center shrink-0">
                                <Ban className="w-6 h-6 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-amber-200 text-lg">
                                    The LLC Loophole
                                </h3>
                                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mt-0.5">
                                    How Wise dodged Federal oversight &mdash; and why it won&apos;t work
                                </p>
                            </div>
                        </div>

                        {/* What happened */}
                        <div className="space-y-4 text-sm leading-relaxed mb-8">
                            <p className="text-zinc-400">
                                Both of Daniel&apos;s CFPB complaints were{" "}
                                <strong className="text-red-300">rejected</strong> &mdash;
                                not because the practices weren&apos;t harmful, but because
                                Wise flagged his account as{" "}
                                <strong className="text-zinc-200">&ldquo;Commercial/Business.&rdquo;</strong>{" "}
                                <strong className="text-zinc-200">Regulation E</strong> &mdash; the
                                federal law protecting electronic transfers &mdash; strictly
                                applies to <em>consumer</em> accounts (personal, family,
                                household use).
                            </p>
                            <p className="text-zinc-400">
                                By hiding behind Daniel&apos;s LLC status, Wise is effectively
                                saying:{" "}
                                <em className="text-zinc-500">
                                    &ldquo;Federal consumer protection laws don&apos;t apply
                                    to him, so we can do whatever we want.&rdquo;
                                </em>
                            </p>
                            <p className="text-zinc-400">
                                This is a{" "}
                                <strong className="text-amber-300">standard playbook move</strong>.
                                It works on most people. It will not work here.
                            </p>
                        </div>

                        {/* The pivot */}
                        <div className="bg-emerald-950/15 border border-emerald-900/20 rounded-xl p-5 mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Scale className="w-4 h-4 text-emerald-400" />
                                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                                    The Counter &mdash; Single-Member LLC
                                </span>
                            </div>
                            <div className="space-y-3 text-sm leading-relaxed">
                                <p className="text-zinc-300">
                                    DnDL Creative LLC is a{" "}
                                    <strong className="text-emerald-300">Single-Member LLC</strong>.
                                    In the eyes of the law (and the IRS), that is a{" "}
                                    <strong className="text-zinc-200">&ldquo;Disregarded Entity&rdquo;</strong>
                                    &mdash; Daniel and the business are effectively the same
                                    person. He personally guaranteed the account. He is
                                    personally liable for its obligations. And he is
                                    personally harmed by Wise&apos;s conduct.
                                </p>
                                <p className="text-zinc-400">
                                    The &ldquo;Business Account&rdquo; label doesn&apos;t
                                    change the fact that a{" "}
                                    <strong className="text-zinc-200">
                                        real person lost real money
                                    </strong>{" "}
                                    because of the same deceptive practices cited in the
                                    consent order. Wise gets to keep $43.88 for a service they
                                    cancelled, hold $993.62 indefinitely, and dodge Federal
                                    accountability &mdash; all because of a label.
                                </p>
                            </div>
                        </div>

                        {/* Alternative routes */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 mb-1">
                                <Landmark className="w-4 h-4 text-amber-400" />
                                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                                    Where federal law stops, state law starts
                                </span>
                            </div>

                            {[
                                {
                                    route: "New York Attorney General",
                                    law: "GBL § 349",
                                    description:
                                        "Prohibits \"deceptive acts or practices in the conduct of any business, trade or commerce.\" Unlike federal law, NY GBL § 349 protects businesses as well as consumers when the conduct affects the public interest. Wise is doing this to everyone, not just Daniel.",
                                    color: "text-amber-400",
                                    borderColor: "border-amber-900/20",
                                    bgColor: "bg-amber-950/10",
                                },
                                {
                                    route: "Delaware DOJ",
                                    law: "Consumer Protection Unit",
                                    description:
                                        "Wise US Inc. is incorporated in Delaware. The Delaware Department of Justice Consumer Protection Unit has jurisdiction over companies incorporated in the state, regardless of whether the victim is a consumer or a business.",
                                    color: "text-blue-400",
                                    borderColor: "border-blue-900/20",
                                    bgColor: "bg-blue-950/10",
                                },
                                {
                                    route: "Small Claims Court",
                                    law: "Conversion + Promissory Estoppel",
                                    description:
                                        "Regulators are slow. A judge is fast. In Small Claims, corporate lawyers are often not allowed. Filing costs $20\u2013$50. Wise will likely settle instantly rather than pay a lawyer $500/hour to defend a $1,000 case they will lose.",
                                    color: "text-red-400",
                                    borderColor: "border-red-900/20",
                                    bgColor: "bg-red-950/10",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`${item.bgColor} border ${item.borderColor} rounded-xl p-4`}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <Gavel
                                            className={`w-3.5 h-3.5 ${item.color}`}
                                        />
                                        <span
                                            className={`text-xs font-mono ${item.color} font-bold tracking-wider`}
                                        >
                                            {item.route}
                                        </span>
                                        <span className="text-[10px] font-mono text-zinc-600">
                                            {item.law}
                                        </span>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-5 border-t border-amber-900/15">
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                <strong className="text-amber-300">
                                    The CFPB rejections don&apos;t close the door.
                                </strong>{" "}
                                They just reveal which door Wise left open. The
                                &ldquo;Business Account&rdquo; defense doesn&apos;t protect
                                them from state fraud laws, a civil judge, or the court of
                                public opinion.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* The Public Confession */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 rounded-2xl animate-pulse" />
                    <div className="relative bg-zinc-950/95 m-px rounded-2xl p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-900/30 flex items-center justify-center shrink-0">
                                <Quote className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <h3 className="font-bold text-red-200 text-base">
                                        The Feb 16 Confession
                                    </h3>
                                    <span className="px-2 py-0.5 bg-red-950/40 border border-red-900/30 rounded text-[10px] font-mono text-red-400 uppercase">
                                        Exhibit D
                                    </span>
                                </div>
                                <p className="text-zinc-500 text-xs font-mono">
                                    Nearly identical copy-paste responses on Google Maps &
                                    Trustpilot · similar message via Instagram DM
                                </p>
                            </div>
                        </div>

                        <blockquote className="relative pl-5 border-l-2 border-red-500/50 mb-6">
                            <p className="text-zinc-300 text-sm leading-relaxed italic">
                                &ldquo;Similarly, if one of these card payments is
                                refunded, then we&apos;re unable to return the fees, as
                                mentioned here: wi.se/business_cards&rdquo;
                            </p>
                            <footer className="mt-2 text-xs text-zinc-600 not-italic font-mono">
                                — Wise, publicly on Google Maps & Trustpilot, Feb 16, 2026
                            </footer>
                        </blockquote>

                        <div className="bg-red-950/20 border border-red-900/20 rounded-xl p-4">
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                <strong className="text-red-300">
                                    Translation:
                                </strong>{" "}
                                A company that signed a federal consent order for failing
                                to refund fees when funds weren&apos;t made available
                                (¶ 97) just went on two public platforms and stated — as
                                official company policy — that they{" "}
                                <strong className="text-zinc-200">
                                    still don&apos;t refund fees
                                </strong>
                                . Twelve months after promising the federal government
                                they&apos;d stop.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* The Recidivist Pattern */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/15 via-zinc-950 to-orange-900/10" />
                    <div className="relative border border-red-900/20 rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-900/20 flex items-center justify-center">
                                <Flame className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-red-200 text-base">
                                    The Recidivist Pattern
                                </h3>
                                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">
                                    What regulators see when they look at this
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    num: "01",
                                    content: (
                                        <>
                                            <strong className="text-red-200">
                                                January 30, 2025:
                                            </strong>{" "}
                                            Wise signs Consent Order
                                            2025-CFPB-0004. Agrees to stop
                                            retaining fees on failed transactions,
                                            train staff properly, and implement
                                            compliance systems. Pays $2.025M in
                                            penalties (later reduced to ~$45K).
                                        </>
                                    ),
                                },
                                {
                                    num: "02",
                                    content: (
                                        <>
                                            <strong className="text-red-200">
                                                January 27, 2026:
                                            </strong>{" "}
                                            Wise sends marketing email: &ldquo;Your
                                            business is all set up to accept cards
                                            and Apple Pay.&rdquo; Merchant enables
                                            card payments based on this
                                            representation.
                                        </>
                                    ),
                                },
                                {
                                    num: "03",
                                    content: (
                                        <>
                                            <strong className="text-red-200">
                                                February 4–5, 2026:
                                            </strong>{" "}
                                            $1,037.50 payment captured. Feature
                                            revoked the next day. $43.88 fee
                                            retained. Funds held. Approval email
                                            contradicts revocation reason.
                                        </>
                                    ),
                                },
                                {
                                    num: "04",
                                    content: (
                                        <>
                                            <strong className="text-red-200">
                                                February 5–16, 2026:
                                            </strong>{" "}
                                            Six agents. Six different answers.
                                            Written promise of refund retracted same
                                            night. Agent tells merchant to
                                            &ldquo;not expect the funds.&rdquo; No
                                            error resolution process initiated. No
                                            remedies offered.
                                        </>
                                    ),
                                },
                                {
                                    num: "05",
                                    content: (
                                        <>
                                            <strong className="text-red-200">
                                                February 16, 2026:
                                            </strong>{" "}
                                            Wise goes on Google Maps, Trustpilot, and Instagram
                                            and publicly states: &ldquo;we&apos;re
                                            unable to return the fees.&rdquo; —
                                            defending the exact practice cited in
                                            ¶ 97 of the consent order they signed
                                            12 months ago.
                                        </>
                                    ),
                                },
                            ].map((item) => (
                                <div
                                    key={item.num}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-red-500 font-bold font-mono text-sm shrink-0 mt-0.5">
                                        {item.num}
                                    </span>
                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-5 border-t border-red-900/15">
                            <blockquote className="text-sm italic text-zinc-400 border-l-2 border-red-500/40 pl-4 mb-4">
                                &ldquo;The Bureau may use the practices described in this
                                Consent Order in future enforcement actions against
                                Respondent and its affiliates, including, without
                                limitation,{" "}
                                <strong className="text-red-300 not-italic">
                                    to establish a pattern or practice of violations or
                                    the continuation of a pattern or practice of
                                    violations
                                </strong>{" "}
                                or to calculate the amount of any penalty.&rdquo;
                            </blockquote>
                            <p className="text-[10px] font-mono text-zinc-600">
                                — Consent Order ¶ 165. The CFPB reserved the right to
                                use this order as evidence of a pattern.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Bottom Line */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                            The Bottom Line
                        </h2>
                    </div>
                    <div className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                        <p>
                            If Daniel sued Wise on strict contract terms,{" "}
                            <strong className="text-zinc-300">
                                he would probably lose
                            </strong>
                            . Their Customer Agreement is a 30-page fortress
                            designed to protect them in court.
                        </p>
                        <p>
                            But this isn&apos;t a court case.{" "}
                            <strong className="text-emerald-300">
                                This is a regulatory matter.
                            </strong>
                        </p>
                        <p>
                            The CFPB doesn&apos;t enforce Wise&apos;s Terms of Service.
                            They enforce{" "}
                            <strong className="text-zinc-200">
                                federal consumer protection law
                            </strong>
                            . And a company that signed a consent order promising to stop
                            retaining fees, train their staff, and implement compliance
                            systems &mdash; and then did none of those things &mdash; isn&apos;t
                            protected by a contract.
                        </p>
                        <p>
                            They&apos;re exposed by a{" "}
                            <strong className="text-red-300">pattern</strong>.
                        </p>
                    </div>

                    {/* Fintech Fuckery Assessment */}
                    <div className="mt-8 pt-6 border-t border-zinc-800/50">
                        <div className="flex items-center gap-3 mb-5">
                            <Flame className="w-5 h-5 text-orange-400" />
                            <div>
                                <h3 className="font-bold text-orange-200 text-sm uppercase tracking-wider">
                                    Fintech Fuckery Assessment
                                </h3>
                                <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                                    What Daniel still has the power to do
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            {[
                                {
                                    num: "01",
                                    action: "File with the New York Attorney General",
                                    detail: "Under GBL \u00a7 349 (Deceptive Business Practices). Unlike federal law, this protects businesses too \u2014 especially when the conduct affects the public interest. Wise is doing this to everyone.",
                                    color: "text-amber-400",
                                },
                                {
                                    num: "02",
                                    action: "File with the Delaware Department of Justice",
                                    detail: "Wise US Inc. is incorporated in Delaware. The Delaware DOJ Consumer Protection Unit has jurisdiction regardless of whether the victim is a consumer or a business.",
                                    color: "text-blue-400",
                                },
                                {
                                    num: "03",
                                    action: "File Small Claims Court",
                                    detail: "Conversion (theft) and Promissory Estoppel. Filing costs $20\u2013$50. Corporate lawyers are often barred from Small Claims. Wise will settle rather than pay $500/hr to defend a case they\u2019ll lose.",
                                    color: "text-red-400",
                                },
                                {
                                    num: "04",
                                    action: "Leverage the NYDFS Money Transmitter License",
                                    detail: "Wise is licensed by the New York Department of Financial Services. The NYDFS does not draw the same business-vs-consumer line as the CFPB. A complaint here hits Wise\u2019s operating license.",
                                    color: "text-emerald-400",
                                },
                                {
                                    num: "05",
                                    action: "Play the Disregarded Entity card",
                                    detail: "DnDL Creative LLC is a Single-Member LLC \u2014 a \u201cDisregarded Entity\u201d under IRS and legal classification. Daniel and the LLC are the same person. The \u201cBusiness Account\u201d defense is a label, not a shield.",
                                    color: "text-purple-400",
                                },
                                {
                                    num: "06",
                                    action: "Keep this site live",
                                    detail: "Every page, every receipt, every quote \u2014 indexed, timestamped, and public. This isn\u2019t a threat. It\u2019s accountability documentation. The internet doesn\u2019t forget.",
                                    color: "text-zinc-400",
                                },
                            ].map((item) => (
                                <div
                                    key={item.num}
                                    className="flex items-start gap-3 bg-zinc-900/40 border border-zinc-800/40 rounded-xl p-4"
                                >
                                    <span className={`${item.color} font-bold font-mono text-sm shrink-0 mt-0.5`}>
                                        {item.num}
                                    </span>
                                    <div>
                                        <p className="text-zinc-200 font-bold text-sm">
                                            {item.action}
                                        </p>
                                        <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-xl p-4 mb-6">
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                <strong className="text-orange-300">
                                    Wise blocked the Federal route.
                                </strong>{" "}
                                That was their only play. It removed the only barrier
                                preventing Daniel from taking this to{" "}
                                <strong className="text-zinc-200">
                                    state court, state regulators, and the public record
                                </strong>
                                . The &ldquo;Business Account&rdquo; defense doesn&apos;t
                                protect them from a civil judge, state fraud laws, or the
                                court of public opinion.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm rounded-xl transition-all"
                            >
                                View the Battle Log
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/#submit-complaint"
                                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-sm rounded-xl transition-all border border-zinc-700"
                            >
                                File Your Own Complaint
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
