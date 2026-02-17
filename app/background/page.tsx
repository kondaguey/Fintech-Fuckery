import {
    TrendingUp,
    ShieldAlert,
    Globe,
    Users,
    ArrowRight,
    AlertTriangle,
    Flame,
    ExternalLink,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "The Problem — Fintech Fuckery",
    description:
        "How fintech banks gained global popularity and why accountability disappeared along the way.",
};

const fintechs = [
    "Wise",
    "Chime",
    "Cash App",
    "Venmo",
    "PayPal",
    "N26",
    "Monzo",
    "SoFi",
    "Varo",
];

export default function BackgroundPage() {
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
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-8 leading-tight">
                    The Rise of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                        Fintech Banking
                    </span>
                </h1>
                <p className="text-zinc-400 text-lg mt-4 leading-relaxed max-w-2xl">
                    And why nobody&apos;s watching the watchmen.
                </p>
            </div>

            {/* The Rise */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                            The Boom
                        </h2>
                    </div>

                    <div className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                        <p>
                            Over the last 10–15 years, a new wave of financial technology
                            companies has fundamentally reshaped how people move, store, and
                            manage money. Companies like{" "}
                            <strong className="text-zinc-200">
                                Wise, Chime, Cash App, Venmo, PayPal, N26, Monzo
                            </strong>
                            , and dozens of others have gained{" "}
                            <em className="text-zinc-300">explosive</em> global popularity by
                            promising what traditional banks couldn&apos;t deliver:
                        </p>

                        <ul className="space-y-2 pl-4">
                            {[
                                "Instant account setup — no branch visits, no paperwork",
                                "Lower fees — especially for international transfers",
                                "Sleek mobile-first interfaces — banking from your couch",
                                "Multi-currency wallets — one account, 50+ currencies",
                                "Business accounts in minutes — freelancers, LLCs, startups",
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-zinc-300"
                                >
                                    <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p>
                            The pitch was compelling: banking without the bullshit. And for
                            many users, it worked — at first. These platforms collectively
                            serve{" "}
                            <strong className="text-zinc-200">
                                hundreds of millions of users
                            </strong>{" "}
                            worldwide and process trillions of dollars annually.
                        </p>
                    </div>

                    {/* Company Ticker */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-zinc-800/50">
                        {fintechs.map((name) => (
                            <span
                                key={name}
                                className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-[11px] font-mono text-zinc-500 uppercase tracking-wider"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="bg-red-950/10 border border-red-900/20 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldAlert className="w-5 h-5 text-red-400" />
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                            The Problem
                        </h2>
                    </div>

                    <div className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                        <p>
                            But with all big tech, there&apos;s a problem. These companies
                            operate in a{" "}
                            <strong className="text-red-300">regulatory grey zone</strong>.
                            They&apos;re not traditional banks — most are licensed as
                            money transmitters, payment processors, or e-money institutions.
                            That distinction matters, because it means:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
                            {[
                                {
                                    icon: AlertTriangle,
                                    title: "Deposit protection not guaranteed",
                                    desc: "FDIC coverage depends on account type and settings you opt into. An unknowing user could easily be unprotected.",
                                },
                                {
                                    icon: ShieldAlert,
                                    title: "Automated enforcement",
                                    desc: "Algorithms freeze accounts. Humans are optional — and it's getting worse as companies shift to AI-driven support.",
                                },
                                {
                                    icon: Globe,
                                    title: "Jurisdictional arbitrage",
                                    desc: "Operations span countries to dodge specific regulations.",
                                },
                                {
                                    icon: Users,
                                    title: "No branch, no face",
                                    desc: "Disputes handled by chatbots and scripted agents.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-zinc-950/80 border border-zinc-800/50 rounded-xl p-4"
                                >
                                    <item.icon className="w-4 h-4 text-red-400 mb-2" />
                                    <h4 className="text-sm font-semibold text-zinc-200">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            When something goes wrong — a payment held, an account frozen, a
                            fee taken for a service that was then revoked — you&apos;re left
                            navigating an{" "}
                            <strong className="text-zinc-200">
                                intentionally opaque support system
                            </strong>{" "}
                            designed to exhaust you into giving up.
                        </p>

                        <p>
                            Traditional banks have branches you can walk into, human managers
                            you can escalate to, and regulators with real teeth. Fintechs
                            have a chat widget and a{" "}
                            <span className="text-red-400 font-medium">
                                terms of service that says they can do whatever they want
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </section>


            {/* Disclaimer Banner */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-6">
                <div className="bg-amber-950/15 border border-amber-900/20 rounded-xl px-5 py-3 text-center">
                    <p className="text-[11px] font-mono text-amber-600/80 uppercase tracking-wider leading-relaxed">
                        ⚠️ This is not a call for violence against bankers, fintech executives, or anyone else, jackasses.
                        It&apos;s a call for regulatory submission fests, public accountability, and possible class actions. Legally. Enthusiastically.
                    </p>
                </div>
            </section>

            {/* Why I'm Taking This So Seriously */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="bg-red-950/15 border border-red-900/30 rounded-2xl p-6 md:p-8 overflow-hidden">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-orange-400" />
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                            Why I&apos;m Taking This So Seriously
                        </h2>
                    </div>

                    <div className="space-y-5 text-sm md:text-base text-zinc-400 leading-relaxed">
                        <p className="text-zinc-300 text-base md:text-lg font-medium">
                            Seriously? Is that even a question?
                        </p>

                        <p>
                            Look around. The world is crumbling. Every institution you were
                            told to trust is either corrupt, complicit, or conveniently
                            looking the other way. The systems that are supposed to protect
                            regular people? They protect the people{" "}
                            <em className="text-zinc-300">running</em> the systems.
                        </p>

                        <p>
                            And while all of that is happening — while the walls are closing
                            in from every direction — people like us are out here trying to do the{" "}
                            <strong className="text-zinc-200">right thing</strong>. Playing by
                            the rules. Filing taxes. Setting up accounts the legal way. Running
                            legitimate businesses. Doing everything by the book.
                        </p>

                        <p className="text-zinc-300 font-medium">
                            And on <em>top</em> of all that?
                        </p>

                        <div className="relative py-6">
                            <div className="bg-zinc-950/80 border border-red-900/30 rounded-xl p-5 md:p-6 text-center">
                                <p className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                                    They&apos;re fucking with our{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-orange-500">
                                        MONEY.
                                    </span>
                                </p>
                                <p className="text-zinc-500 text-xs font-mono mt-3 uppercase tracking-widest">
                                    And that&apos;s where it gets real.
                                </p>
                            </div>
                        </div>

                        <p>
                            Freeze an account for months with no explanation. Take fees for
                            services you revoked. Hold transfers hostage behind &ldquo;compliance
                            reviews&rdquo; that never end. Force people into a chatbot maze
                            designed to make them give up.
                        </p>

                        <p>
                            When you mess with someone&apos;s livelihood — their rent money, their
                            business payroll, their ability to{" "}
                            <strong className="text-zinc-200">eat</strong> — you&apos;re not just
                            providing bad service. You&apos;re making a decision that has{" "}
                            <strong className="text-red-400">real consequences</strong> on real
                            human lives. And then you hide behind a Terms of Service that{" "}
                            <em>you</em> wrote.
                        </p>

                        <p className="text-zinc-300 font-medium text-base md:text-lg">
                            So yeah. I&apos;m taking this seriously.
                        </p>

                        <p>
                            Because nobody else is. Because the regulators are underfunded and
                            overwhelmed. Because the media only cares when the dollar amount
                            has enough zeroes. Because tech companies have figured out that the
                            cost of screwing people over is{" "}
                            <strong className="text-zinc-200">less</strong> than the cost of
                            doing the right thing — so they just budget for the complaints
                            and keep going.
                        </p>

                        <p className="text-white font-bold text-base md:text-lg">
                            When you fuck with people&apos;s money, shit gets real.
                        </p>

                        <p className="text-zinc-500 text-xs md:text-sm">
                            This site is the &ldquo;real.&rdquo;
                        </p>
                    </div>

                    {/* Section Disclaimer */}
                    <div className="mt-6 pt-5 border-t border-red-900/20">
                        <p className="text-[10px] font-mono text-zinc-700 leading-relaxed text-center">
                            🔒 DISCLAIMER: Nothing on this page is a threat, an incitement, or a call for
                            violence of any kind against any person or institution. This is consumer advocacy.
                            We&apos;re talking about filing complaints, submitting regulatory reports, building class actions,
                            and making public records. That&apos;s it. If you read this and thought otherwise,
                            re-read it. Slowly. Then maybe read the First Amendment while you&apos;re at it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why This Site Exists */}
            <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Globe className="w-5 h-5 text-blue-400" />
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                            Why This Site Exists
                        </h2>
                    </div>

                    <div className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                        <p>
                            <strong className="text-zinc-200">Fintech Fuckery</strong> exists
                            because the people getting screwed over by these platforms
                            don&apos;t have a centralized place to document what happened,
                            build a public record, and show that they&apos;re not alone.
                        </p>
                        <p>
                            This is not a law firm. This is not a class-action recruitment
                            site. This is a{" "}
                            <strong className="text-zinc-200">
                                public, not-for-profit archive
                            </strong>{" "}
                            of real experiences from real people — with timelines, receipts,
                            and regulatory filings — so that when the next person gets
                            burned, they have proof that it&apos;s a pattern, not a fluke.
                        </p>
                        <p className="text-zinc-500 italic">
                            Because if it happened to you, it happened to hundreds of others.
                            And the receipts matter.
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-800/50 flex flex-col sm:flex-row gap-3">
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
                            Submit Your Story
                        </Link>
                    </div>
                </div>
            </section>


        </main>
    );
}
