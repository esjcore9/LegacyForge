import React from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S07OldWebDesktop: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1400px] w-full mx-auto px-6 py-8 flex flex-col gap-8">
        {/* RESULT HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#9FB0B8]/20 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7D9099]" />
                <span>MODULE 02 • OLD WEB TO MODERN WEB</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px] font-medium">
                Sample output
              </span>
            </div>
            <h1 className="font-['Fraunces'] text-[30px] font-medium text-[#3E322A] tracking-tight">
              Riverbend Children's Relief Fund
            </h1>
            <p className="font-['Inter'] text-[14px] text-[#7D6D5F] max-w-2xl">
              Rebuild a legacy website as a clean, responsive page. Automated asset recovery, semantic migration, and structural elevation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('s01-home')}
              className="px-4 py-2 rounded-xl text-[#3E322A] hover:bg-[#EDE5D8] transition-colors font-['Inter'] text-[12px] font-medium flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              <span>Start over</span>
            </button>
          </div>
        </div>

        {/* TOOLBAR & WORKSPACE CONTROLS */}
        <div className="p-3 bg-[#ffffff] rounded-2xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 border border-[#DDD1BF]/60">
          {/* Browser URL Bar */}
          <div className="flex items-center gap-2 w-full lg:w-auto flex-1 max-w-xl">
            <div className="flex items-center gap-1 text-[#7D6D5F] pl-1">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              <span className="material-symbols-outlined text-[16px]">refresh</span>
            </div>
            <div className="flex-1 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[11px]">
              <span className="material-symbols-outlined text-[15px] text-[#7D6D5F]">public</span>
              <span className="font-mono text-[#7D6D5F] text-[12px] truncate">
                http://www.riverbendfund.org/index.htm
              </span>
              <span className="ml-auto px-1.5 py-0.5 rounded bg-[#ffffff] text-[#52514E] text-[10px] font-mono">
                HTTP/1.0
              </span>
            </div>
          </div>

          {/* Controls & Download */}
          <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto gap-3">
            <div className="inline-flex p-1 rounded-xl bg-[#EDE5D8]">
              <button
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#ffffff] text-[#3E322A] font-['JetBrains_Mono'] text-[11px] font-medium shadow-sm cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[15px] text-[#7a5733]">
                  desktop_windows
                </span>
                <span>Desktop</span>
              </button>
              <button
                onClick={() => onNavigate('s08-old-web-mobile')}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[#7D6D5F] hover:text-[#3E322A] transition-colors font-['JetBrains_Mono'] text-[11px] cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[15px]">smartphone</span>
                <span>Mobile</span>
              </button>
            </div>
            <button
              onClick={() => onNavigate('s09-download-modal')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6f4e37] hover:bg-[#5e412d] text-white transition-all shadow-md font-['Inter'] text-[12px] font-medium cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Clean HTML</span>
            </button>
          </div>
        </div>

        {/* COMPARISON FRAMES (SPLIT VIEW 50 / 50) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
          {/* LEFT FRAME: RETRO WEB 1.0 (2003) */}
          <div className="flex flex-col rounded-2xl overflow-hidden bg-[#e0d8c7] shadow-md border border-[#DDD1BF]">
            <div className="bg-[#c9bea7] px-4 py-2.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-[#b89379]" />
                  <span className="w-3 h-3 rounded-full bg-[#d2b89b]" />
                  <span className="w-3 h-3 rounded-full bg-[#9fb0b8]" />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] font-mono text-[#332a22] font-semibold flex items-center gap-1.5 ml-2">
                  <span className="material-symbols-outlined text-[15px]">language</span>
                  Original (2003) - Internet Explorer 6.0
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] font-mono text-[#5c4d3e] bg-[#ded5c2] px-2 py-0.5 rounded">
                800x600 px • quirks mode
              </span>
            </div>

            <div
              className="p-4 overflow-y-auto max-h-[640px] bg-[#f0ebd9] text-[#000000] text-[13px] leading-snug select-text"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              <div className="bg-[#003399] p-3 text-center mb-3 shadow-sm">
                <h2 className="text-[#FFFF00] font-bold text-[22px] tracking-wide m-0">
                  *** RIVERBEND CHILDREN'S RELIEF FUND ***
                </h2>
                <div className="text-[#FFFFFF] text-[11px] italic mt-1 font-mono">
                  "Lighting the path for our valley's youth since 1994"
                </div>
              </div>

              <div className="bg-[#FFFF99] text-[#990000] font-bold text-[12px] p-1.5 mb-3 text-center overflow-hidden whitespace-nowrap shadow-inner font-sans">
                *** NEW! Winter blanket drive - donate today!!! Warm coats &amp; dry boots urgent need in County District 4! ***
              </div>

              <div className="grid grid-cols-12 gap-3 mb-4">
                <div className="col-span-4 bg-[#e4dcce] p-2 flex flex-col gap-1.5 shadow-sm text-[12px] font-sans">
                  <div className="bg-[#003399] text-white font-bold px-1.5 py-0.5 text-[11px] uppercase tracking-wider text-center">
                    Main Menu
                  </div>
                  <a className="text-[#0000EE] underline hover:text-[#FF0000] block px-1" href="#home">
                    • Home
                  </a>
                  <a className="text-[#0000EE] underline hover:text-[#FF0000] block px-1" href="#about">
                    • About Us
                  </a>
                  <a className="text-[#0000EE] underline hover:text-[#FF0000] block px-1" href="#projects">
                    • Our Projects
                  </a>
                  <a className="text-[#0000EE] underline hover:text-[#FF0000] block px-1 font-bold" href="#donate">
                    • Donate Now
                  </a>
                  <a className="text-[#0000EE] underline hover:text-[#FF0000] block px-1" href="#volunteer">
                    • Volunteer
                  </a>
                  <a className="text-[#0000EE] underline hover:text-[#FF0000] block px-1" href="#contact">
                    • Contact
                  </a>

                  <div className="mt-4 p-2 bg-[#ffffff] text-center shadow-inner">
                    <div className="text-[#cc0000] font-bold text-[10px] flex items-center justify-center gap-1 mb-1">
                      <span className="material-symbols-outlined text-[14px]">cancel</span>
                      <span>Flash Player 6 Required</span>
                    </div>
                    <div className="text-[9px] text-[#666666] leading-tight">
                      Click here to load interactive 2003 welcome intro
                    </div>
                    <div className="mt-1 text-[8px] text-[#999999]">[intro_v3_final.swf]</div>
                  </div>

                  <div className="mt-4 p-1.5 bg-[#111111] text-center rounded">
                    <div className="text-[#aaaaaa] text-[9px] font-mono uppercase mb-0.5">
                      Visitor Count
                    </div>
                    <div className="bg-[#000000] text-[#33ff33] font-mono text-[14px] px-2 py-0.5 tracking-widest inline-block shadow-inner">
                      004127
                    </div>
                  </div>

                  <div className="mt-3 p-1 bg-[#fff3cd] text-center text-[10px] text-[#856404] font-bold flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#856404]">
                      warning
                    </span>
                    <span>Page under construction</span>
                  </div>
                </div>

                <div className="col-span-8 flex flex-col gap-3">
                  <div className="bg-[#ffffff] p-3 shadow-sm">
                    <p className="mb-2 text-[14px] leading-relaxed">
                      <strong>Welcome</strong> to the official homepage of the{' '}
                      <span className="text-[#003399]">Riverbend Children's Relief Fund</span>!
                      Since 1994 we have helped children in our region get to school, eat hot lunches, and obtain essential warm winter footwear.
                    </p>
                    <p className="text-[12px] text-[#444444] leading-relaxed mb-3">
                      Please consider making a tax deductible donation below. Cheques may also be mailed to P.O. Box 412, Riverbend Valley, NY 12508.
                    </p>

                    <div className="bg-[#ded5c2] p-2.5 shadow-sm text-[11px] font-sans">
                      <div className="font-bold text-[#003399] mb-2 uppercase tracking-wide">
                        Online Donation Form (v1.2)
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-16 text-right font-medium">Name:</span>
                          <input
                            className="flex-1 bg-white px-1.5 py-0.5 text-[11px] shadow-inner"
                            readOnly
                            type="text"
                            defaultValue="Mrs. Margaret Sterling"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-16 text-right font-medium">Amount:</span>
                          <select className="bg-white px-1 py-0.5 text-[11px] shadow-inner" defaultValue="$50.00 Winter Supporter">
                            <option>$25.00 One-time</option>
                            <option>$50.00 Winter Supporter</option>
                            <option>$100.00 Angel Tier</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-2">
                          <button
                            className="px-3 py-1 bg-[#d4d0c8] text-black font-sans text-[11px] font-bold shadow-md active:shadow-inner uppercase cursor-pointer"
                            type="button"
                          >
                            Submit
                          </button>
                          <button
                            className="px-2 py-1 bg-[#d4d0c8] text-black font-sans text-[11px] shadow-sm uppercase cursor-pointer"
                            type="button"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 bg-[#e4dcce] text-center text-[10px] text-[#555555] font-sans flex flex-col items-center gap-1">
                    <div>
                      Best viewed in <strong>Internet Explorer 6.0</strong> at 800x600 resolution.
                    </div>
                    <div className="text-[9px] text-[#777777]">
                      Copyright © 1994-2003 Riverbend Children's Relief Fund. All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FRAME: MODERN CLEAN COFFEE PALETTE */}
          <div className="flex flex-col rounded-2xl overflow-hidden bg-[#ffffff] shadow-md border border-[#DDD1BF]/60">
            <div className="bg-[#EDE5D8] px-4 py-2.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C69C72]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A3AD8F]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9FB0B8]/60" />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#3E322A] font-semibold flex items-center gap-1.5 ml-2">
                  <span className="material-symbols-outlined text-[15px] text-[#553722]">
                    auto_fix_high
                  </span>
                  Modern HTML5 / CSS Grid Preview
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] font-mono text-[#3E322A] bg-[#e7e2da] px-2 py-0.5 rounded">
                Fluid Layout • WCAG AAA • Responsive
              </span>
            </div>

            <div className="p-6 overflow-y-auto max-h-[640px] flex flex-col gap-6 bg-[#F6F1E9]">
              <nav className="flex items-center justify-between py-2 bg-[#ffffff]/90 px-4 rounded-xl shadow-sm backdrop-blur-sm border border-[#DDD1BF]/50">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#6f4e37] text-white flex items-center justify-center font-['Fraunces'] text-[15px] font-bold">
                    R
                  </div>
                  <span className="font-['Fraunces'] text-[16px] text-[#3E322A] tracking-tight">
                    Riverbend
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-4 text-[#7D6D5F] font-['Inter'] text-[12px]">
                  <span className="text-[#3E322A] font-medium cursor-pointer">Our Mission</span>
                  <span className="hover:text-[#3E322A] transition-colors cursor-pointer">Projects</span>
                  <span className="hover:text-[#3E322A] transition-colors cursor-pointer">Financials</span>
                </div>
                <button
                  className="px-3.5 py-1.5 rounded-lg bg-[#6f4e37] hover:bg-[#5e412d] text-white font-['Inter'] text-[12px] font-medium transition-all shadow-sm cursor-pointer"
                  type="button"
                >
                  Donate
                </button>
              </nav>

              <div className="relative rounded-2xl overflow-hidden shadow-sm bg-[#ece8e0] p-6 md:p-8 flex flex-col justify-between min-h-[260px] border border-[#DDD1BF]/60">
                <div className="max-w-md flex flex-col gap-3 relative z-10">
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#7a5733] font-semibold">
                    Serving the Valley Since 1994
                  </span>
                  <h3 className="font-['Fraunces'] text-[24px] text-[#3E322A] font-medium leading-tight">
                    Every child deserves a safe place to learn.
                  </h3>
                  <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                    Empowering students across four regional districts with nutrition, seasonal apparel, and classroom essentials.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      className="px-4 py-2 rounded-xl bg-[#6f4e37] hover:bg-[#5e412d] text-white font-['Inter'] text-[12px] font-medium transition-all shadow-sm cursor-pointer"
                      type="button"
                    >
                      Donate Now
                    </button>
                    <button
                      className="px-4 py-2 rounded-xl bg-[#EDE5D8] hover:bg-[#e7e2da] text-[#3E322A] font-['Inter'] text-[12px] font-medium transition-all cursor-pointer"
                      type="button"
                    >
                      Volunteer
                    </button>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 pointer-events-none bg-gradient-to-l from-[#C69C72] to-transparent" />
              </div>

              {/* Bento Metric Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#ffffff] shadow-sm flex flex-col border border-[#DDD1BF]/50">
                  <span className="font-['Fraunces'] text-[24px] text-[#553722] font-semibold">1,200</span>
                  <span className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-0.5">Children Supported</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#ffffff] shadow-sm flex flex-col border border-[#DDD1BF]/50">
                  <span className="font-['Fraunces'] text-[24px] text-[#553722] font-semibold">14</span>
                  <span className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-0.5">Active Projects</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#ffffff] shadow-sm flex flex-col border border-[#DDD1BF]/50">
                  <span className="font-['Fraunces'] text-[24px] text-[#553722] font-semibold">300</span>
                  <span className="font-['Inter'] text-[12px] text-[#7D6D5F] mt-0.5">Active Volunteers</span>
                </div>
              </div>

              {/* Featured News Card */}
              <div className="p-4 rounded-xl bg-[#EDE5D8] shadow-sm flex items-start gap-3 border border-[#DDD1BF]/60">
                <div className="p-2 rounded-lg bg-[#C69C72]/20 text-[#7a5733] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">campaign</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-['Fraunces'] text-[15px] text-[#3E322A] font-medium">
                      Winter Blanket Drive
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#ffffff] text-[#52514E] font-['JetBrains_Mono'] text-[10px] uppercase">
                      Active
                    </span>
                  </div>
                  <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-relaxed">
                    Now accepting warm clothing, boots, and insulated blankets for regional shelters and schools in Valley District 4.
                  </p>
                </div>
              </div>

              {/* Modern Footer */}
              <footer className="pt-4 border-t border-[#DDD1BF] flex flex-col sm:flex-row items-center justify-between text-[#7D6D5F] font-['Inter'] text-[12px] gap-2">
                <div>© 2025 Riverbend Children's Relief Fund. Registered 501(c)(3) non-profit.</div>
                <div className="flex items-center gap-3 font-['JetBrains_Mono'] text-[10px]">
                  <span className="hover:text-[#3E322A] cursor-pointer">Privacy</span>
                  <span>•</span>
                  <span className="hover:text-[#3E322A] cursor-pointer">Annual Report</span>
                  <span>•</span>
                  <span className="hover:text-[#3E322A] cursor-pointer">Audited Books</span>
                </div>
              </footer>
            </div>
          </div>
        </div>

        {/* FINDINGS PANEL BELOW SPLIT VIEW */}
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <h2 className="font-['Fraunces'] text-[20px] font-medium text-[#3E322A]">
                Archival Code Audit &amp; Refactoring Findings
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[10px] font-semibold">
                5 Automated Transformations
              </span>
            </div>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">
              Engine: LegacyForge Core v1.0.4 • Parser: HTML-AST-Sanitizer
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Row 1 */}
            <div className="p-4 rounded-xl bg-[#ffffff] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 border border-[#DDD1BF]/60">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#fce8e6] text-[#ba1a1a] font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-wider">
                  Critical
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A]">
                    Dead Flash intro: 1
                  </span>
                  <span className="text-[#7D6D5F] hidden sm:inline">→</span>
                  <span className="font-['Inter'] text-[14px] text-[#7D6D5F]">
                    Replaced with semantic CSS hero section and accessible microcopy.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#DDE7D3] text-[#4F6B45] font-['JetBrains_Mono'] text-[10px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>Applied</span>
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="p-4 rounded-xl bg-[#ffffff] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 border border-[#DDD1BF]/60">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#fce8e6] text-[#ba1a1a] font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-wider">
                  Critical
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A]">
                    Donation form posts to a dead endpoint: 1
                  </span>
                  <span className="text-[#7D6D5F] hidden sm:inline">→</span>
                  <span className="font-['Inter'] text-[14px] text-[#7D6D5F]">
                    Rewritten with secure modern action handler, token validation, and client feedback.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#DDE7D3] text-[#4F6B45] font-['JetBrains_Mono'] text-[10px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>Applied</span>
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="p-4 rounded-xl bg-[#ffffff] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 border border-[#DDD1BF]/60">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#C69C72]/20 text-[#7a5733] font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-wider">
                  Warning
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A]">
                    Table layouts replaced with grid: 4
                  </span>
                  <span className="text-[#7D6D5F] hidden sm:inline">→</span>
                  <span className="font-['Inter'] text-[14px] text-[#7D6D5F]">
                    Refactored into fluid CSS Grid and Flexbox containers without nested layout markup.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#DDE7D3] text-[#4F6B45] font-['JetBrains_Mono'] text-[10px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>Applied</span>
                </span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="p-4 rounded-xl bg-[#ffffff] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 border border-[#DDD1BF]/60">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#C69C72]/20 text-[#7a5733] font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-wider">
                  Warning
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A]">
                    Missing alt text: 6
                  </span>
                  <span className="text-[#7D6D5F] hidden sm:inline">→</span>
                  <span className="font-['Inter'] text-[14px] text-[#7D6D5F]">
                    Synthesized contextual descriptive alt tags based on surrounding layout semantics.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#DDE7D3] text-[#4F6B45] font-['JetBrains_Mono'] text-[10px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>Applied</span>
                </span>
              </div>
            </div>

            {/* Row 5 */}
            <div className="p-4 rounded-xl bg-[#ffffff] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 border border-[#DDD1BF]/60">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#9FB0B8]/20 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-wider">
                  Info
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A]">
                    Not mobile-friendly: all pages
                  </span>
                  <span className="text-[#7D6D5F] hidden sm:inline">→</span>
                  <span className="font-['Inter'] text-[14px] text-[#7D6D5F]">
                    Fully responsive viewport meta and adaptive media queries injected automatically.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#DDE7D3] text-[#4F6B45] font-['JetBrains_Mono'] text-[10px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>Applied</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
