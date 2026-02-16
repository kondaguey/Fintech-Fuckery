"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    FileText,
    AlertTriangle,
    ShieldOff,
    Skull,
    Zap,
    Quote,
    ExternalLink,
    Eye,
    Lock,
    Bomb,
    CheckCircle2,
    XCircle,
    ArrowRight,
    MessageSquareWarning,
    Flame,
    Siren,
    ShieldAlert,
} from "lucide-react";

interface ContractReality {
    clause: string;
    title: string;
    icon: typeof FileText;
    color: string;
    borderColor: string;
    bgColor: string;
    glowColor: string;
    whatTheySay: string;
    theirDefense: string;
    whyRegulatorsStillCare: string[];
    regulatoryVerdict: string;
}

const contractRealities: ContractReality[] = [
    {
        clause: "§ 4.6",
        title: "\"Your Website Wasn't Compliant\"",
        icon: Eye,
        color: "text-zinc-400",
        borderColor: "border-zinc-800/50",
        bgColor: "bg-zinc-900/40",
        glowColor: "shadow-zinc-900/20",
        whatTheySay:
            "You are required to provide precise URL(s)... You agree to include the following information clearly and conspicuously on your websites: brand marks, description, refund policy, click-to-accept, contact info, address, transaction currency, delivery policy, privacy policy, security policy...",
        theirDefense:
            "Wise will argue the Jan 27 email was an automated marketing notification, not a compliance audit. They'll cite Clause 4.5(a)(v): \"You are and remain solely responsible to ensure compliance.\" They enabled the feature. They'll say YOU misused it by pointing it to a non-compliant website. In strict contract terms — they're right.",
        whyRegulatorsStillCare: [
            "The CFPB doesn't care whether § 4.6 technically lets them revoke the feature. They care that a consumer received an explicit confirmation (\"Your business is all set up to accept cards and Apple Pay\"), acted on it, and was then penalized retroactively.",
            "Under UDAAP, a practice is \"Deceptive\" if it misleads a reasonable consumer. A reasonable person reading \"You're all set up\" would not assume they still need to independently verify their own compliance against a 30-page document.",
            "The NYDFS examines whether licensed money transmitters create foreseeable consumer harm through their operational processes. Approving first, capturing funds, then revoking is a process failure — regardless of what the contract says.",
            "Wise had a duty to review BEFORE enabling the feature. They skipped their own underwriting. Regulators will ask: \"Why did your system approve a non-compliant merchant in the first place?\"",
        ],
        regulatoryVerdict: "OPERATIONAL FAILURE — DECEPTIVE PRACTICE",
    },
    {
        clause: "§ 6 + Pricing",
        title: "\"We Can't Return the Fees\"",
        icon: Lock,
        color: "text-zinc-400",
        borderColor: "border-zinc-800/50",
        bgColor: "bg-zinc-900/40",
        glowColor: "shadow-zinc-900/20",
        whatTheySay:
            "Similarly, if one of these card payments is refunded, then we're unable to return the fees.",
        theirDefense:
            "Wise will argue: \"We rendered the service. Our service is routing transactions (Clause 3.1). We routed it. Visa/Mastercard took their interchange cut. We can't refund a fee that's already been split with the card networks. The settlement failure was caused by HIS breach of § 4.6, not ours.\" In strict contract terms — they have a point.",
        whyRegulatorsStillCare: [
            "On Feb 16, 2026, Wise posted this policy publicly on Google Maps AND Instagram — identical copy-paste responses. They just created Exhibit D.",
            "The CFPB fined Wise $2.025M in Consent Order 2025-CFPB-0004 for THIS EXACT PATTERN: failing to refund fees when funds were not made available to consumers as promised.",
            "A company currently under a CFPB consent order going on social media to publicly defend the exact practice they were fined for is the kind of thing that makes regulators pick up the phone.",
            "Under Dodd-Frank, an \"Unfair\" practice causes substantial consumer injury that is not reasonably avoidable and not outweighed by benefits. Keeping $43.88 for a service that resulted in zero settlement to the merchant meets all three prongs.",
        ],
        regulatoryVerdict: "PUBLIC ADMISSION — REPEAT OFFENSE",
    },
    {
        clause: "§ 5.1 + 7.3",
        title: "\"We're Holding Funds as Collateral\"",
        icon: ShieldOff,
        color: "text-zinc-400",
        borderColor: "border-zinc-800/50",
        bgColor: "bg-zinc-900/40",
        glowColor: "shadow-zinc-900/20",
        whatTheySay:
            "Where a Chargeback occurs, we shall immediately be entitled to debit the Reserve Account... We authorize us to hold Settlement funds if we believe there is a potential risk of loss...",
        theirDefense:
            "Wise will argue this is standard banking procedure mandated by Visa, not Wise. The client initiated a dispute. The funds are in limbo with the issuing bank. If they release the money now and Visa rules against them later, Wise eats the loss twice. They're following § 7.3(f) — \"potential risk of loss.\" In strict contract terms — this is standard.",
        whyRegulatorsStillCare: [
            "The chargeback exists BECAUSE of Wise's operational chaos. The client disputed the charge because Wise failed to settle the funds on time. Regulators will look at the causal chain: Wise's failures → delayed settlement → client loses confidence → chargeback filed.",
            "Wise is using the chargeback — which their own failures caused — as justification to hold funds indefinitely. This is circular reasoning that regulators specifically look for in UDAAP examinations.",
            "The NYDFS requires licensed money transmitters to have clear, predictable timelines for fund disbursement. \"Indefinitely\" is not a timeline.",
            "(Human) Agent W-06 explicitly told the merchant: \"Neither you nor your client should expect the funds.\" That statement, from an official representative, is evidence of a company that has abandoned its obligation to resolve the situation.",
        ],
        regulatoryVerdict: "SELF-INFLICTED CHARGEBACK — CIRCULAR JUSTIFICATION",
    },
    {
        clause: "(Human) Agent W-04 → W-05",
        title: "\"A Support Agent Made a Mistake\"",
        icon: Skull,
        color: "text-zinc-400",
        borderColor: "border-zinc-800/50",
        bgColor: "bg-zinc-900/40",
        glowColor: "shadow-zinc-900/20",
        whatTheySay:
            "\"The transfer will be refunded until the end of the day.\" — (Human) Agent W-04 (Feb 13, 2:27 PM). \"The previous agent give a false information\" — (Human) Agent W-05 (Feb 14, 2:36 AM).",
        theirDefense:
            "Wise will argue a low-level support agent made a mistake. He saw the refund button and assumed it could be processed. A senior agent corrected the record hours later. A customer support error does not override the written contract. The merchant didn't suffer financial damages from the email — he suffered annoyance. Annoyance is not a tort. In court — this defense probably works.",
        whyRegulatorsStillCare: [
            "Regulators don't evaluate individual agent errors. They evaluate SYSTEMS. Six different agents, six different answers, over 9 days — that's not \"one mistake.\" That's a broken support infrastructure.",
            "Under UDAAP, the \"Deceptive\" prong examines whether the company's OVERALL CONDUCT misleads consumers. A pattern of contradictory official statements from authorized representatives is textbook deception, regardless of whether each individual statement was \"just a mistake.\"",
            "The NYDFS specifically examines whether money transmitters have adequate consumer complaint resolution procedures. A company that gives a written promise and then retracts it the next morning does not have adequate procedures.",
            "The CFPB consent order already flagged Wise for operational failures in consumer-facing processes. This is more of the same — demonstrating that the $2.025M fine didn't fix the underlying problems.",
        ],
        regulatoryVerdict: "SYSTEMIC FAILURE — PATTERN OF DECEPTION",
    },
];

