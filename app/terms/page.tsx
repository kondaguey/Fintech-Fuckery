import Link from "next/link";

export const metadata = {
    title: "Terms of Use — Fintech Fuckery",
    description: "Terms governing your use of fintechfuckery.org.",
};

export default function TermsPage() {
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
                    Terms of Use
                </h1>
                <p className="text-xs font-mono text-zinc-600 mb-10">
                    Last Updated: February 15, 2026
                </p>

                <div className="prose-invert space-y-8 text-sm text-zinc-400 leading-relaxed">
                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing fintechfuckery.org (&ldquo;the Site&rdquo;), you agree to be
                            bound by these Terms of Use. If you do not agree, please do not
                            use the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            2. Purpose
                        </h2>
                        <p>
                            This Site is a consumer advocacy platform operated by DnDL
                            Creative LLC. It serves as a public record of personal
                            experiences with financial technology companies. The Site is
                            operated on a{" "}
                            <strong className="text-zinc-200">
                                not-for-profit, non-commercial basis
                            </strong>
                            . There are no advertisements, no affiliate links, and no revenue
                            generation of any kind.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            3. User Submissions
                        </h2>
                        <p>
                            By submitting a complaint or story through our form, you
                            represent that your account is truthful and based on your actual
                            experience. You grant the Site operator a non-exclusive,
                            royalty-free license to publish an anonymized version of your
                            submission on this Site for advocacy purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            4. No Legal Advice
                        </h2>
                        <p>
                            Nothing on this Site constitutes legal advice. The legal analysis
                            presented reflects personal interpretations and publicly
                            available information. If you are facing a dispute with a
                            financial institution, consult a licensed attorney in your
                            jurisdiction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            5. Fair Use &amp; Commentary
                        </h2>
                        <p>
                            Content on this Site, including quoted correspondence, is
                            published under the fair use doctrine for purposes of criticism,
                            commentary, and consumer protection reporting. All quoted
                            materials are attributed to their source and used in a
                            transformative context.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            6. Disclaimer of Liability
                        </h2>
                        <p>
                            This Site is provided &ldquo;as is&rdquo; without warranties of any kind.
                            the Site operator is not liable for any damages arising from your
                            use of the Site or reliance on its content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            7. Governing Law
                        </h2>
                        <p>
                            These Terms are governed by the laws of the State of New York,
                            United States of America.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            8. Contact
                        </h2>
                        <p>
                            For questions about these Terms:{" "}
                            <strong className="text-zinc-200">legal@fintechfuckery.org</strong>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
