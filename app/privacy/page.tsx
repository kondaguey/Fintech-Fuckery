import Link from "next/link";

export const metadata = {
    title: "Privacy Policy — Fintech Fuckery",
    description: "How we handle your data. Spoiler: we don't sell it.",
};

export default function PrivacyPage() {
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
                    Privacy Policy
                </h1>
                <p className="text-xs font-mono text-zinc-600 mb-10">
                    Last Updated: February 15, 2026
                </p>

                <div className="prose-invert space-y-8 text-sm text-zinc-400 leading-relaxed">
                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            1. Who We Are
                        </h2>
                        <p>
                            Fintech Fuckery (&ldquo;the Site&rdquo;) is operated by a
                            U.S.-based limited liability company. This Site exists solely for
                            consumer advocacy and public documentation purposes. It is{" "}
                            <strong className="text-zinc-200">not operated for profit</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            2. Data We Collect
                        </h2>
                        <p>We collect only what you voluntarily provide:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>
                                <strong className="text-zinc-300">Complaint submissions:</strong>{" "}
                                Company name, description of your experience, and optionally
                                your email address.
                            </li>
                            <li>
                                <strong className="text-zinc-300">Cookie preferences:</strong>{" "}
                                Whether you accepted or declined our cookie banner (stored
                                locally on your device only).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            3. What We Do NOT Do
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>We do NOT sell, rent, or trade your personal information.</li>
                            <li>We do NOT run advertisements.</li>
                            <li>We do NOT use tracking pixels, analytics trackers, or third-party cookies.</li>
                            <li>We do NOT share your data with any third party for marketing purposes.</li>
                            <li>We do NOT monetize this site in any way.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            4. How We Use Your Data
                        </h2>
                        <p>
                            If you submit a complaint, we may publish an{" "}
                            <strong className="text-zinc-300">anonymized version</strong> of
                            your story on this site to document patterns of corporate
                            misconduct. Your email, if provided, will only be used to send
                            updates about collective advocacy efforts. You can request
                            deletion at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            5. Cookies
                        </h2>
                        <p>
                            This site uses only one cookie: a localStorage entry that
                            remembers whether you accepted or declined the cookie banner.
                            That&apos;s it. No tracking. No fingerprinting. Nothing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            6. Your Rights
                        </h2>
                        <p>
                            You have the right to request access to, correction of, or
                            deletion of any personal data we hold. Contact us at the email
                            below and we will comply within 30 days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-zinc-200 mb-3">
                            7. Contact
                        </h2>
                        <p>
                            For any privacy-related inquiries:{" "}
                            <strong className="text-zinc-200">privacy@fintechfuckery.org</strong>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
