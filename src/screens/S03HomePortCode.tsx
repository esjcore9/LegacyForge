import React from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S03HomePortCode: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full relative">
      {/* Subtle radial ambient caramel glow in top-left */}
      <div className="absolute -top-12 -left-20 w-96 h-96 rounded-full bg-[#C69C72]/10 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1280px] mx-auto px-6 py-6 flex flex-col items-center">
        {/* 1. Centered Hero Header */}
        <header className="text-center max-w-2xl mx-auto mb-8 mt-2 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[11px] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
            <span>Legacy Archival &amp; Code Migration Engine</span>
          </div>
          <h1 className="font-['Fraunces'] text-[46px] leading-[1.1] text-[#3E322A] tracking-tight mb-3">
            Bring old things back to life.
          </h1>
          <p className="font-['Inter'] text-[16px] leading-[26px] text-[#7D6D5F] text-center max-w-xl">
            Drop in a handwritten card, an old website or legacy code. Get a modern, usable version back.
          </p>
        </header>

        {/* 2. Main Ingest Card (Width: 760px) */}
        <div className="w-full max-w-[760px] bg-[#ffffff] rounded-xl shadow-[0_4px_16px_-4px_rgba(62,50,42,0.08),0_1px_3px_rgba(62,50,42,0.04)] p-7 mb-14 relative transition-all">
          {/* Segmented Control Pill Container */}
          <div className="bg-[#EDE5D8] p-1 rounded-full flex max-w-md mx-auto mb-6 shadow-inner">
            <a
              className="flex-1 text-center py-1.5 px-4 rounded-full font-['Inter'] text-[12px] font-medium text-[#7D6D5F] hover:text-[#3E322A] transition-colors cursor-pointer"
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
              className="flex-1 text-center py-1.5 px-4 rounded-full font-['Inter'] text-[12px] font-medium text-[#7D6D5F] hover:text-[#3E322A] transition-colors cursor-pointer"
              data-path="s02-home-ingest-link"
              href="#s02-home-ingest-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s02-ingest-link');
              }}
            >
              Ingest Link
            </a>
            <a
              className="flex-1 text-center py-1.5 px-4 rounded-full font-['Inter'] text-[12px] font-semibold bg-[#C69C72] text-white shadow-sm transition-all cursor-pointer"
              data-path="s03-home-port-code"
              href="#s03-home-port-code"
              onClick={(e) => e.preventDefault()}
            >
              Port Code
            </a>
          </div>

          {/* Code Editor Body */}
          <div className="flex flex-col mb-6 shadow-sm rounded-xl overflow-hidden border border-[#DDD1BF]/70">
            {/* Top File Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[11px]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[15px] text-[#553722]">terminal</span>
                <span className="font-medium text-[#3E322A]">donation_calc.frm (Visual Basic 6.0)</span>
                <span className="ml-2 px-1.5 py-0.5 rounded bg-[#f8f3eb] text-[#52514E] font-['JetBrains_Mono'] text-[10px]">
                  Legacy Form
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px]">
                <span>ANSI • Windows CRLF</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3AD8F]" />
                <span>Parsed</span>
              </div>
            </div>

            {/* Code Content Area with Line Numbers */}
            <div className="bg-[#f8f3eb] p-4 font-['JetBrains_Mono'] text-[12px] text-[#3E322A] overflow-x-auto leading-[1.7] flex select-text">
              <div className="select-none pr-4 text-[#7D6D5F]/50 text-right w-7 shrink-0">
                1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11
              </div>
              <div className="pl-4 flex-1 min-w-[480px]">
                <div>
                  <span className="text-[#553722] font-semibold">Private Sub</span>{' '}
                  <span className="font-semibold text-[#3E322A]">cmdCalc_Click</span>()
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#7D6D5F] italic font-['Inter'] text-[12px]">
                    ' Error handling suppresses failures silently
                  </span>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#553722]">On Error Resume Next</span>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#553722]">Dim</span> total{' '}
                  <span className="text-[#7a5733]">As Variant</span>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#553722]">Dim</span> i{' '}
                  <span className="text-[#7a5733]">As Integer</span>
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;total = 0</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#553722]">For</span> i = 1{' '}
                  <span className="text-[#553722]">To</span> 3
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total = total + Val(Text1(i).Text)</div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#553722]">Next</span> i
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;MsgBox{' '}
                  <span className="text-[#7a5733] font-medium">"Total donations: "</span> &amp; total
                </div>
                <div>
                  <span className="text-[#553722] font-semibold">End Sub</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ingest Card Footer */}
          <div className="flex items-center justify-between pt-4 bg-[#ffffff]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[15px] text-[#C69C72]">info</span>
              <span className="font-['Inter'] text-[12px] text-[#7D6D5F] italic">
                Demo mode: sample data, no network needed
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#EDE5D8] text-[#3E322A] hover:bg-[#ece8e0] transition-colors font-['Inter'] text-[12px] font-medium cursor-pointer"
                data-path="s10-legacy-code-view"
                href="#s10-legacy-code-view"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('s10-code-before');
                }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#C69C72]">
                  auto_fix_high
                </span>
                <span>Load Sample Artifact</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#6f4e37] text-white hover:bg-[#553722] transition-colors font-['Inter'] text-[12px] font-semibold shadow-sm cursor-pointer"
                data-path="s10-legacy-code-view"
                href="#s10-legacy-code-view"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('s10-code-before');
                }}
              >
                <span>Revive</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. "Or start from a sample" Section */}
        <section className="w-full max-w-[1040px] mb-16">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                Or start from a sample
              </h2>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                Instant live walkthroughs preserved from historical formats
              </p>
            </div>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase tracking-wider">
              3 Curated Artifacts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Sample 1 */}
            <a
              className="group bg-[#ffffff] rounded-xl p-4 shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)] hover:shadow-[0_12px_24px_-4px_rgba(62,50,42,0.09)] transition-all flex flex-col justify-between cursor-pointer border border-[#DDD1BF]/60"
              data-path="s04-handwriting-view"
              href="#s04-handwriting-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s05-shopping-list');
              }}
            >
              <div>
                <div className="relative w-full h-36 rounded-lg overflow-hidden bg-[#EDE5D8] mb-3.5 flex items-center justify-center p-4">
                  <div className="font-['Caveat'] text-[24px] text-[#6F4E37] text-center leading-relaxed">
                    « Tarte aux pommes de Mamie 1954 »
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#ffffff]/90 font-['JetBrains_Mono'] text-[10px] text-[#3E322A]">
                    Handwriting • 1954
                  </div>
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-['Fraunces'] text-[18px] font-semibold text-[#3E322A] group-hover:text-[#553722] transition-colors">
                    Mamie's Apple Tart
                  </h3>
                  <span className="material-symbols-outlined text-[#C69C72] text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] line-clamp-2">
                  Pencil on stained 3×5 index card with non-standard volumetric fractions and forgotten baking steps.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between font-['JetBrains_Mono'] text-[10px] text-[#52514E] bg-[#f8f3eb] rounded-lg px-2.5 py-1.5">
                <span>Preserved OCR &amp; Scalable JSON</span>
                <span className="text-[#553722] font-medium">Preview →</span>
              </div>
            </a>

            {/* Sample 2 */}
            <a
              className="group bg-[#ffffff] rounded-xl p-4 shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)] hover:shadow-[0_12px_24px_-4px_rgba(62,50,42,0.09)] transition-all flex flex-col justify-between cursor-pointer border border-[#DDD1BF]/60"
              data-path="s07-old-website-view"
              href="#s07-old-website-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s07-old-web-desktop');
              }}
            >
              <div>
                <div className="relative w-full h-36 rounded-lg overflow-hidden bg-[#003399]/10 mb-3.5 flex flex-col items-center justify-center p-3 text-center border border-[#DDD1BF]/40">
                  <div className="font-['Times_New_Roman'] font-bold text-[#003399] text-[14px]">
                    *** RIVERBEND RELIEF FUND ***
                  </div>
                  <div className="font-mono text-[10px] text-[#7D6D5F] mt-1">
                    HTML 3.2 • 800x600 Table Grid
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#ffffff]/90 font-['JetBrains_Mono'] text-[10px] text-[#3E322A]">
                    Web 1.0 • 1999
                  </div>
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-['Fraunces'] text-[18px] font-semibold text-[#3E322A] group-hover:text-[#553722] transition-colors">
                    Riverbend Children's Fund
                  </h3>
                  <span className="material-symbols-outlined text-[#C69C72] text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] line-clamp-2">
                  Nested tables, animated spacer GIFs, broken layout tags converted to semantic responsive HTML5 &amp; CSS.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between font-['JetBrains_Mono'] text-[10px] text-[#52514E] bg-[#f8f3eb] rounded-lg px-2.5 py-1.5">
                <span>Modern Responsive Grid</span>
                <span className="text-[#553722] font-medium">Preview →</span>
              </div>
            </a>

            {/* Sample 3 */}
            <a
              className="group bg-[#ffffff] rounded-xl p-4 shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)] hover:shadow-[0_12px_24px_-4px_rgba(62,50,42,0.09)] transition-all flex flex-col justify-between ring-2 ring-[#C69C72]/40 cursor-pointer"
              data-path="s10-legacy-code-view"
              href="#s10-legacy-code-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s10-code-before');
              }}
            >
              <div>
                <div className="relative w-full h-36 rounded-lg overflow-hidden bg-[#2D1604] mb-3.5 flex flex-col justify-center px-4 font-mono text-[11px] text-[#A3AD8F]">
                  <div className="text-[#eabda0]">Sub cmdCalc_Click()</div>
                  <div className="text-white/80">&nbsp;&nbsp;total = total + Val(Text1)</div>
                  <div className="text-[#eabda0]">End Sub</div>
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#6f4e37] text-white font-['JetBrains_Mono'] text-[10px]">
                    Visual Basic 6.0 • Active
                  </div>
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-['Fraunces'] text-[18px] font-semibold text-[#3E322A] group-hover:text-[#553722] transition-colors">
                    Donation Calculator Form
                  </h3>
                  <span className="material-symbols-outlined text-[#C69C72] text-[16px]">
                    arrow_forward
                  </span>
                </div>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F] line-clamp-2">
                  Legacy monolithic VB6 Windows Form with implicit type mutations translated to clean TypeScript micro-app.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between font-['JetBrains_Mono'] text-[10px] text-[#52514E] bg-[#f8f3eb] rounded-lg px-2.5 py-1.5">
                <span>TypeScript + React Ready</span>
                <span className="text-[#553722] font-semibold">Inspect Code →</span>
              </div>
            </a>
          </div>
        </section>

        {/* 4. "How it works" Section */}
        <section className="w-full max-w-[1040px] mb-8">
          <div className="mb-5">
            <h2 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
              How it works
            </h2>
            <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
              Three intentional steps from obsolete medium to living code
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#f8f3eb] rounded-xl p-6 relative">
              <span className="font-['JetBrains_Mono'] text-[13px] text-[#C69C72] font-bold mb-3 block">
                01
              </span>
              <h3 className="font-['Fraunces'] text-[18px] font-semibold text-[#3E322A] mb-2">
                Ingest
              </h3>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                Feed any physical scan, raw HTML snapshot, or deprecated source file. LegacyForge parses layout structure, semantic meaning, and legacy syntax without cloud dependencies.
              </p>
            </div>
            <div className="bg-[#f8f3eb] rounded-xl p-6 relative">
              <span className="font-['JetBrains_Mono'] text-[13px] text-[#C69C72] font-bold mb-3 block">
                02
              </span>
              <h3 className="font-['Fraunces'] text-[18px] font-semibold text-[#3E322A] mb-2">
                Analyse
              </h3>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                Heuristic rules deconstruct quirks: antique fonts, nested layout tables, and implicit error handling routines are isolated into pure component structures.
              </p>
            </div>
            <div className="bg-[#f8f3eb] rounded-xl p-6 relative">
              <span className="font-['JetBrains_Mono'] text-[13px] text-[#C69C72] font-bold mb-3 block">
                03
              </span>
              <h3 className="font-['Fraunces'] text-[18px] font-semibold text-[#3E322A] mb-2">
                Restore
              </h3>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                Instantly inspect parallel side-by-side versions. Export accessible HTML, responsive Tailwind styling, or strictly-typed reactive components with complete provenance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
