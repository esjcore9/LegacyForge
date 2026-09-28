import React from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S01HomeDropImage: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      {/* Subtle radial caramel ambience */}
      <div className="pointer-events-none absolute -top-40 -left-20 w-[540px] h-[540px] rounded-full bg-gradient-to-br from-[#C69C72]/15 via-[#fdcfa1]/10 to-transparent blur-3xl -z-10" />

      <div className="w-full max-w-[860px] mx-auto px-6 py-6 flex flex-col">
        {/* 1. Centered Hero Header */}
        <header className="text-center max-w-2xl mx-auto mb-8 mt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE5D8]/70 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider mb-4 border border-[#DDD1BF]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
            Multi-modal archival restoration
          </div>
          <h1 className="font-['Fraunces'] text-[46px] leading-[1.08] font-medium text-[#3E322A] tracking-tight mb-3">
            Bring old things back to life.
          </h1>
          <p className="font-['Inter'] text-[16px] leading-[26px] text-[#7D6D5F] max-w-xl mx-auto font-normal">
            Drop in a handwritten card, an old website or legacy code. Get a modern, usable version back.
          </p>
        </header>

        {/* 2. Primary Ingest Card */}
        <section className="w-full max-w-[760px] mx-auto rounded-xl bg-[#fef9f1] border border-[#DDD1BF] shadow-[0_4px_16px_-4px_rgba(62,50,42,0.06),0_12px_28px_-6px_rgba(62,50,42,0.04)] p-6 mb-8 transition-all">
          {/* Segmented Control Pill Bar */}
          <nav
            aria-label="Ingest Modes"
            className="bg-[#EDE5D8] p-1 rounded-full flex max-w-md mx-auto mb-6 border border-[#DDD1BF]/50"
          >
            <a
              className="flex-1 text-center rounded-full bg-[#C69C72] text-white py-1.5 font-['JetBrains_Mono'] text-[11px] font-medium shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              data-path="s01-home"
              href="#s01-home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s01-home');
              }}
            >
              <span className="material-symbols-outlined text-[14px]">image</span>
              <span>Drop Image</span>
            </a>
            <a
              className="flex-1 text-center rounded-full text-[#7D6D5F] hover:text-[#3E322A] py-1.5 font-['JetBrains_Mono'] text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              data-path="s02-ingest-link"
              href="#s02-ingest-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s02-ingest-link');
              }}
            >
              <span className="material-symbols-outlined text-[14px]">link</span>
              <span>Ingest Link</span>
            </a>
            <a
              className="flex-1 text-center rounded-full text-[#7D6D5F] hover:text-[#3E322A] py-1.5 font-['JetBrains_Mono'] text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              data-path="s03-port-code"
              href="#s03-port-code"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s03-port-code');
              }}
            >
              <span className="material-symbols-outlined text-[14px]">terminal</span>
              <span>Port Code</span>
            </a>
          </nav>

          {/* Active Drop Zone (Image Input) */}
          <a
            className="group block rounded-xl border border-dashed border-[#C69C72] bg-[#EDE5D8]/45 hover:bg-[#EDE5D8]/75 p-9 text-center transition-all duration-200 mb-6 cursor-pointer relative overflow-hidden"
            data-path="s04-handwriting-view"
            href="#s04-handwriting-view"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('s05-shopping-list');
            }}
          >
            <div className="flex flex-col items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-xl bg-[#fef9f1] border border-[#DDD1BF]/60 shadow-xs flex items-center justify-center text-[#6f4e37] mb-3 group-hover:scale-105 transition-transform duration-200">
                <span className="material-symbols-outlined text-[26px] text-[#553722]">
                  cloud_upload
                </span>
              </div>
              <p className="font-['Inter'] text-[14px] text-[#3E322A] mb-1">
                Drag a handwritten card here, or{' '}
                <span className="text-[#553722] font-semibold underline underline-offset-4 decoration-[#C69C72]">
                  browse files
                </span>
              </p>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">
                Supports JPG, PNG, HEIC, TIFF • up to 25MB
              </span>
            </div>
            <div className="absolute bottom-2 right-3 font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <span>Click to select sample card</span>
              <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
            </div>
          </a>

          {/* Ingest Card Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#DDD1BF]/60">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#A3AD8F]">
                verified
              </span>
              <span className="font-['Inter'] text-[12px] text-[#7D6D5F] italic">
                Demo mode: sample data loaded locally, no network needed
              </span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                className="px-3.5 py-2 rounded-lg border border-[#DDD1BF] hover:border-[#553722] text-[#3E322A] bg-[#fef9f1] hover:bg-[#EDE5D8] font-['JetBrains_Mono'] text-[11px] font-medium transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                data-path="s04-handwriting-view"
                href="#s04-handwriting-view"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('s05-shopping-list');
                }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#C69C72]">
                  auto_awesome
                </span>
                <span>Load Sample Artifact</span>
              </a>
              <a
                className="px-5 py-2 rounded-lg bg-[#6f4e37] hover:bg-[#553722] text-white font-['JetBrains_Mono'] text-[11px] font-medium transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                data-path="s04-handwriting-view"
                href="#s04-handwriting-view"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('s05-shopping-list');
                }}
              >
                <span>Revive</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3. "Or start from a sample" Section */}
        <section className="w-full max-w-[760px] mx-auto mb-10">
          <div className="flex items-center justify-between mb-3 px-0.5">
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase font-semibold text-[#7D6D5F] tracking-wider">
              Or start from a curated sample
            </span>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
              Interactive demo files
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Sample Tile 1: Recipe Card */}
            <a
              className="group rounded-xl bg-[#fef9f1] border border-[#DDD1BF] hover:border-[#C69C72] p-4 transition-all duration-200 shadow-[0_2px_8px_-2px_rgba(62,50,42,0.04)] hover:shadow-md flex flex-col justify-between cursor-pointer"
              data-path="s04-handwriting-view"
              href="#s04-handwriting-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s05-shopping-list');
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C69C72]/20 text-[#553722] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[17px]">edit_note</span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] font-medium uppercase">
                    Cursive
                  </span>
                </div>
                <h2 className="font-['Fraunces'] text-[16px] leading-[22px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors">
                  Handwritten recipe card
                </h2>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-1 leading-relaxed">
                  Transcribe a vintage French recipe card into searchable text, an ingredient checklist, and step-by-step cook mode.
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#DDD1BF]/50 text-[#7D6D5F] group-hover:text-[#553722] transition-colors font-['JetBrains_Mono'] text-[11px]">
                <span>Mamie's Apple Tart (1954)</span>
                <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>

            {/* Sample Tile 2: Charity Website */}
            <a
              className="group rounded-xl bg-[#fef9f1] border border-[#DDD1BF] hover:border-[#9FB0B8] p-4 transition-all duration-200 shadow-[0_2px_8px_-2px_rgba(62,50,42,0.04)] hover:shadow-md flex flex-col justify-between cursor-pointer"
              data-path="s07-old-website-view"
              href="#s07-old-website-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s07-old-web-desktop');
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#9FB0B8]/25 text-[#3E322A] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[17px]">language</span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] font-medium uppercase">
                    Web 1.0
                  </span>
                </div>
                <h2 className="font-['Fraunces'] text-[16px] leading-[22px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors">
                  2003 charity website
                </h2>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-1 leading-relaxed">
                  Rebuild a nested-table NGO donation portal as a responsive, semantic, modern grid with valid CSS variables.
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#DDD1BF]/50 text-[#7D6D5F] group-hover:text-[#553722] transition-colors font-['JetBrains_Mono'] text-[11px]">
                <span>Riverbend Children's Relief</span>
                <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>

            {/* Sample Tile 3: VB6 Code */}
            <a
              className="group rounded-xl bg-[#fef9f1] border border-[#DDD1BF] hover:border-[#A3AD8F] p-4 transition-all duration-200 shadow-[0_2px_8px_-2px_rgba(62,50,42,0.04)] hover:shadow-md flex flex-col justify-between cursor-pointer"
              data-path="s10-legacy-code-view"
              href="#s10-legacy-code-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s10-code-before');
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#A3AD8F]/25 text-[#3E322A] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[17px]">terminal</span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] font-medium uppercase">
                    Legacy Code
                  </span>
                </div>
                <h2 className="font-['Fraunces'] text-[16px] leading-[22px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors">
                  VB6 donation tool
                </h2>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-1 leading-relaxed">
                  Port ancient Visual Basic 6 desktop routines to cleanly typed Python 3.12 with executed test suites.
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#DDD1BF]/50 text-[#7D6D5F] group-hover:text-[#553722] transition-colors font-['JetBrains_Mono'] text-[11px]">
                <span>calc_tax_deduct.frm</span>
                <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* 4. "How it works" Section */}
        <section className="w-full max-w-[760px] mx-auto mb-8">
          <div className="flex items-center gap-2 mb-3 px-0.5">
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase font-semibold text-[#7D6D5F] tracking-wider">
              How it works
            </span>
            <span className="h-px flex-1 bg-[#DDD1BF]/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="rounded-xl bg-[#EDE5D8]/45 border border-[#DDD1BF]/70 p-4 select-none">
              <div className="font-['Fraunces'] text-[18px] text-[#C69C72] font-semibold mb-1">
                01
              </div>
              <div className="font-['Inter'] text-[12px] font-semibold text-[#3E322A] mb-1">
                Ingest
              </div>
              <div className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                Drop an image file, paste a live URL, or paste unformatted source code into the forge hopper.
              </div>
            </div>

            <div className="rounded-xl bg-[#EDE5D8]/45 border border-[#DDD1BF]/70 p-4 select-none">
              <div className="font-['Fraunces'] text-[18px] text-[#C69C72] font-semibold mb-1">
                02
              </div>
              <div className="font-['Inter'] text-[12px] font-semibold text-[#3E322A] mb-1">
                Analyse
              </div>
              <div className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                LegacyForge inspects structure, parses archaic syntax, and flags damaged or obsolete patterns.
              </div>
            </div>

            <div className="rounded-xl bg-[#EDE5D8]/45 border border-[#DDD1BF]/70 p-4 select-none">
              <div className="font-['Fraunces'] text-[18px] text-[#C69C72] font-semibold mb-1">
                03
              </div>
              <div className="font-['Inter'] text-[12px] font-semibold text-[#3E322A] mb-1">
                Restore
              </div>
              <div className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                Obtain a clean, responsive, fully usable modern artifact ready for export, deployment, or archival.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
