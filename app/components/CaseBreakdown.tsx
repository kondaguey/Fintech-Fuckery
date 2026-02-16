"use client";

import { motion } from "framer-motion";
import {
    Scale,
    FileText,
    DollarSign,
    AlertTriangle,
    ExternalLink,
    ShieldAlert,
    Gavel,
} from "lucide-react";

const legalPillars = [
    {
        icon: Scale,
        title: "Promissory Estoppel (Bait & Switch)",
        color: "text-red-400",
        borderColor: "border-red-900/30",
        bgColor: "bg-red-950/20",
        points: [
            "Wise formally approved the account holder for card payments on Jan 27, 2026.",
            "Relying on this approval, a $1,037.50 transaction was processed on Feb 4.",
            "Wise revoked the feature on Feb 5 — AFTER capturing the funds.",
            "The website cited in the rejection was the SAME website on file during approval.",
            "You cannot retroactively apply a policy to seize funds processed under a valid approval.",
        ],
    },
    {
        icon: FileText,
        title: 'The "(Human) Agent W-04" Admission — Misrepresentation',
        color: "text-orange-400",
        borderColor: "border-orange-900/30",
        bgColor: "bg-orange-950/20",
        points: [
            'On Feb 13 at 2:27 PM, (Human) Agent W-04 confirmed in writing: "the transfer will be refunded until the end of the day."',
            "Client was informed. Business decisions were made based on this official statement.",
            "Hours later, (Human) Agent W-05 retracted the promise and admitted (Human) Agent W-04 gave \"false information.\"",
            "A company representative's written confirmation constitutes an actionable representation.",
            "Wise is liable for damages caused by reliance on their agent's false statement.",
        ],
    },
    {
        icon: DollarSign,
        title: "Unjust Enrichment — Fee Retention",
        color: "text-amber-400",
        borderColor: "border-amber-900/30",
        bgColor: "bg-amber-950/20",
        points: [
            "Wise is holding BOTH the principal ($1,037.50) AND the fee ($43.88).",
            "The service (card payment processing) was unilaterally cancelled by Wise.",
            "You cannot retain profit (fees) for a service you refuse to render.",
            "Wise publicly stated on Trustpilot: \"in this case we aren't able to refund the fee.\"",
            "This is textbook unjust enrichment — profiting from a service they declined to perform.",
        ],
    },
];

const filedComplaints = [
    {
        agency: "CFPB",
        caseId: "#XXXXX-XXXX3622",
        status: "Rejected — Business Account",
        date: "Feb 11, 2026",
        description: "Money not available when promised",
    },
    {
        agency: "CFPB",
        caseId: "#XXXXX-XXXX6805",
        status: "Rejected — Business Account",
        date: "Feb 12, 2026",
        description: "Material breach of Consent Order 2025-CFPB-0004",
    },
    {
        agency: "NYDFS",
        caseId: "Pending",
        status: "Filed",
        date: "Feb 12, 2026",
        description: "Unsafe practices by licensed money transmitter",
    },
    {
        agency: "BBB",
        caseId: "Pending",
        status: "Filed",
        date: "Feb 12, 2026",
        description: "Deceptive business practices",
    },
    {
        agency: "FBI IC3",
        caseId: "Pending",
        status: "Filed",
        date: "Feb 13, 2026",
        description: "Wire fraud — 18 U.S.C. § 1343",
    },
    {
        agency: "OCC",
        caseId: "Pending",
        status: "Filed",
        date: "Feb 12, 2026",
        description: "Regulatory non-compliance",
    },
    {
        agency: "DE OSBC",
        caseId: "Pending",
        status: "Filed",
        date: "Feb 15, 2026",
        description: "Wise is incorporated in DE — banking regulator notified",
    },
];

