import React from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S08OldWebMobile: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="p-6 md:p-10 max-w-[1340px] mx-auto w-full space-y-8">
        {/* Top Result Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 bg-[#F6F1E9]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#9FB0B8]/20 text-[#3E322A] font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9FB0B8]" />
                MODULE 02 • OLD WEB TO MODERN WEB
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px] uppercase tracking-wide">
                Sample output
              </span>
            </div>
            <div>
              <h1 className="font-['Fraunces'] text-[30px] font-medium text-[#3E322A] tracking-tight">
                Riverbend Children's Relief Fund
              </h1>
              <p className="font-['Inter'] text-[14px] text-[#7D6D5F] mt-1">
                Rebuild a legacy website as a clean, responsive page.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('s01-home')}
              className="px-4 py-2.5 rounded-lg text-[#3E322A] font-['Inter'] text-[14px] hover:underline decoration-[#C69C72] decoration-2 transition-all flex items-center gap-2 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              <span>Start over</span>
            </button>
          </div>
        </div>

        {/* Toolbar: URL chrome, responsive toggles, actions */}
        <div className="bg-[#EDE5D8] rounded-xl p-3 md:p-4 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 border border-[#DDD1BF]/60">
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-1.5 text-[#7D6D5F] pl-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DDD1BF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#DDD1BF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#DDD1BF]" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ffffff] text-[#7D6D5F] font-['JetBrains_Mono'] text-[11px] flex-1 lg:w-80 shadow-xs border border-[#DDD1BF]/50">
              <span className="material-symbols-outlined text-[14px] text-[#7D6D5F]">lock_open</span>
              <span className="truncate">http://www.riverbendfund.org/index.htm</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
            <div className="inline-flex items-center bg-[#f8f3eb] p-1 rounded-lg border border-[#DDD1BF]/50">
              <button
                onClick={() => onNavigate('s07-old-web-desktop')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md font-['Inter'] text-[12px] text-[#7D6D5F] hover:text-[#3E322A] transition-colors cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">desktop_windows</span>
                <span>Desktop</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ffffff] font-['Inter'] text-[12px] text-[#3E322A] shadow-xs cursor-default font-medium"
                type="button"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
                <span className="material-symbols-outlined text-[16px] text-[#553722]">
                  smartphone
                </span>
                <span>Mobile</span>
              </button>
            </div>

            <button
              onClick={() => onNavigate('s09-download-modal')}
              className="bg-[#6f4e37] hover:bg-[#A47551] text-[#F6F1E9] px-4 py-2.5 rounded-lg font-['Inter'] text-[12px] font-medium transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Clean HTML</span>
            </button>
          </div>
        </div>

        {/* Comparative Display: Original vs Modern Mobile */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* LEFT: Original 2003 Web */}
          <div className="xl:col-span-6 bg-[#ffffff] rounded-2xl p-5 shadow-sm space-y-4 border border-[#DDD1BF]/60">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDD1BF]/40">
              <div className="flex items-center gap-2">
                <span className="font-['Fraunces'] text-[20px] text-[#3E322A] font-semibold">
                  Original
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F] px-2 py-0.5 rounded bg-[#EDE5D8]">
                  Archived June 2003
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px]">
                <span className="material-symbols-outlined text-[14px]">aspect_ratio</span>
                <span>800 x 600 Fixed Table</span>
              </div>
            </div>

            <div
              className="rounded-xl overflow-hidden shadow-inner bg-[#ece9d8] text-[#000080]"
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              <div className="bg-[#0055ea] px-3 py-1.5 text-white flex items-center justify-between font-sans text-xs">
                <div className="flex items-center gap-1.5 font-bold">
                  <span className="w-3 h-3 bg-white/20 rounded-xs flex items-center justify-center text-[9px]">
                    e
                  </span>
                  <span>Riverbend Relief Fund - Home Page (Internet Explorer 6.0)</span>
                </div>
                <div className="flex items-center gap-1 font-mono">
                  <span className="px-1 bg-white/20">_</span>
                  <span className="px-1 bg-white/20">□</span>
                  <span className="px-1 bg-[#d12f19]">✕</span>
                </div>
              </div>

              <div className="p-4 bg-[radial-gradient(#d3cbbd_1px,transparent_1px)] [background-size:12px_12px] bg-[#fdfbf7] min-h-[580px] flex flex-col justify-between">
                <div className="bg-white p-3 shadow-xs max-w-[560px] mx-auto w-full">
                  <div className="bg-[#000084] text-white p-3 text-center mb-2">
                    <div className="text-xs uppercase tracking-widest text-[#ffff00]">
                      *** WELCOME TO ***
                    </div>
                    <div className="text-xl font-bold tracking-wide text-white">
                      RIVERBEND CHILDREN'S RELIEF FUND
                    </div>
                    <div className="text-xs italic text-[#c0c0c0]">
                      Serving our valley youth since 1988
                    </div>
                  </div>

                  <div className="bg-[#ffffcc] text-[#cc0000] px-2 py-0.5 text-xs text-center font-sans font-bold mb-3 overflow-hidden whitespace-nowrap">
                    ★ ATTENTION: 2003 Annual Spring Bake Sale Raised $2,410! Thank You Donors! ★
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="col-span-1 bg-[#d6d3ce] p-2 flex flex-col gap-1 text-[11px] font-sans">
                      <div className="font-bold uppercase text-black pb-1">Site Links</div>
                      <a className="text-[#0000cc] underline" href="#">Home</a>
                      <a className="text-[#0000cc] underline" href="#">About Us</a>
                      <a className="text-[#0000cc] underline" href="#">Programs</a>
                      <a className="text-[#0000cc] underline" href="#">Donations</a>
                      <a className="text-[#0000cc] underline" href="#">Guestbook</a>
                      <div className="mt-4 p-1.5 bg-[#f0f0f0] text-center">
                        <span className="material-symbols-outlined text-[24px] text-[#cc9900]">
                          warning
                        </span>
                        <div className="text-[9px] text-red-700 font-bold uppercase mt-1">
                          Under Construction!
                        </div>
                      </div>
                    </div>

                    <div className="col-span-3 p-2 bg-white text-black space-y-3">
                      <h3 className="text-sm font-bold text-[#800000]">Mission Statement</h3>
                      <p className="text-[12px] leading-relaxed">
                        Riverbend Children's Relief is dedicated to providing shelter, winter warm coats, and educational supplies to underprivileged youth. Please click below to view our interactive Flash presentation.
                      </p>

                      <div className="bg-[#eaeaea] p-4 text-center rounded-xs flex flex-col items-center justify-center text-[#555]">
                        <span className="material-symbols-outlined text-[32px] text-[#888]">
                          extension_off
                        </span>
                        <span className="text-[11px] font-sans font-bold mt-1 text-[#333]">
                          Adobe Flash Player Missing
                        </span>
                        <span className="text-[9px] font-sans text-[#777]">
                          intro_movie_v2.swf cannot be displayed
                        </span>
                      </div>

                      <div className="bg-[#f7f5ed] p-2">
                        <div className="font-bold text-[11px] uppercase mb-1">
                          Join Our Mailing List
                        </div>
                        <div className="flex gap-1">
                          <input
                            className="bg-white px-1 py-0.5 text-[10px] w-36 shadow-inner"
                            readOnly
                            type="text"
                            defaultValue="name@email.com"
                          />
                          <button className="bg-[#d4d0c8] px-2 py-0.5 text-[10px] font-sans shadow-xs">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-[10px] font-sans text-[#555]">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold">You are visitor #:</span>
                      <span className="bg-black text-[#00ff00] font-mono px-1.5 py-0.5 tracking-widest text-[11px] font-bold">
                        004127
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-[#888]">
                      <span>Best viewed in 800x600</span>
                      <span className="px-1 bg-[#eee]">HTML 4.01</span>
                    </div>
                  </div>
                </div>

                <div className="text-center font-sans text-[10px] text-[#6e685f] mt-4">
                  © 2003 Riverbend Children's Relief Fund • Webmaster: dave@riverbendfund.org
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Mobile Preview */}
          <div className="xl:col-span-6 bg-[#ffffff] rounded-2xl p-5 shadow-sm space-y-4 border border-[#DDD1BF]/60">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDD1BF]/40">
              <div className="flex items-center gap-2">
                <span className="font-['Fraunces'] text-[20px] text-[#3E322A] font-semibold">
                  Modern Responsive
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#553722] px-2 py-0.5 rounded bg-[#C69C72]/20 font-medium">
                  Mobile Viewport
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px]">
                <span className="material-symbols-outlined text-[14px] text-[#A3AD8F]">
                  check_circle
                </span>
                <span>HTML5 • Accessible • 390px</span>
              </div>
            </div>

            {/* Smartphone Frame Mockup */}
            <div className="flex justify-center w-full py-2">
              <div className="w-[390px] bg-[#ece8e0] rounded-[42px] p-3 shadow-xl ring-8 ring-[#ded9d2]/40 relative">
                {/* Phone Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#3E322A] rounded-full z-30 flex items-center justify-end px-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6f4e37]/40" />
                </div>

                <div className="bg-[#F6F1E9] rounded-[34px] overflow-hidden flex flex-col h-[680px] w-full relative">
                  {/* Status Bar */}
                  <div className="h-10 px-6 pt-3 flex items-center justify-between text-[#3E322A] font-['JetBrains_Mono'] text-[11px] font-semibold tracking-tight shrink-0 select-none z-20">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">
                        signal_cellular_4_bar
                      </span>
                      <span className="material-symbols-outlined text-[14px]">wifi</span>
                      <span className="material-symbols-outlined text-[16px]">battery_full</span>
                    </div>
                  </div>

                  {/* Scrollable Mobile Content */}
                  <div className="flex-1 overflow-y-auto px-4 pb-8 space-y-4 pt-1">
                    <div className="flex items-center justify-between py-2 bg-[#F6F1E9] sticky top-0 z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#6f4e37] flex items-center justify-center text-[#F6F1E9] font-['Fraunces'] text-sm font-bold">
                          R
                        </div>
                        <div className="flex flex-col">
                          <span className="font-['Fraunces'] text-[13px] text-[#3E322A] leading-tight font-semibold">
                            Riverbend Relief
                          </span>
                          <span className="font-['JetBrains_Mono'] text-[9px] text-[#7D6D5F]">
                            Children's Fund
                          </span>
                        </div>
                      </div>
                      <button
                        className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#3E322A]"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">menu</span>
                      </button>
                    </div>

                    <div className="bg-[#6f4e37] text-[#F6F1E9] rounded-2xl p-5 shadow-sm space-y-4">
                      <div className="inline-block px-2 py-0.5 rounded-full bg-[#F6F1E9]/15 text-[10px] font-['JetBrains_Mono'] tracking-wider uppercase">
                        Est. 1988 • Valley Chapter
                      </div>
                      <h2 className="font-['Fraunces'] text-[21px] leading-[26px] text-[#F6F1E9] tracking-tight font-medium">
                        Every child deserves a safe place to learn.
                      </h2>
                      <p className="font-['Inter'] text-[12px] text-[#EDE5D8]/90 leading-relaxed">
                        Providing essential warm gear, learning resources, and community mentorship across the river valley district.
                      </p>
                      <div className="flex flex-col gap-2 pt-1">
                        <button className="w-full py-2.5 px-4 bg-[#C69C72] hover:bg-[#b58c63] text-[#3E322A] font-['Inter'] text-[12px] font-semibold rounded-xl text-center shadow-xs transition-colors cursor-pointer">
                          Donate Now
                        </button>
                        <button className="w-full py-2.5 px-4 bg-[#F6F1E9]/10 hover:bg-[#F6F1E9]/20 text-[#F6F1E9] font-['Inter'] text-[12px] font-medium rounded-xl text-center transition-colors cursor-pointer">
                          Volunteer With Us
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="text-[#7D6D5F] font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider px-1">
                        2024 Direct Impact
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#EDE5D8] flex items-center gap-3.5 shadow-xs">
                        <div className="w-10 h-10 rounded-lg bg-[#ffffff] flex items-center justify-center text-[#553722] shrink-0 shadow-xs">
                          <span className="material-symbols-outlined text-[20px]">school</span>
                        </div>
                        <div>
                          <div className="font-['Fraunces'] text-[20px] text-[#3E322A] font-semibold leading-tight">
                            1,200
                          </div>
                          <div className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                            Children supported annually
                          </div>
                        </div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#EDE5D8] flex items-center gap-3.5 shadow-xs">
                        <div className="w-10 h-10 rounded-lg bg-[#ffffff] flex items-center justify-center text-[#553722] shrink-0 shadow-xs">
                          <span className="material-symbols-outlined text-[20px]">roofing</span>
                        </div>
                        <div>
                          <div className="font-['Fraunces'] text-[20px] text-[#3E322A] font-semibold leading-tight">
                            14
                          </div>
                          <div className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                            Active district relief projects
                          </div>
                        </div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#EDE5D8] flex items-center gap-3.5 shadow-xs">
                        <div className="w-10 h-10 rounded-lg bg-[#ffffff] flex items-center justify-center text-[#553722] shrink-0 shadow-xs">
                          <span className="material-symbols-outlined text-[20px]">
                            volunteer_activism
                          </span>
                        </div>
                        <div>
                          <div className="font-['Fraunces'] text-[20px] text-[#3E322A] font-semibold leading-tight">
                            300+
                          </div>
                          <div className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                            Dedicated community volunteers
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f8f3eb] space-y-2 border border-[#DDD1BF]/60">
                      <div className="flex items-center justify-between">
                        <span className="font-['JetBrains_Mono'] text-[10px] text-[#C69C72] font-semibold uppercase tracking-wider">
                          Latest Initiative
                        </span>
                        <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                          Nov 2024
                        </span>
                      </div>
                      <h4 className="font-['Fraunces'] text-[16px] leading-snug text-[#3E322A] font-semibold">
                        Winter Warmth &amp; Blanket Drive
                      </h4>
                      <p className="font-['Inter'] text-[12px] text-[#52514E] leading-relaxed">
                        Help us collect and distribute 500 thermal winter blankets and coats before early December freezes arrive.
                      </p>
                    </div>

                    <div className="pt-4 pb-2 border-t border-[#DDD1BF] text-center space-y-2">
                      <div className="flex justify-center gap-4 text-[#7D6D5F] font-['JetBrains_Mono'] text-[11px]">
                        <span className="hover:text-[#3E322A] cursor-pointer">Privacy</span>
                        <span>•</span>
                        <span className="hover:text-[#3E322A] cursor-pointer">501(c)(3)</span>
                        <span>•</span>
                        <span className="hover:text-[#3E322A] cursor-pointer">Financials</span>
                      </div>
                      <p className="font-['Inter'] text-[11px] text-[#7D6D5F]">
                        © 2024 Riverbend Children's Relief Fund. Modernized via LegacyForge Calm Engine.
                      </p>
                    </div>
                  </div>

                  <div className="h-6 w-full flex items-center justify-center shrink-0 select-none bg-[#F6F1E9]">
                    <div className="w-32 h-1 bg-[#3E322A]/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Findings & Applied Migrations */}
        <div className="bg-[#ffffff] rounded-2xl p-6 shadow-sm space-y-5 border border-[#DDD1BF]/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div className="space-y-0.5">
              <h3 className="font-['Fraunces'] text-[24px] text-[#3E322A] tracking-tight">
                Audit Findings &amp; Applied Migrations
              </h3>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                Heuristic review applied during automated clean markup extraction.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="px-2.5 py-1 rounded-full bg-[#A3AD8F]/20 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-wider">
                5 Fixes Applied
              </span>
            </div>
          </div>

          <div className="divide-y divide-[#DDD1BF]">
            {/* Fix 1 */}
            <div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="p-1.5 rounded-md bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">extension_off</span>
                </span>
                <div>
                  <div className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                    Dead Flash Movie Intro (
                    <code className="font-['JetBrains_Mono'] text-[10px] bg-[#EDE5D8] px-1 py-0.5 rounded text-[#553722]">
                      intro_movie_v2.swf
                    </code>
                    )
                  </div>
                  <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                    Obsolete NPAPI plugin replaced with semantic semantic modern hero banner card and clear value propositions.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-9 md:pl-0 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#A3AD8F]/25 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  Applied
                </span>
              </div>
            </div>

            {/* Fix 2 */}
            <div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="p-1.5 rounded-md bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">phonelink_erase</span>
                </span>
                <div>
                  <div className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                    Not Mobile Friendly (Fixed 800px Table Grid)
                  </div>
                  <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                    Re-architected with CSS Flexbox and container queries. Optimized for iOS and Android 390px touch targets.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-9 md:pl-0 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#A3AD8F]/25 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  Applied
                </span>
              </div>
            </div>

            {/* Fix 3 */}
            <div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="p-1.5 rounded-md bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">table_rows</span>
                </span>
                <div>
                  <div className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                    Nested Layout Tables (
                    <code className="font-['JetBrains_Mono'] text-[10px] bg-[#EDE5D8] px-1 py-0.5 rounded text-[#553722]">
                      &lt;table cellpadding="0"&gt;
                    </code>
                    )
                  </div>
                  <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                    Strip 4 levels of nested presentational tables. Modernized to semantic &lt;main&gt;, &lt;article&gt;, and stacked modular card components.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-9 md:pl-0 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#A3AD8F]/25 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  Applied
                </span>
              </div>
            </div>

            {/* Fix 4 */}
            <div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="p-1.5 rounded-md bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">link_off</span>
                </span>
                <div>
                  <div className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                    Donation Form Endpoint Broken (
                    <code className="font-['JetBrains_Mono'] text-[10px] bg-[#EDE5D8] px-1 py-0.5 rounded text-[#553722]">
                      /cgi-bin/formmail.pl
                    </code>
                    )
                  </div>
                  <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                    Decommissioned unencrypted Perl script; prepared clean accessible button hooks for modern payment processors.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-9 md:pl-0 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#A3AD8F]/25 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  Applied
                </span>
              </div>
            </div>

            {/* Fix 5 */}
            <div className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="p-1.5 rounded-md bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">accessibility</span>
                </span>
                <div>
                  <div className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                    Missing Image Alternative Text &amp; Contrast Violations
                  </div>
                  <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                    Enriched with full WCAG 2.1 AA compliant contrast ratios and meaningful textual equivalents across all visual items.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-9 md:pl-0 shrink-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#A3AD8F]/25 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] font-medium">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  Applied
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