const publicConfession = {
    platform: "Google Maps & Instagram",
    date: "Feb 16, 2026",
    significance: [
        {
            label: "What they admitted",
            value: "It is their policy to retain fees even when the transaction fails",
            icon: MessageSquareWarning,
            color: "text-red-400",
        },
        {
            label: "Why it matters",
            value: "This is the exact practice the CFPB fined them for in 2025",
            icon: AlertTriangle,
            color: "text-amber-400",
        },
        {
            label: "Evidence classification",
            value: "Exhibit D — Public admission of UDAAP violation",
            icon: FileText,
            color: "text-orange-400",
        },
    ],
};

export default function ContractTrap() {
    const [expandedClause, setExpandedClause] = useState<number | null>(null);

    return (
        <div className="w-full space-y-8">

            {/* The Hard Truth Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-zinc-950 to-red-900/10" />
                <div className="relative border border-amber-900/20 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-amber-900/20 flex items-center justify-center shrink-0">
                            <AlertTriangle className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-amber-200 text-base">
                                The Hard Truth
                            </h4>
                            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mt-0.5">
                                Why the contract doesn&apos;t matter
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4 text-sm leading-relaxed">
                        <p className="text-zinc-400">
                            Wise&apos;s Customer Agreement is a{" "}
                            <strong className="text-zinc-200">30-page fortress</strong>.
                            Every clause is engineered to give them maximum power and
                            minimum accountability. If this case went to court purely on{" "}
                            <em>contract law</em>, Wise&apos;s attorneys would tear it
                            apart in five minutes.
                        </p>
                        <p className="text-zinc-400">
                            <strong className="text-amber-300">
                                But this was never a contract case.
                            </strong>
                        </p>
                        <p className="text-zinc-400">
                            The weapon isn&apos;t the contract. It&apos;s the{" "}
                            <strong className="text-zinc-200">chaos</strong>. Six agents.
                            Six different answers. A written promise retracted the next
                            morning. An approval email followed by a retroactive revocation.
                            A company{" "}
                            <em>already under a CFPB consent order</em> going on social
                            media to publicly defend the exact practice they were fined
                            for.
                        </p>
                        <p className="text-zinc-400">
                            Regulators don&apos;t read contracts. They read{" "}
                            <strong className="text-amber-300">patterns</strong>.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* The Public Confession Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl"
            >
                {/* Animated border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 rounded-2xl animate-pulse" />
                <div className="relative bg-zinc-950/95 m-px rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-900/30 flex items-center justify-center shrink-0">
                            <Quote className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h4 className="font-bold text-red-200 text-base">
                                    The Public Confession
                                </h4>
                                <span className="px-2 py-0.5 bg-red-950/40 border border-red-900/30 rounded text-[10px] font-mono text-red-400 uppercase">
                                    Feb 16, 2026
                                </span>
                            </div>
                            <p className="text-zinc-500 text-xs font-mono">
                                Identical copy-paste response posted on Google Maps &
                                Instagram
                            </p>
                        </div>
                    </div>

                    {/* The quote */}
                    <blockquote className="relative pl-5 border-l-2 border-red-500/50 mb-6">
                        <p className="text-zinc-300 text-sm leading-relaxed italic">
                            &ldquo;Similarly, if one of these card payments is refunded,
                            then we&apos;re unable to return the fees, as mentioned here:
                            wi.se/business_cards&rdquo;
                        </p>
                        <footer className="mt-2 text-xs text-zinc-600 not-italic font-mono">
                            — Wise, publicly on Google Maps & Instagram
                        </footer>
                    </blockquote>

                    {/* Why this matters grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {publicConfession.significance.map((item, i) => {
                            const ItemIcon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-4"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <ItemIcon
                                            className={`w-3.5 h-3.5 ${item.color}`}
                                        />
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                                            {item.label}
                                        </span>
                                    </div>
                                    <p className="text-zinc-300 text-sm leading-snug">
                                        {item.value}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Section Label */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                    <FileText className="w-3 h-3" />
                    Their Contract vs. The Regulators
                </div>
                <p className="text-zinc-600 text-xs max-w-lg mx-auto leading-relaxed mt-3">
                    Below is every clause Wise relies on. We show their likely defense — and why regulators will still nail them.
                </p>
            </motion.div>

            {/* Contract Clause Cards */}
            <div className="space-y-3">
                {contractRealities.map((clause, index) => {
                    const ClauseIcon = clause.icon;
                    const isExpanded = expandedClause === index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`bg-zinc-900/50 border border-zinc-800/60 rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? "shadow-lg shadow-zinc-900/40" : ""}`}
                        >
                            <button
                                onClick={() =>
                                    setExpandedClause(isExpanded ? null : index)
                                }
                                className="w-full text-left p-5 md:p-6 hover:bg-zinc-800/20 transition-colors cursor-pointer group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg border border-zinc-800/60 bg-zinc-900/60 flex items-center justify-center shrink-0">
                                        <ClauseIcon className="w-5 h-5 text-zinc-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <span className="text-xs font-mono text-zinc-600 font-bold tracking-wider">
                                                    {clause.clause}
                                                </span>
                                                <h4 className="text-zinc-200 font-bold text-base mt-0.5">
                                                    {clause.title}
                                                </h4>
                                            </div>
                                            <ChevronDown
                                                className={`w-5 h-5 text-zinc-600 transition-transform duration-300 shrink-0 mt-1 ${isExpanded ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </div>

                                        {/* Verdict pill always visible */}
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider bg-zinc-800/50 border border-zinc-700/30 text-zinc-500">
                                                <CheckCircle2 className="w-3 h-3 text-zinc-600" />
                                                Contract: Wise Protected
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider font-bold bg-red-950/30 border border-red-900/20 text-red-400">
                                                <Siren className="w-3 h-3" />
                                                {clause.regulatoryVerdict}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-6 md:px-6 space-y-5">
                                            {/* What the contract says */}
                                            <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <FileText className="w-3.5 h-3.5 text-zinc-500" />
                                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                                                        What the contract says
                                                    </span>
                                                </div>
                                                <blockquote className="text-zinc-500 text-sm leading-relaxed italic border-l-2 border-zinc-700 pl-4">
                                                    &ldquo;{clause.whatTheySay}&rdquo;
                                                </blockquote>
                                            </div>

                                            {/* Their defense */}
                                            <div className="bg-zinc-800/20 border border-zinc-700/20 rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <ShieldAlert className="w-3.5 h-3.5 text-zinc-400" />
                                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">
                                                        Wise&apos;s likely defense
                                                    </span>
                                                    <span className="ml-auto px-2 py-0.5 rounded text-[9px] font-mono bg-zinc-800 border border-zinc-700/30 text-zinc-500 uppercase">
                                                        Legally sound
                                                    </span>
                                                </div>
                                                <p className="text-zinc-400 text-sm leading-relaxed">
                                                    {clause.theirDefense}
                                                </p>
                                            </div>

                                            {/* Why regulators still care */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Flame className="w-3.5 h-3.5 text-red-400" />
                                                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider font-bold">
                                                        Why regulators don&apos;t care
                                                    </span>
                                                </div>
                                                <div className="space-y-2">
                                                    {clause.whyRegulatorsStillCare.map(
                                                        (reason, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-start gap-3 bg-red-950/10 border border-red-900/10 rounded-lg p-3"
                                                            >
                                                                <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                                                                <p className="text-zinc-300 text-sm leading-relaxed">
                                                                    {reason}
                                                                </p>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            {/* Verdict bar */}
                                            <div className="bg-red-950/15 border border-red-900/15 rounded-xl p-4 flex items-center gap-3">
                                                <Siren className="w-5 h-5 text-red-400 shrink-0" />
                                                <div>
                                                    <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                                                        Regulatory exposure
                                                    </span>
                                                    <p className="text-zinc-300 text-sm mt-0.5">
                                                        {clause.regulatoryVerdict}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* The Regulatory Kill Shot */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/15 via-zinc-950 to-orange-900/10" />
                <div className="relative border border-red-900/20 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-900/20 flex items-center justify-center">
                            <Siren className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-red-200 text-base">
                                The Regulatory Picture
                            </h4>
                            <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">
                                What the CFPB and NYDFS actually see
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-red-500 font-bold font-mono text-sm shrink-0 mt-0.5">
                                01
                            </span>
                            <p className="text-zinc-300 text-sm leading-relaxed">
                                <strong className="text-red-200">
                                    A company already under a consent order
                                </strong>{" "}
                                for failing to refund fees when funds weren&apos;t
                                available — caught doing{" "}
                                <em>the exact same thing again</em>, then publicly
                                defending the practice on social media.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-red-500 font-bold font-mono text-sm shrink-0 mt-0.5">
                                02
                            </span>
                            <p className="text-zinc-300 text-sm leading-relaxed">
                                <strong className="text-red-200">
                                    Six agents. Six different answers. Nine days.
                                </strong>{" "}
                                A written promise of a same-day refund, retracted the
                                next morning. This isn&apos;t &ldquo;one mistake by a
                                low-level employee.&rdquo; This is a{" "}
                                <strong className="text-red-200">
                                    broken system
                                </strong>
                                .
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-red-500 font-bold font-mono text-sm shrink-0 mt-0.5">
                                03
                            </span>
                            <p className="text-zinc-300 text-sm leading-relaxed">
                                <strong className="text-red-200">
                                    A chargeback caused by their own failures
                                </strong>{" "}
                                — used as justification to hold funds indefinitely. The
                                client disputed because Wise didn&apos;t settle on time.
                                Then Wise cited that dispute to stop settling. Circular
                                reasoning regulators specifically flag in UDAAP examinations.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-red-500 font-bold font-mono text-sm shrink-0 mt-0.5">
                                04
                            </span>
                            <p className="text-zinc-300 text-sm leading-relaxed">
                                <strong className="text-red-200">
                                    A $2.025M fine didn&apos;t change anything.
                                </strong>{" "}
                                The consent order was supposed to fix these practices.
                                It&apos;s been one year. The same patterns. The same
                                copy-paste responses. The same fees retained for
                                undelivered services. The fine was a cost of doing
                                business — not a deterrent.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-red-900/15">
                        <p className="text-zinc-500 text-xs leading-relaxed mb-4">
                            Wise&apos;s contract protects them in court. It does not
                            protect them from the CFPB, NYDFS, or FinCEN. Regulators
                            don&apos;t enforce Terms of Service — they enforce federal
                            consumer protection law.
                        </p>
                        <div className="flex flex-wrap gap-3 items-center">
                            <a
                                href="/consent-order"
                                className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-xs font-mono font-bold transition-colors"
                            >
                                Read the Full Consent Order Analysis{" "}
                                <ArrowRight className="w-3 h-3" />
                            </a>
                            <span className="w-px h-3 bg-zinc-800" />
                            <a
                                href="https://wi.se/receive-with-card-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-400 text-xs font-mono transition-colors"
                            >
                                Wise Card Policy{" "}
                                <ExternalLink className="w-3 h-3" />
                            </a>
                            <span className="w-px h-3 bg-zinc-800" />
                            <a
                                href="https://www.consumerfinance.gov/enforcement/actions/wise-us-inc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-400 text-xs font-mono transition-colors"
                            >
                                CFPB Enforcement{" "}
                                <ExternalLink className="w-3 h-3" />
                            </a>
                            <span className="w-px h-3 bg-zinc-800" />
                            <a
                                href="https://www.consumerfinance.gov/about-us/newsroom/cfpb-amends-wise-order-for-remittance-practices/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-400 text-xs font-mono transition-colors"
                            >
                                Consent Order Amendment{" "}
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