export default function CaseBreakdown() {
    return (
        <div className="w-full space-y-8">
            {/* Consent Order Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-950/30 via-red-950/20 to-zinc-900/50 border border-red-900/20 rounded-2xl p-5 md:p-6"
            >
                <div className="flex gap-4 items-start">
                    <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-red-200 font-bold text-sm uppercase tracking-wider">
                            Prior Offender — CFPB Consent Order 2025-CFPB-0004
                        </h4>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                            On <strong className="text-zinc-200">January 30, 2025</strong>,
                            the CFPB ordered Wise to pay{" "}
                            <strong className="text-red-300">$2.025 million in penalties</strong> and{" "}
                            <strong className="text-red-300">$450,000 in consumer redress</strong> for
                            advertising inaccurate fees and failing to properly disclose
                            exchange rates. However, the order was{" "}
                            <strong className="text-zinc-200">amended on May 15, 2025</strong>,
                            reducing the civil penalty from $2.025M to just{" "}
                            <strong className="text-zinc-200">~$45,000</strong> — a{" "}
                            <em>97.8% reduction</em>. Wise stated it had already voluntarily
                            paid the $450K to consumers before the order was even finalized.
                            The conduct described in this case mirrors the same pattern:
                            fees taken, service not delivered as promised.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <a
                                href="https://www.consumerfinance.gov/enforcement/actions/wise-us-inc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-xs font-mono transition-colors"
                            >
                                CFPB Enforcement Action <ExternalLink className="w-3 h-3" />
                            </a>
                            <a
                                href="https://www.consumerfinance.gov/about-us/newsroom/cfpb-amends-wise-order-for-remittance-practices/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-400 text-xs font-mono transition-colors"
                            >
                                Banking Dive: Penalty Amended <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Legal Pillars */}
            <div className="space-y-4">
                {legalPillars.map((pillar, index) => {
                    const PillarIcon = pillar.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${pillar.bgColor} border ${pillar.borderColor} rounded-2xl p-5 md:p-6`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <PillarIcon className={`w-5 h-5 ${pillar.color}`} />
                                <h4 className={`font-bold ${pillar.color} text-base`}>
                                    {pillar.title}
                                </h4>
                            </div>
                            <ul className="space-y-2.5">
                                {pillar.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="text-zinc-400 text-sm leading-relaxed flex gap-3"
                                    >
                                        <span className="text-zinc-700 font-mono text-xs mt-1 shrink-0">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>

            {/* Filed Complaints Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden"
            >
                <div className="p-5 md:p-6 border-b border-zinc-800 flex items-center gap-3">
                    <Gavel className="w-5 h-5 text-zinc-400" />
                    <h4 className="font-bold text-zinc-200 text-base">
                        Filed Complaints & Regulatory Actions
                    </h4>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-zinc-800 text-zinc-500 text-xs uppercase tracking-wider font-mono">
                                <th className="text-left p-4">Agency</th>
                                <th className="text-left p-4">Case ID</th>
                                <th className="text-left p-4 hidden md:table-cell">Date</th>
                                <th className="text-left p-4">Description</th>
                                <th className="text-left p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filedComplaints.map((complaint, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors"
                                >
                                    <td className="p-4 font-mono font-bold text-zinc-200">
                                        {complaint.agency}
                                    </td>
                                    <td className="p-4 font-mono text-zinc-500 text-xs">
                                        {complaint.caseId}
                                    </td>
                                    <td className="p-4 font-mono text-zinc-600 text-xs hidden md:table-cell">
                                        {complaint.date}
                                    </td>
                                    <td className="p-4 text-zinc-400">{complaint.description}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider ${complaint.status.includes("Rejected")
                                            ? "bg-red-950/40 border border-red-900/30 text-red-400"
                                            : "bg-amber-950/40 border border-amber-900/30 text-amber-400"
                                            }`}>
                                            {complaint.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* The CFPB Gap */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-950/20 via-zinc-900/80 to-amber-950/20 border border-red-900/15 rounded-2xl p-5 md:p-6"
            >
                <div className="flex gap-4 items-start">
                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-red-200 font-bold text-sm uppercase tracking-wider">
                            The Regulatory Gap — And Why It Matters
                        </h4>
                        <div className="text-zinc-400 text-sm mt-3 space-y-3 leading-relaxed">
                            <p>
                                Both CFPB complaints were{" "}
                                <strong className="text-red-300">rejected</strong>{" "}
                                — not because the practices weren&apos;t harmful, but because the account is an{" "}
                                <strong className="text-zinc-200">LLC business account</strong>.
                                The CFPB&apos;s consumer protection mandate under Dodd-Frank primarily covers{" "}
                                <em>individual consumers</em>, not businesses. Wise knows this.
                            </p>
                            <p>
                                This is{" "}
                                <strong className="text-amber-300">the gap they exploit</strong>.
                                A small LLC owner processing their first card payment gets
                                the same predatory treatment as the 1,000+ individual consumers
                                cited in the consent order — but without the same regulatory safety net.
                                Same company. Same playbook. Different label on the victim.
                            </p>
                            <p>
                                <strong className="text-zinc-200">That doesn&apos;t mean there&apos;s no recourse.</strong>{" "}
                                State regulators like the{" "}
                                <strong className="text-zinc-200">NYDFS</strong> (which licenses Wise as a money transmitter){" "}
                                don&apos;t draw the same business-vs-consumer line. The{" "}
                                <strong className="text-zinc-200">FTC&apos;s Section 5</strong>{" "}
                                authority covers unfair practices against businesses, too. And{" "}
                                <strong className="text-zinc-200">state attorneys general</strong>{" "}
                                can investigate deceptive business practices regardless of the victim&apos;s corporate form.
                                The CFPB rejections don&apos;t close the door — they just reveal which door Wise left open.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
