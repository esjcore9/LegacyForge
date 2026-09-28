import React, { useState } from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S02HomeIngestLink: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [url, setUrl] = useState('http://www.riverbendfund.org/index.htm');

  return (
    <div className="flex flex-col w-full relative">
      {/* Faint radial caramel glow overlay in top-left */}
      <div className="absolute -top-12 -left-20 w-[540px] h-[540px] rounded-full bg-[#C69C72]/10 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1240px] mx-auto px-6 py-6 flex flex-col">
        {/* 1. Centered Hero Header */}
        <header className="text-center max-w-3xl mx-auto mt-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[11px] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
            <span>ARCHIVAL RESTORATION SUITE</span>
          </div>
          <h1 className="font-['Fraunces'] text-[52px] leading-[1.1] text-[#3E322A] tracking-tight mb-3">
            Bring old things back to life.
          </h1>
          <p className="font-['Inter'] text-[16px] leading-[26px] text-[#7D6D5F] max-w-xl mx-auto">
            Drop in a handwritten card, an old website or legacy code. Get a modern, usable version back.
          </p>
        </header>

        {/* 2. Ingest Card (Width 760px) */}
        <section className="w-full max-w-[760px] mx-auto rounded-[14px] bg-[#FBF8F3] shadow-[0_1px_2px_rgba(62,50,42,0.05),0_8px_24px_rgba(62,50,42,0.07)] p-6 mb-12">
          {/* Segmented Control Pill Container */}
          <div className="bg-[#EDE5D8] p-1 rounded-full flex max-w-md mx-auto mb-6">
            <a
              className="flex-1 text-center rounded-full text-[#7D6D5F] hover:text-[#3E322A] px-5 py-1.5 font-['Inter'] text-[12px] font-medium transition-all cursor-pointer"
              data-path="s01-home"
              href="#s01-home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s01-home');
              }}
            >
              Drop Image
            </a>
            <a
              className="flex-1 text-center rounded-full bg-[#C69C72] text-white px-5 py-1.5 font-['Inter'] text-[12px] font-semibold shadow-sm transition-all cursor-pointer"
              data-path="s02-link-view"
              href="#s02-link-view"
              onClick={(e) => e.preventDefault()}
            >
              Ingest Link
            </a>
            <a
              className="flex-1 text-center rounded-full text-[#7D6D5F] hover:text-[#3E322A] px-5 py-1.5 font-['Inter'] text-[12px] font-medium transition-all cursor-pointer"
              data-path="s03-port-code"
              href="#s03-port-code"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s03-port-code');
              }}
            >
              Port Code
            </a>
          </div>

          {/* Link Input Body Container */}
          <div className="p-8 bg-[#EDE5D8]/40 rounded-xl mb-6 flex flex-col gap-3">
            <label
              className="font-['Inter'] text-[12px] font-medium text-[#3E322A] flex items-center justify-between"
              htmlFor="legacy-url"
            >
              <span>Website URL to modernize</span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase tracking-wider">
                Archival Snapshot Target
              </span>
            </label>

            {/* Input Row */}
            <div className="flex items-center gap-3 w-full">
              <div className="flex-1 flex items-center bg-[#FBF8F3] rounded-lg px-3.5 py-2.5 shadow-inner">
                <span className="material-symbols-outlined text-[#7D6D5F] text-[18px] mr-2.5 shrink-0">
                  language
                </span>
                <input
                  className="w-full bg-transparent font-['JetBrains_Mono'] text-[11px] text-[#3E322A] tracking-normal focus:outline-none cursor-text selection:bg-[#C69C72]/20"
                  id="legacy-url"
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]/70 px-2 py-0.5 rounded bg-[#EDE5D8] shrink-0">
                  HTTP/1.0
                </span>
              </div>
              <a
                className="bg-[#6f4e37] text-white hover:bg-[#5C402D] rounded-[10px] px-6 py-2.5 font-['Inter'] text-[12px] font-semibold shadow-sm transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
                data-path="s07-old-website-view"
                href="#s07-old-website-view"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('s07-old-web-desktop');
                }}
              >
                <span>Revive</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>

            <p className="font-['Caveat'] text-[22px] leading-7 text-[#7D6D5F] italic flex items-center gap-1.5 mt-0.5">
              <span className="material-symbols-outlined text-[14px]">auto_fix_high</span>
              Crawls tables, inline styling, legacy markup, and assets automatically.
            </p>
          </div>

          {/* Ingest Card Footer */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2 font-['Caveat'] text-[22px] leading-7 text-[#7D6D5F] italic">
              <span className="inline-block w-2 h-2 rounded-full bg-[#A3AD8F]" />
              <span>Demo mode: sample data, no network needed</span>
            </div>
            <a
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-[#EDE5D8]/60 hover:bg-[#EDE5D8] font-['Inter'] text-[12px] text-[#3E322A] font-medium transition-colors cursor-pointer"
              data-path="s07-old-website-view"
              href="#s07-old-website-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s07-old-web-desktop');
              }}
            >
              <span className="material-symbols-outlined text-[16px] text-[#C69C72]">
                auto_awesome
              </span>
              <span>Load Sample Artifact</span>
            </a>
          </div>
        </section>

        {/* 3. "Or start from a sample" Section */}
        <section className="w-full max-w-[1040px] mx-auto mb-14">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#7D6D5F]">
                Preset Curations
              </span>
              <span className="text-[#7D6D5F]">•</span>
              <h2 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                Or start from a sample
              </h2>
            </div>
            <span className="font-['Inter'] text-[12px] text-[#7D6D5F]">
              Tested archival baselines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Sample Tile 1: Recipe Card */}
            <a
              className="group bg-[#f8f3eb] rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-48 relative overflow-hidden cursor-pointer"
              data-path="s04-handwriting-view"
              href="#s04-handwriting-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s05-shopping-list');
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C69C72]/20 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#C69C72]/20 font-['JetBrains_Mono'] text-[10px] text-[#553722] font-medium">
                    <span className="material-symbols-outlined text-[14px]">edit_note</span>
                    HANDWRITING
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                    1964 Archival
                  </span>
                </div>
                <h3 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A] group-hover:text-[#553722] transition-colors">
                  Mamie's Apple Tart Card
                </h3>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-1.5 line-clamp-2">
                  Cursive fountain pen on index card, butter-stained margins, calibrated conversions.
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 text-[#7D6D5F] group-hover:text-[#553722] transition-colors">
                <span className="font-['JetBrains_Mono'] text-[11px]">Inspect scan &amp; OCR</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>

            {/* Sample Tile 2: Charity Website (Active focus) */}
            <a
              className="group bg-[#FBF8F3] rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-48 relative overflow-hidden cursor-pointer border border-[#DDD1BF]"
              data-path="s07-old-website-view"
              href="#s07-old-website-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s07-old-web-desktop');
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#9FB0B8]/20 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#9FB0B8]/20 font-['JetBrains_Mono'] text-[10px] text-[#3E322A] font-medium">
                    <span className="material-symbols-outlined text-[14px]">language</span>
                    WEB 1.0 PORT
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#C69C72] font-semibold">
                    Active Selection
                  </span>
                </div>
                <h3 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A] group-hover:text-[#553722] transition-colors">
                  Riverbend Children's Relief
                </h3>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-1.5 line-clamp-2">
                  FrontPage 98 table-layout, inline styling, animated GIF artifacts to responsive UI.
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 text-[#7D6D5F] group-hover:text-[#553722] transition-colors">
                <span className="font-['JetBrains_Mono'] text-[11px]">Modernize table site</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>

            {/* Sample Tile 3: Legacy Code */}
            <a
              className="group bg-[#f8f3eb] rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-48 relative overflow-hidden cursor-pointer"
              data-path="s10-legacy-code-view"
              href="#s10-legacy-code-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s10-code-before');
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#A3AD8F]/20 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#A3AD8F]/20 font-['JetBrains_Mono'] text-[10px] text-[#3E322A] font-medium">
                    <span className="material-symbols-outlined text-[14px]">terminal</span>
                    LEGACY CODE
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                    Visual Basic 6.0
                  </span>
                </div>
                <h3 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A] group-hover:text-[#553722] transition-colors">
                  Donation Calculator
                </h3>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-1.5 line-clamp-2">
                  Subroutines, Win32 event loops, and financial formulas compiled to TypeScript logic.
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 text-[#7D6D5F] group-hover:text-[#553722] transition-colors">
                <span className="font-['JetBrains_Mono'] text-[11px]">Port to modern TS</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* 4. "How it works" Section */}
        <section className="w-full max-w-[1040px] mx-auto mb-10 bg-[#EDE5D8]/40 rounded-2xl p-7">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase tracking-widest block mb-1">
                Archival Engine Pipeline
              </span>
              <h2 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                How it works
              </h2>
            </div>
            <span className="font-['Caveat'] text-[22px] text-[#7D6D5F]">
              Zero hallucination guarantee
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col bg-[#ffffff]/80 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-['JetBrains_Mono'] text-[13px] font-semibold text-[#553722]">
                  01
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#3E322A]">
                  <span className="material-symbols-outlined text-[18px]">input</span>
                </div>
              </div>
              <h4 className="font-['Fraunces'] text-[18px] font-medium text-[#3E322A] mb-2">
                Ingest
              </h4>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                Feed any unformatted scrap: blurred cursive writing, nested table Web 1.0 URLs, or obsolete Windows desktop source code.
              </p>
            </div>

            <div className="flex flex-col bg-[#ffffff]/80 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-['JetBrains_Mono'] text-[13px] font-semibold text-[#553722]">
                  02
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#3E322A]">
                  <span className="material-symbols-outlined text-[18px]">psychology</span>
                </div>
              </div>
              <h4 className="font-['Fraunces'] text-[18px] font-medium text-[#3E322A] mb-2">
                Analyse
              </h4>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                Deconstruct structural hierarchy, token intent, measurement conversions, and visual aesthetic semantics with grounded confidence scores.
              </p>
            </div>

            <div className="flex flex-col bg-[#ffffff]/80 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-['JetBrains_Mono'] text-[13px] font-semibold text-[#553722]">
                  03
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#3E322A]">
                  <span className="material-symbols-outlined text-[18px]">cached</span>
                </div>
              </div>
              <h4 className="font-['Fraunces'] text-[18px] font-medium text-[#3E322A] mb-2">
                Restore
              </h4>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                Export modern accessible HTML5/CSS, structured TypeScript, or printer-friendly artisanal recipe layouts ready for immediate production deployment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
