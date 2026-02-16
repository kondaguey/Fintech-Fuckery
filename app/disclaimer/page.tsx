import Link from "next/link";

export const metadata = {
    title: "Disclaimer — Fintech Fuckery",
    description:
        "Legal disclaimer for fintechfuckery.org. This site is consumer advocacy, not legal counsel.",
};

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-[#09090b] font-sans">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <Link
                    href="/"
                    className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors mb-8 inline-block"
                >
                    ← Back to Home
                </Link>

                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                    Disclaimer
                </h1>
                <p className="text-xs font-mono text-zinc-600 mb-10">
                    Last Updated: February 15, 2026
                </p>

                <div className="prose-invert space-y-8 text-sm text-zinc-400 leading-relaxed">
                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            General Disclaimer
                        </h2>
                        <p>
                            The information provided on fintechfuckery.org is for general
                            informational and consumer advocacy purposes only. All content
                            reflects the personal experiences, opinions, and publicly
                            available information compiled by the Site operator and its
                            contributors.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            Not Legal Advice
                        </h2>
                        <p>
                            Nothing on this website should be construed as legal advice. The
                            legal citations, regulatory references, and case analysis
                            presented are for educational and commentary purposes. If you
                            need legal advice, retain a licensed attorney admitted to practice
                            in your jurisdiction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            No Affiliation
                        </h2>
                        <p>
                            This website is not affiliated with, endorsed by, or sponsored by
                            any financial institution mentioned herein, including but not
                            limited to Wise (TransferWise), Wise Payments Limited, or Wise US
                            Inc. All trademarks belong to their respective owners.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            Accuracy
                        </h2>
                        <p>
                            While we strive to ensure the accuracy of all information
                            presented, the Site operator makes no warranties or
                            representations regarding the completeness, accuracy, or
                            reliability of any content. Quoted correspondence is reproduced
                            as-received from original sources.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            Not For Profit
                        </h2>
                        <p>
                            This site is not operated for commercial gain. There are no
                            advertisements, affiliate links, sponsored content, or revenue
                            streams of any kind. This is a public service provided at no cost
                            to the consumer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            Contact
                        </h2>
                        <p>
                            For concerns about content published on this Site:{" "}
                            <strong className="text-zinc-200">legal@fintechfuckery.org</strong>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
