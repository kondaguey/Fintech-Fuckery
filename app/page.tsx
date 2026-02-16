import BattleLog from "./components/BattleLog";
import CaseBreakdown from "./components/CaseBreakdown";
import ComplaintCTA from "./components/ComplaintCTA";
import CookieConsent from "./components/CookieConsent";
import {
  ExternalLink,
  Shield,
  Users,
  HeartOff,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] font-sans">
      {/* Not-For-Profit Banner */}
      <div className="bg-zinc-900/50 border-b border-zinc-800/50 px-4 py-2 text-center">
        <p className="text-[11px] text-zinc-500 flex items-center justify-center gap-2 font-mono">
          <HeartOff className="w-3 h-3 text-zinc-600" />
          NOT FOR MONEY • NOT FOR PROFIT • NO MARKETING • NO ADS • CONSUMER
          ADVOCACY ONLY
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-6 py-3">
          <a
            href="/background"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-300 uppercase tracking-wider transition-colors"
          >
            Background
          </a>
          <span className="w-px h-3 bg-zinc-800" />
          <a
            href="/#battle-log"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-300 uppercase tracking-wider transition-colors"
          >
            The Complaints
          </a>
          <span className="w-px h-3 bg-zinc-800" />
          <a
            href="/language"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-300 uppercase tracking-wider transition-colors"
          >
            Our Language
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto pt-16 md:pt-24 pb-8 px-6 text-center">
        <div className="inline-block mb-6 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          Est. Feb 2026 • Consumer Advocacy
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-white mb-6 uppercase leading-[0.85]">
          Fintech{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-600">
            Fuckery
          </span>
          <span className="text-xl md:text-3xl text-zinc-700 align-top tracking-normal font-medium">
            .org
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-bold text-zinc-300 max-w-2xl mx-auto tracking-tight leading-snug">
          Have You Been{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Fucked Over
          </span>{" "}
          By Your Online Bank?
        </h2>

        <h3 className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed mt-4">
          Documenting corporate misconduct, one receipt at a time.
        </h3>

        <div className="flex items-center justify-center gap-6 mt-8 text-zinc-600 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Consumer Advocacy</span>
          </div>
          <div className="w-px h-4 bg-zinc-800" />
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>You Are Not Alone</span>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* Battle Log */}
      <section id="battle-log" className="max-w-3xl mx-auto py-12 md:py-16 px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3 tracking-tight">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Battle Log
          </h2>
        </div>

        <BattleLog />
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* The Case Section */}
      <section className="max-w-3xl mx-auto py-12 md:py-16 px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3 tracking-tight">
            <ScaleIcon className="w-5 h-5 text-red-500" />
            The Case
          </h2>
          <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
            Legal Analysis
          </span>
        </div>

        <CaseBreakdown />
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* CTA Section */}
      <section id="submit-complaint" className="max-w-2xl mx-auto py-16 md:py-20 px-4 md:px-6">
        <ComplaintCTA />
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-8">
        <div className="max-w-3xl mx-auto py-12 px-6 text-center space-y-6">
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xl mx-auto">
            This site documents personal experiences with financial technology
            companies and is maintained as a public record for consumer
            protection purposes. Not for profit. Not affiliated with any
            financial institution.
          </p>

          {/* Regulatory Agencies */}
          <div className="text-left max-w-2xl mx-auto">
            <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest text-center mb-4">
              Where to File Complaints
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  name: "CFPB",
                  full: "Consumer Financial Protection Bureau",
                  url: "https://www.consumerfinance.gov/complaint/",
                  desc: "Federal agency overseeing consumer financial products. Primary avenue for banking and fintech complaints.",
                },
                {
                  name: "NYDFS",
                  full: "NY Dept. of Financial Services",
                  url: "https://www.dfs.ny.gov/complaint",
                  desc: "New York state regulator for financial services. Oversees money transmitters licensed in NY.",
                },
                {
                  name: "OCC",
                  full: "Office of the Comptroller",
                  url: "https://www.helpwithmybank.gov/",
                  desc: "Federal regulator for national banks and thrifts. Handles complaints about bank practices.",
                },
                {
                  name: "FTC",
                  full: "Federal Trade Commission",
                  url: "https://reportfraud.ftc.gov/",
                  desc: "Investigates deceptive business practices, fraud, and unfair consumer treatment.",
                },
                {
                  name: "FBI IC3",
                  full: "Internet Crime Complaint Center",
                  url: "https://www.ic3.gov/",
                  desc: "FBI division for internet-based financial crime. For suspected fraud or theft.",
                },
                {
                  name: "BBB",
                  full: "Better Business Bureau",
                  url: "https://www.bbb.org/file-a-complaint",
                  desc: "Consumer mediation organization. Not government, but companies often respond to BBB complaints.",
                },
                {
                  name: "State AG",
                  full: "State Attorney General",
                  url: "https://www.naag.org/find-my-ag/",
                  desc: "Your state's top legal officer. Can investigate companies operating in your state.",
                },
                {
                  name: "FDIC",
                  full: "Federal Deposit Insurance Corp.",
                  url: "https://www.fdic.gov/consumer-resource-center",
                  desc: "Insures deposits and supervises banks. File here if your insured bank fails you.",
                },
                {
                  name: "DE OSBC",
                  full: "Delaware Office of the State Bank Commissioner",
                  url: "https://banking.delaware.gov/",
                  desc: "Delaware banking regulator. Many fintechs and LLCs are incorporated in DE — file here if they are.",
                },
                {
                  name: "FinCEN",
                  full: "Financial Crimes Enforcement Network",
                  url: "https://www.fincen.gov/contact",
                  desc: "U.S. Treasury bureau overseeing money transmission and anti-money-laundering. Fintechs must register here as MSBs.",
                },
              ].map((agency) => (
                <a
                  key={agency.name}
                  href={agency.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                      {agency.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
                  </div>
                  <p className="text-[11px] text-zinc-400 font-medium leading-tight">
                    {agency.full}
                  </p>
                  <p className="text-[10px] text-zinc-600 mt-1 leading-relaxed">
                    {agency.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-mono text-zinc-700 pt-2">
            <a
              href="/background"
              className="hover:text-zinc-500 transition-colors"
            >
              Background
            </a>
            <span>•</span>
            <a
              href="/language"
              className="hover:text-zinc-500 transition-colors"
            >
              Our Language
            </a>
            <span>•</span>
            <a
              href="/privacy"
              className="hover:text-zinc-500 transition-colors"
            >
              Privacy
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-zinc-500 transition-colors">
              Terms
            </a>
            <span>•</span>
            <a
              href="/disclaimer"
              className="hover:text-zinc-500 transition-colors"
            >
              Disclaimer
            </a>
          </div>

          <p className="text-zinc-700 text-xs font-mono pt-2">
            © {new Date().getFullYear()} fintechfuckery.org. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </main>
  );
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}
