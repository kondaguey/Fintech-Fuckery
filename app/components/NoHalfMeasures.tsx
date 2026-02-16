"use client";

import { Flame } from "lucide-react";
import Image from "next/image";

export default function NoHalfMeasures() {
    return (
        <div className="space-y-8">
            {/* Mike Ehrmantraut — The Face */}
            <div className="relative max-w-md mx-auto">
                <div className="relative rounded-xl overflow-hidden border border-zinc-800/60 bg-zinc-950/50">
                    <Image
                        src="/images/mike-fintech-fuckery.png"
                        alt="Mike Ehrmantraut staring you down, contemplating whether your fintech deserves a half measure or the full treatment"
                        width={800}
                        height={450}
                        className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                        <p className="text-zinc-400 text-xs font-mono text-center">
                            The face of a man who has had it with your &ldquo;processing delays.&rdquo;
                        </p>
                    </div>
                </div>
            </div>

            {/* The Quote */}
            <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-orange-600 to-red-900 rounded-full" />
                <blockquote className="pl-6 md:pl-8">
                    <p className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                        &ldquo;No more half measures,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                            Walter.
                        </span>
                        &rdquo;
                    </p>
                    <cite className="block mt-3 text-sm font-mono text-zinc-600 not-italic tracking-wider">
                        — Mike Ehrmantraut, <span className="text-zinc-500">Breaking Bad</span>
                    </cite>
                </blockquote>
            </div>

            {/* YouTube Link */}
            <div className="flex justify-center">
                <a
                    href="https://www.youtube.com/shorts/M8FDt6uWrWQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 px-5 py-3 bg-zinc-950 border border-zinc-800/60 rounded-xl hover:border-red-900/50 hover:bg-zinc-900/80 transition-all duration-300"
                >
                    <span className="text-xl group-hover:scale-110 transition-transform">▶</span>
                    <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        Watch the scene
                    </span>
                </a>
            </div>

            {/* The Manifesto */}
            <div className="space-y-5 text-sm md:text-base text-zinc-400 leading-relaxed">
                <p>
                    Mike told that story about a domestic abuser he let walk — twice.
                    Gave the guy warnings. Half measures. The guy went home and killed his wife.
                    Mike never made that mistake again.
                </p>

                <p className="text-zinc-300 font-medium">
                    That&apos;s what this is about.
                </p>

                <p>
                    Filing one complaint and hoping for the best? That&apos;s a half measure.
                    Tweeting about it and moving on? Half measure.
                    Accepting the runaround, the canned apology, the
                    &ldquo;we&apos;re sorry for the inconvenience&rdquo; email that took 30 seconds to generate
                    after they spent months dodging you? <span className="text-red-400 font-semibold">Half. Measure.</span>
                </p>

                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                    </div>
                    <div className="relative flex justify-center">
                        <Flame className="w-5 h-5 text-red-600 bg-[#09090b] px-1" />
                    </div>
                </div>

                <p>
                    This site exists because I tried every proper channel first.
                    I filed with the CFPB. I filed with NYDFS. I wrote to the BBB.
                    I documented everything meticulously.
                    I gave them every opportunity to make it right.
                </p>

                <p>
                    They didn&apos;t.
                </p>

                <p>
                    So now there&apos;s a website. Now there&apos;s a public record.
                    Now every complaint, every timeline, every receipt lives somewhere
                    that search engines can find, that journalists can reference,
                    that regulators can point to.
                </p>

                <p className="text-white font-bold text-base md:text-lg">
                    No more half measures.
                </p>

                <p className="text-zinc-500 text-xs md:text-sm">
                    If your fintech company fucked you over — don&apos;t tweet and move on.
                    Don&apos;t file one complaint and pray. Build the paper trail. Tell the story.
                    Put it on the record. That&apos;s what this place is for.
                </p>
            </div>
        </div>
    );
}
