"use client";

import { ExternalLink, ShieldCheck, Scale, Gavel, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cases = [
    {
        name: "Cohen v. California (1971)",
        court: "U.S. Supreme Court",
        summary:
            'Paul Robert Cohen wore a jacket that said "Fuck the Draft" into a courthouse. The Supreme Court ruled it was protected speech under the First and Fourteenth Amendments.',
        quote:
            "One man's vulgarity is another's lyric.",
        justice: "Justice John Marshall Harlan II",
        url: "https://supreme.justia.com/cases/federal/us/403/15/",
        icon: Gavel,
    },
    {
        name: "Matal v. Tam (2017)",
        court: "U.S. Supreme Court",
        summary:
            'The government tried to deny a trademark for "The Slants" as offensive. The Supreme Court struck down the restriction, ruling that the government cannot suppress speech it finds distasteful.',
        quote:
            "Speech may not be banned on the ground that it expresses ideas that offend.",
        justice: "Justice Samuel Alito",
        url: "https://supreme.justia.com/cases/federal/us/582/15-1293/",
        icon: Scale,
    },
    {
        name: "Iancu v. Brunetti (2019)",
        court: "U.S. Supreme Court",
        summary:
            'Erik Brunetti tried to trademark "FUCT" for his clothing brand. The PTO refused. The Supreme Court ruled 6-3 that the ban on "immoral or scandalous" trademarks violated the First Amendment.',
        quote:
            "There are a great many immoral and scandalous ideas in the world, and the Lanham Act covers them all.",
        justice: "Justice Elena Kagan",
        url: "https://supreme.justia.com/cases/federal/us/588/18-302/",
        icon: BookOpen,
    },
    {
        name: "Snyder v. Phelps (2011)",
        court: "U.S. Supreme Court",
        summary:
            "Westboro Baptist Church protested a military funeral with deeply offensive signs. The Supreme Court ruled 8-1 that even the most outrageous speech on public issues is protected.",
        quote:
            "Speech is powerful. It can stir people to action, move them to tears of both joy and sorrow, and — as it did here — inflict great pain. On the facts before us, we cannot react to that pain by punishing the speaker.",
        justice: "Chief Justice John Roberts",
        url: "https://supreme.justia.com/cases/federal/us/562/443/",
        icon: ShieldCheck,
    },
    {
        name: "Hustler Magazine v. Falwell (1988)",
        court: "U.S. Supreme Court",
        summary:
            "Larry Flynt published a crude parody of Jerry Falwell. The Court unanimously held that public figures cannot recover damages for intentional infliction of emotional distress from publications that could not reasonably be taken as stating facts.",
        quote:
            "At the heart of the First Amendment is the recognition of the fundamental importance of the free flow of ideas and opinions on matters of public interest and concern.",
        justice: "Chief Justice William Rehnquist",
        url: "https://supreme.justia.com/cases/federal/us/485/46/",
        icon: Gavel,
    },
    {
        name: "Texas v. Johnson (1989)",
        court: "U.S. Supreme Court",
        summary:
            "Gregory Lee Johnson burned an American flag at a political protest. Texas convicted him. The Supreme Court reversed it 5-4, ruling that even deeply offensive symbolic expression is protected speech.",
        quote:
            "If there is a bedrock principle underlying the First Amendment, it is that the government may not prohibit the expression of an idea simply because society finds the idea itself disagreeable or offensive.",
        justice: "Justice William Brennan",
        url: "https://supreme.justia.com/cases/federal/us/491/397/",
        icon: Scale,
    },
    {
        name: "Reno v. ACLU (1997)",
        court: "U.S. Supreme Court",
        summary:
            "Congress passed the Communications Decency Act to censor \"indecent\" and \"offensive\" speech on the internet. The Supreme Court struck it down unanimously, ruling that online speech gets full First Amendment protection.",
        quote:
            "The interest in encouraging freedom of expression in a democratic society outweighs any theoretical but unproven benefit of censorship.",
        justice: "Justice John Paul Stevens",
        url: "https://supreme.justia.com/cases/federal/us/521/844/",
        icon: ShieldCheck,
    },
];

export default function LanguagePage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
                <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xs font-mono text-red-500 uppercase tracking-[0.3em] mb-6">
                            A Public Service Announcement
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                            Don&apos;t Like Our Language?
                            <br />

                        </h1>
                        <p className="text-4xl md:text-6xl font-black tracking-tight mt-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Then Fuck You, Jackass.
                        </p>
                        <p className="text-zinc-500 text-sm md:text-base mt-8 max-w-xl mx-auto leading-relaxed">
                            Just kidding. Kind of. But seriously — every word on this site is
                            protected by the{" "}
                            <strong className="text-zinc-300">First Amendment</strong> of the
                            United States Constitution, as interpreted by{" "}
                            <strong className="text-zinc-300">
                                the Supreme Court of the United States
                            </strong>
                            . Repeatedly. Unanimously, even.
                        </p>
                        <p className="text-zinc-600 text-xs font-mono mt-4">
                            Here are the receipts. (We love receipts.)
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The First Amendment */}
            <section className="max-w-3xl mx-auto px-6 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-amber-950/20 to-zinc-900/50 border border-amber-900/20 rounded-2xl p-6 md:p-8 text-center"
                >
                    <p className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-4">
                        Amendment I — Ratified December 15, 1791
                    </p>
                    <blockquote className="text-amber-200/80 text-base md:text-lg italic leading-relaxed">
                        &ldquo;Congress shall make no law respecting an establishment of
                        religion, or prohibiting the free exercise thereof; or abridging{" "}
                        <strong className="text-amber-100 not-italic">
                            the freedom of speech
                        </strong>
                        , or of the press; or the right of the people peaceably to
                        assemble, and to petition the Government for a redress of
                        grievances.&rdquo;
                    </blockquote>
                    <p className="text-amber-700 text-xs font-mono mt-4">
                        — The Constitution of the United States
                    </p>
                </motion.div>
            </section>

            {/* Cases */}
            <section className="max-w-3xl mx-auto px-6 pb-16">
                <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] text-center mb-8">
                    Supreme Court Precedent — a.k.a. &ldquo;We Did the
                    Homework&rdquo;
                </h2>

                <div className="space-y-4">
                    {cases.map((c, index) => {
                        const CaseIcon = c.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-5 md:p-6 hover:border-zinc-700/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-zinc-800/50 rounded-xl p-2.5 shrink-0">
                                        <CaseIcon className="w-5 h-5 text-zinc-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <h3 className="text-base font-bold text-zinc-100">
                                                {c.name}
                                            </h3>
                                            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider bg-zinc-900 px-2 py-1 rounded-md border border-zinc-800/50 self-start">
                                                {c.court}
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                                            {c.summary}
                                        </p>
                                        <blockquote className="mt-3 pl-4 border-l-2 border-zinc-700 text-sm text-zinc-500 italic">
                                            &ldquo;{c.quote}&rdquo;
                                            <span className="block text-xs text-zinc-600 mt-1 not-italic">
                                                — {c.justice}
                                            </span>
                                        </blockquote>
                                        <a
                                            href={c.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 text-xs font-mono mt-3 transition-colors"
                                        >
                                            Read Full Opinion{" "}
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* TL;DR */}
            <section className="max-w-3xl mx-auto px-6 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 md:p-8 text-center"
                >
                    <h3 className="text-xs font-mono text-red-500 uppercase tracking-widest mb-4">
                        TL;DR
                    </h3>
                    <p className="text-lg md:text-xl font-bold text-zinc-200 leading-relaxed">
                        Profanity is protected speech. The Supreme Court has said so
                        at least 5 times. Our opinions are our opinions. Our facts are
                        sourced and cited. And our language?
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-red-400 mt-4">
                        Constitutionally protected, baby.
                    </p>
                    <p className="text-zinc-600 text-xs mt-6">
                        If you&apos;re still offended, we recommend the{" "}
                        <a
                            href="https://www.archives.gov/founding-docs/constitution-transcript"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 underline hover:text-zinc-400 transition-colors"
                        >
                            full text of the Constitution
                        </a>
                        . It&apos;s a good read.
                    </p>
                </motion.div>
            </section>

            {/* Political Disclaimer — Scent of a Woman Style */}
            <section className="max-w-3xl mx-auto px-6 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 md:p-8 text-center overflow-hidden"
                >
                    <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
                        One More Thing
                    </h3>
                    <p className="text-base md:text-lg font-bold text-zinc-300 leading-relaxed">
                        And if you think quoting the Constitution makes us sound
                        like conservatives, Trumpers, right-wingers, or whatever
                        label you want to slap on us, then{" "}
                        <span className="text-red-400">fuck you, jackass</span>.
                    </p>

                    {/* The Meme */}
                    <div className="my-8 relative">
                        <a
                            href="https://www.youtube.com/watch?v=Sfaj8EPz9lM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-block relative"
                        >
                            <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-6 md:p-8 max-w-lg mx-auto group-hover:border-red-900/50 transition-all duration-300">
                                <p className="text-zinc-500 text-sm italic mb-4">
                                    &ldquo;And Harry, Jimmy, Trent,
                                    wherever you are out there...&rdquo;
                                </p>
                                <p className="text-6xl md:text-8xl mb-3 animate-bounce">
                                    🖕
                                </p>
                                <p className="text-3xl md:text-5xl font-black bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent leading-tight">
                                    ffuUHCK
                                    <br />
                                    YOU TOO.
                                </p>
                                <p className="text-zinc-600 text-xs font-mono mt-4">
                                    — Lt. Col. Frank Slade, Scent of a Woman (1992)
                                </p>
                                <p className="text-zinc-700 text-[10px] font-mono mt-2 group-hover:text-red-500 transition-colors flex items-center justify-center gap-1">
                                    ▶ Watch the speech <ExternalLink className="w-2.5 h-2.5" />
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* The Pacino Image — Scent of a Woman Courtroom Scene */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="my-8 relative max-w-lg mx-auto"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-zinc-700/50 group">
                            <Image
                                src="/images/scent-of-a-women-fintech-fuckery.png"
                                alt="Al Pacino as Lt. Col. Frank Slade delivering the courtroom speech in Scent of a Woman"
                                width={800}
                                height={450}
                                className="w-full h-auto"
                            />
                            {/* Meme Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                                <p className="text-white text-center font-black text-xs md:text-sm uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                                    style={{ textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}>
                                    When NPCs think your appreciation of the First Amendment means you&apos;re conservative.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    <div className="space-y-3 text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
                        <p>
                            We don&apos;t do political parties.{" "}
                            <strong className="text-zinc-300">Any of them.</strong>{" "}
                            Left, right, center. Different jerseys, same owners.
                        </p>
                        <p>
                            The same corporations screwing consumers are the ones
                            funding both sides. They lobby to gut the rules, then
                            operate in the gaps those missing rules create. That&apos;s
                            not a bug. That's the business model.
                        </p>
                        <p className="text-zinc-400">
                            Politics is a{" "}
                            <strong className="text-zinc-200">control paradigm</strong>.
                            Keep people fighting each other so nobody looks up. And while
                            everyone&apos;s distracted, corporate accountability just
                            disappears.
                        </p>
                        <p className="text-zinc-400">
                            The Constitution belongs to{" "}
                            <strong className="text-zinc-200">the people</strong>.
                            Not to a party. Not to a corporation. We quote it because
                            it&apos;s the only thing that actually protects us from all of them.
                        </p>
                    </div>
                    <p className="text-zinc-700 text-xs font-mono mt-6">
                        This site is for consumers.
                    </p>
                </motion.div>
            </section>


        </main>
    );
}
