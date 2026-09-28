import React from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S11CodeAfterRun: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="px-8 pt-8 pb-14 max-w-[1240px] w-full mx-auto flex flex-col gap-8">
        {/* Top Meta and Header Tray */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#DDD1BF]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#A3AD8F]/20 text-[#3E322A] font-['JetBrains_Mono'] text-[11px] tracking-wider uppercase font-semibold">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                Module 03 • Legacy Code to Python
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EDE5D8] text-[#7D6D5F] font-['JetBrains_Mono'] text-[11px]">
                <span>VB6</span>
                <span className="material-symbols-outlined text-[13px]">arrow_right_alt</span>
                <span>Python 3.12</span>
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase font-['JetBrains_Mono'] tracking-widest bg-[#ece8e0] text-[#7D6D5F] font-semibold">
                Sample output
              </span>
            </div>
            <h1 className="font-['Fraunces'] text-[30px] font-medium text-[#3E322A] tracking-tight">
              Donation Calculator (VB6)
            </h1>
            <p className="font-['Inter'] text-[14px] text-[#7D6D5F] max-w-2xl">
              Port legacy Visual Basic 6 code to modern, runnable Python with typed dataclasses, precision decimal handling, and clean execution.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            <a
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#C69C72] text-[#553722] hover:bg-[#EDE5D8] transition-colors font-['Inter'] text-[14px] font-medium cursor-pointer"
              data-path="s01-home"
              href="#s01-home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s01-home');
              }}
            >
              <span className="material-symbols-outlined text-[18px]">replay</span>
              <span>Start over</span>
            </a>
          </div>
        </header>

        {/* Main Workspace Layout: Diff + Analysis & Execution */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* LEFT: Two-pane Diff Editor (7 Columns) */}
          <section className="xl:col-span-7 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-[13px] uppercase tracking-wider text-[#7D6D5F] font-semibold">
                  Source Migration Diff
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">
                  4 key structural shifts identified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EBD3C4] border border-[#C69C72] inline-block" />
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">VB6 Sub</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#DCE5CF] border border-[#A3AD8F] inline-block ml-2" />
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">Modern Py3</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#DDD1BF] bg-[#FBF8F3] shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)] overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-[#DDD1BF] font-mono text-[13px] leading-[1.7]">
                {/* Left: VB6 Legacy */}
                <div className="p-4 bg-[#EDE5D8]/20 flex flex-col text-[#3E322A] select-text overflow-x-auto">
                  <div className="text-[#7D6D5F] italic mb-3 font-mono text-[12px]">
                    ' Legacy VB6 Module: Tier Calculation
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#EBD3C4]/45 border-l-2 border-[#C69C72]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">01</span>
                      <span>
                        <span className="text-[#553722] font-semibold">Attribute</span>{' '}
                        <span className="text-[#7D6D5F]">VB_Name = "DonationModule"</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 mt-0.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">02</span>
                    <span>
                      <span className="text-[#553722] font-semibold">Public Type</span> DonationRecord
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">03</span>
                    <span className="pl-3">
                      DonorName <span className="text-[#553722] font-semibold">As String</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#EBD3C4]/45 border-l-2 border-[#C69C72]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">04</span>
                      <span className="pl-3">
                        Amount <span className="text-[#553722] font-semibold">As Currency</span>
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#553722] text-white font-mono text-[10px] font-bold shrink-0">
                      1
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">05</span>
                    <span>
                      <span className="text-[#553722] font-semibold">End Type</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-1.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">06</span>
                    <span>
                      <span className="text-[#553722] font-semibold">Public Sub</span> ProcessBatch()
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">07</span>
                    <span className="pl-3">
                      <span className="text-[#553722] font-semibold">Dim</span> Total{' '}
                      <span className="text-[#553722] font-semibold">As Double</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#EBD3C4]/45 border-l-2 border-[#C69C72]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">08</span>
                      <span className="pl-3">
                        <span className="text-[#553722] font-semibold">Dim</span> items(1{' '}
                        <span className="text-[#553722] font-semibold">To</span> 3){' '}
                        <span className="text-[#553722] font-semibold">As Double</span>
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#553722] text-white font-mono text-[10px] font-bold shrink-0">
                      2
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">09</span>
                    <span className="pl-3">items(1) = 1500.00</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">10</span>
                    <span className="pl-3">items(2) = 2500.00</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">11</span>
                    <span className="pl-3">items(3) = 750.00</span>
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#EBD3C4]/45 border-l-2 border-[#C69C72]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">12</span>
                      <span className="pl-3">
                        <span className="text-[#553722] font-semibold">For</span> i = 1{' '}
                        <span className="text-[#553722] font-semibold">To</span> 3
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#553722] text-white font-mono text-[10px] font-bold shrink-0">
                      3
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">13</span>
                    <span className="pl-6">Total = Total + items(i)</span>
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#EBD3C4]/45 border-l-2 border-[#C69C72]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">14</span>
                      <span className="pl-6">Debug.Print "Donation " &amp; i &amp; ": " &amp; items(i)</span>
                    </div>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#553722] text-white font-mono text-[10px] font-bold shrink-0">
                      4
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">15</span>
                    <span className="pl-3">
                      <span className="text-[#553722] font-semibold">Next</span> i
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">16</span>
                    <span className="pl-3">Debug.Print "Total: " &amp; Total</span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-1.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">17</span>
                    <span>
                      <span className="text-[#553722] font-semibold">End Sub</span>
                    </span>
                  </div>
                </div>

                {/* Right: Python 3.12 */}
                <div className="p-4 bg-[#EDE5D8]/40 flex flex-col text-[#3E322A] select-text overflow-x-auto">
                  <div className="text-[#7D6D5F] italic mb-3 font-mono text-[12px]">
                    # Python 3.12 Modernized Port
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">01</span>
                    <span>
                      <span className="text-[#7a5733] font-semibold">from</span> dataclasses{' '}
                      <span className="text-[#7a5733] font-semibold">import</span> dataclass
                    </span>
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">02</span>
                      <span>
                        <span className="text-[#7a5733] font-semibold">from</span> decimal{' '}
                        <span className="text-[#7a5733] font-semibold">import</span> Decimal
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#C69C72] text-white font-mono text-[10px] font-bold shrink-0">
                      1
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-0.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">03</span>
                    <span className="text-[#7D6D5F]">@dataclass(frozen=True)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">04</span>
                    <span>
                      <span className="text-[#7a5733] font-semibold">class</span>{' '}
                      <span className="font-semibold text-[#553722]">DonationRecord</span>:
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">05</span>
                    <span className="pl-3">
                      donor_name: <span className="text-[#7a5733] font-medium">str</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">06</span>
                    <span className="pl-3">amount: Decimal</span>
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F] mt-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">07</span>
                      <span>
                        <span className="text-[#7a5733] font-semibold">def</span>{' '}
                        <span className="font-semibold text-[#553722]">process_batch</span>() -&gt;{' '}
                        <span className="text-[#7a5733] font-medium">None</span>:
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#C69C72] text-white font-mono text-[10px] font-bold shrink-0">
                      2
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">08</span>
                    <span className="pl-3">
                      items: <span className="text-[#7a5733] font-medium">list</span>[Decimal] = [
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">09</span>
                    <span className="pl-6">
                      Decimal(<span className="text-[#5a3517]">"1500.00"</span>),
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">10</span>
                    <span className="pl-6">
                      Decimal(<span className="text-[#5a3517]">"2500.00"</span>),
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">11</span>
                    <span className="pl-6">
                      Decimal(<span className="text-[#5a3517]">"750.00"</span>),
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">12</span>
                    <span className="pl-3">]</span>
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">13</span>
                      <span className="pl-3">
                        <span className="text-[#7a5733] font-semibold">for</span> idx, amount{' '}
                        <span className="text-[#7a5733] font-semibold">in</span>{' '}
                        <span className="text-[#7a5733] font-semibold">enumerate</span>(items, start=1):
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#C69C72] text-white font-mono text-[10px] font-bold shrink-0">
                      3
                    </span>
                  </div>
                  <div className="flex items-center justify-between -mx-4 px-4 py-0.5 rounded-xs bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">14</span>
                      <span className="pl-6">
                        <span className="text-[#7a5733] font-semibold">print</span>(
                        <span className="text-[#5a3517]">f"Donation &#123;idx&#125;: &#123;amount:.2f&#125;"</span>)
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#C69C72] text-white font-mono text-[10px] font-bold shrink-0">
                      4
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-0.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">15</span>
                    <span className="pl-3">
                      total = <span className="text-[#7a5733] font-semibold">sum</span>(items)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">16</span>
                    <span className="pl-3">
                      <span className="text-[#7a5733] font-semibold">print</span>(
                      <span className="text-[#5a3517]">f"Total donations: &#123;total:.2f&#125;"</span>)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-1.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">17</span>
                    <span>
                      <span className="text-[#7a5733] font-semibold">if</span> __name__ =={' '}
                      <span className="text-[#5a3517]">"__main__"</span>:
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-right text-[#7D6D5F] select-none font-mono text-[11px]">18</span>
                    <span className="pl-3">process_batch()</span>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Bar */}
              <div className="p-3 bg-[#EDE5D8]/50 border-t border-[#DDD1BF] flex items-center justify-between font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                <span>Syntax: Modern Python 3.12 (PEP 8 Compliant)</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A3AD8F]" />
                    0 Type warnings
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C69C72]" />
                    Precision guarantee active
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT: Why These Changes + Terminal Output */}
          <section className="xl:col-span-5 flex flex-col gap-6">
            {/* Panel 1: "Why these changes" */}
            <div className="rounded-xl border border-[#DDD1BF] bg-[#ffffff] p-6 shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DDD1BF]">
                <h2 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                  Why these changes
                </h2>
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#7D6D5F]">
                  Analysis
                </span>
              </div>
              <ol className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[10px] font-bold mt-0.5">
                    1
                  </span>
                  <div className="flex flex-col">
                    <span className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                      Currency to Decimal precision
                    </span>
                    <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                      VB6's implicit 64-bit integer <code className="font-['JetBrains_Mono'] text-[10px] px-1 py-0.5 bg-[#EDE5D8] rounded text-[#3E322A]">Currency</code> type replaced with Python's arbitrary-precision <code className="font-['JetBrains_Mono'] text-[10px] px-1 py-0.5 bg-[#EDE5D8] rounded text-[#3E322A]">decimal.Decimal</code> to prevent binary floating-point roundoff errors in donor accounting.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[10px] font-bold mt-0.5">
                    2
                  </span>
                  <div className="flex flex-col">
                    <span className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                      Fixed static arrays to native lists
                    </span>
                    <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                      Replaced rigid 1-indexed bounded buffers with dynamic Python list semantics, simplifying memory lifecycle without manual <code className="font-['JetBrains_Mono'] text-[10px] px-1 py-0.5 bg-[#EDE5D8] rounded text-[#3E322A]">ReDim Preserve</code> overhead.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[10px] font-bold mt-0.5">
                    3
                  </span>
                  <div className="flex flex-col">
                    <span className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                      1-Based looping replaced by enumerate
                    </span>
                    <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                      Preserved historical receipt serial indexing for human-facing output using <code className="font-['JetBrains_Mono'] text-[10px] px-1 py-0.5 bg-[#EDE5D8] rounded text-[#3E322A]">enumerate(..., start=1)</code> while keeping Pythonic zero-based internal sequencing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[10px] font-bold mt-0.5">
                    4
                  </span>
                  <div className="flex flex-col">
                    <span className="font-['Inter'] text-[14px] font-semibold text-[#3E322A]">
                      Debug.Print redirected to stdout streams
                    </span>
                    <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                      Substituted deprecated IDE debug pipe with standard POSIX stdout formatting through f-strings for seamless orchestration in modern serverless containers.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Panel 2: Interactive Terminal & Execution Sandbox (POST-RUN STATE) */}
            <div className="rounded-xl border border-[#DDD1BF] bg-[#ffffff] p-6 shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)] flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#DDE7D3] text-[#4F6B45] font-['JetBrains_Mono'] text-[11px] font-semibold tracking-wide">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Exited with code 0</span>
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] font-medium">
                    Runtime: 14ms
                  </span>
                </div>

                <a
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[#7D6D5F] hover:text-[#3E322A] hover:bg-[#EDE5D8] transition-colors font-['Inter'] text-[12px] font-medium cursor-pointer"
                  data-path="s10-legacy-code-view"
                  href="#s10-legacy-code-view"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('s10-code-before');
                  }}
                >
                  <span className="material-symbols-outlined text-[15px]">backspace</span>
                  <span>Clear terminal</span>
                </a>
              </div>

              <div className="rounded-xl border border-[#DDD1BF] bg-[#EDE5D8] p-4 flex flex-col gap-2 font-['JetBrains_Mono'] text-[13px] leading-[1.7] text-[#3E322A] shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-[#DDD1BF]/60 text-[#7D6D5F] text-[10px]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4F6B45]" />
                    <span>cpython-3.12.2-embedded-sandbox</span>
                  </span>
                  <span>tty1 • UTF-8</span>
                </div>

                <div className="pt-1 select-text space-y-0.5">
                  <div className="flex items-center gap-2 text-[#553722] font-semibold">
                    <span className="text-[#7D6D5F] select-none">$</span>
                    <span>python donations.py</span>
                  </div>
                  <div className="text-[#3E322A] pl-4 font-mono">Donation 1: 1500.00</div>
                  <div className="text-[#3E322A] pl-4 font-mono">Donation 2: 2500.00</div>
                  <div className="text-[#3E322A] pl-4 font-mono">Donation 3: 750.00</div>
                  <div className="text-[#3E322A] pl-4 font-mono font-semibold pt-1 border-t border-[#DDD1BF]/40">
                    Total donations: 4750.00
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 text-[#7D6D5F] text-[10px]">
                  <span className="select-none text-[#7D6D5F]">$</span>
                  <span className="w-2 h-4 bg-[#C69C72] animate-pulse" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px] px-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">format_image_left</span>
                  Deterministic runtime sandbox
                </span>
                <span>Memory: 8.4 MB</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
