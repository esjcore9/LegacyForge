import React from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S10CodeBeforeRun: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="px-6 lg:px-10 py-6 max-w-[1400px] mx-auto w-full flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#DDD1BF]">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#A3AD8F]/20 text-[#3E322A] font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3AD8F]" />
                MODULE 03 • LEGACY CODE TO PYTHON
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[11px] font-medium">
                VB6 &gt; Python 3
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] font-['JetBrains_Mono'] text-[11px]">
                Sample output
              </span>
            </div>
            <h1 className="font-['Fraunces'] text-[30px] font-medium text-[#3E322A] tracking-tight">
              Donation Calculator (VB6)
            </h1>
            <p className="font-['Inter'] text-[14px] text-[#7D6D5F]">
              Port legacy Visual Basic 6 code to modern, runnable Python with structural type safety.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s01-home');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[#3E322A] font-['Inter'] text-[12px] hover:underline transition-all cursor-pointer"
              data-path="s01-home"
              href="#s01-home"
            >
              <span className="material-symbols-outlined text-[16px]">replay</span>
              <span>Start over</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Code diff + Why these changes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden bg-[#ffffff] shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)] border border-[#DDD1BF]/60">
              <div className="grid grid-cols-1 md:grid-cols-2 bg-[#EDE5D8] px-4 py-2.5 border-b border-[#DDD1BF]/60">
                <div className="flex items-center justify-between pr-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7a5733]" />
                    <span className="font-['Fraunces'] text-[15px] font-semibold text-[#3E322A]">
                      Legacy (VB6)
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase tracking-wider">
                    Source • 1998
                  </span>
                </div>
                <div className="hidden md:flex items-center justify-between pl-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A3AD8F]" />
                    <span className="font-['Fraunces'] text-[15px] font-semibold text-[#3E322A]">
                      Python 3
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase tracking-wider">
                    Target • v3.12
                  </span>
                </div>
              </div>

              {/* Diff Code Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 text-[13px] font-['JetBrains_Mono'] leading-[1.7] overflow-x-auto bg-[#FBF8F3] divide-y md:divide-y-0 md:divide-x divide-[#DDD1BF]/40">
                {/* Left: VB6 */}
                <div className="flex flex-col select-text">
                  <div className="flex items-center px-2 py-0.5 hover:bg-[#EDE5D8]/40 transition-colors text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F]/60 text-[11px]">01</span>
                    <span className="w-6 shrink-0" />
                    <code className="text-[#3E322A] font-medium">Private Sub cmdCalc_Click()</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#EBD3C4]/45 border-l-2 border-[#7a5733]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">02</span>
                    <span className="w-6 shrink-0 text-[#7a5733] font-bold text-[12px] select-none text-center">-</span>
                    <code className="text-[#7D6D5F] italic">    ' Error handling suppresses failures silently</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#EBD3C4]/60 border-l-2 border-[#C69C72] text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">03</span>
                    <span className="w-6 shrink-0 flex items-center justify-center select-none">
                      <span className="w-4 h-4 rounded-full bg-[#553722] text-white text-[10px] flex items-center justify-center font-bold">1</span>
                    </span>
                    <code className="font-semibold text-[#553722]">    On Error Resume Next</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#EBD3C4]/60 border-l-2 border-[#C69C72] text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">04</span>
                    <span className="w-6 shrink-0 flex items-center justify-center select-none">
                      <span className="w-4 h-4 rounded-full bg-[#553722] text-white text-[10px] flex items-center justify-center font-bold">2</span>
                    </span>
                    <code className="font-semibold text-[#553722]">    Dim total As Variant</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#EBD3C4]/45 border-l-2 border-[#7a5733]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">05</span>
                    <span className="w-6 shrink-0 text-[#7a5733] font-bold text-[12px] select-none text-center">-</span>
                    <code>    Dim i As Integer</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 hover:bg-[#EDE5D8]/40 transition-colors text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F]/60 text-[11px]">06</span>
                    <span className="w-6 shrink-0" />
                    <code>    total = 0</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 hover:bg-[#EDE5D8]/40 transition-colors text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F]/60 text-[11px]">07</span>
                    <span className="w-6 shrink-0" />
                    <code>    For i = 1 To 3</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#EBD3C4]/45 border-l-2 border-[#7a5733]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">08</span>
                    <span className="w-6 shrink-0 text-[#7a5733] font-bold text-[12px] select-none text-center">-</span>
                    <code>        total = total + Val(Text1(i).Text)</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 hover:bg-[#EDE5D8]/40 transition-colors text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F]/60 text-[11px]">09</span>
                    <span className="w-6 shrink-0" />
                    <code>    Next i</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#EBD3C4]/60 border-l-2 border-[#C69C72] text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">10</span>
                    <span className="w-6 shrink-0 flex items-center justify-center select-none">
                      <span className="w-4 h-4 rounded-full bg-[#553722] text-white text-[10px] flex items-center justify-center font-bold">3</span>
                    </span>
                    <code className="font-semibold text-[#553722]">    MsgBox "Total donations: " &amp; total</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 hover:bg-[#EDE5D8]/40 transition-colors text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F]/60 text-[11px]">11</span>
                    <span className="w-6 shrink-0" />
                    <code className="font-medium text-[#3E322A]">End Sub</code>
                  </div>
                </div>

                {/* Right: Python 3 */}
                <div className="flex flex-col select-text">
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F] text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">01</span>
                    <span className="w-6 shrink-0 flex items-center justify-center select-none">
                      <span className="w-4 h-4 rounded-full bg-[#A3AD8F] text-[#3E322A] text-[10px] flex items-center justify-center font-bold">2</span>
                    </span>
                    <code className="font-medium text-[#3E322A]">def total_donations(amounts: list[float]) -&gt; float:</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/40 border-l-2 border-[#A3AD8F]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">02</span>
                    <span className="w-6 shrink-0 text-[#A3AD8F] font-bold text-[12px] select-none text-center">+</span>
                    <code>    return sum(amounts)</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 opacity-40">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F]/50 text-[11px]">03</span>
                    <span className="w-6 shrink-0" />
                    <code>&nbsp;</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/40 border-l-2 border-[#A3AD8F]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">04</span>
                    <span className="w-6 shrink-0 text-[#A3AD8F] font-bold text-[12px] select-none text-center">+</span>
                    <code>def main() -&gt; None:</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/40 border-l-2 border-[#A3AD8F]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">05</span>
                    <span className="w-6 shrink-0 text-[#A3AD8F] font-bold text-[12px] select-none text-center">+</span>
                    <code>    amounts = [1500.0, 2500.0, 750.0]</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F] text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">06</span>
                    <span className="w-6 shrink-0 flex items-center justify-center select-none">
                      <span className="w-4 h-4 rounded-full bg-[#A3AD8F] text-[#3E322A] text-[10px] flex items-center justify-center font-bold">1</span>
                    </span>
                    <code className="font-medium text-[#3E322A]">    try:</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/40 border-l-2 border-[#A3AD8F]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">07</span>
                    <span className="w-6 shrink-0 text-[#A3AD8F] font-bold text-[12px] select-none text-center">+</span>
                    <code>        for i, amount in enumerate(amounts, start=1):</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F] text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">08</span>
                    <span className="w-6 shrink-0 flex items-center justify-center select-none">
                      <span className="w-4 h-4 rounded-full bg-[#A3AD8F] text-[#3E322A] text-[10px] flex items-center justify-center font-bold">4</span>
                    </span>
                    <code className="font-medium text-[#3E322A]">            print(f"Donation &#123;i&#125;: &#123;amount:.2f&#125;")</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F] text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">09</span>
                    <span className="w-6 shrink-0 flex items-center justify-center select-none">
                      <span className="w-4 h-4 rounded-full bg-[#A3AD8F] text-[#3E322A] text-[10px] flex items-center justify-center font-bold">3</span>
                    </span>
                    <code className="font-medium text-[#3E322A]">        print(f"Total donations: &#123;total_donations(amounts):.2f&#125;")</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/55 border-l-2 border-[#A3AD8F] text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">10</span>
                    <span className="w-6 shrink-0 flex items-center justify-center select-none">
                      <span className="w-4 h-4 rounded-full bg-[#A3AD8F] text-[#3E322A] text-[10px] flex items-center justify-center font-bold">1</span>
                    </span>
                    <code className="font-medium text-[#3E322A]">    except (TypeError, ValueError) as err:</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/40 border-l-2 border-[#A3AD8F]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">11</span>
                    <span className="w-6 shrink-0 text-[#A3AD8F] font-bold text-[12px] select-none text-center">+</span>
                    <code>        print(f"Invalid amount: &#123;err&#125;")</code>
                  </div>
                  <div className="flex items-center px-2 py-0.5 bg-[#DCE5CF]/40 border-l-2 border-[#A3AD8F]/50 text-[#3E322A]">
                    <span className="w-9 shrink-0 text-right pr-3 select-none text-[#7D6D5F] text-[11px]">13</span>
                    <span className="w-6 shrink-0 text-[#A3AD8F] font-bold text-[12px] select-none text-center">+</span>
                    <code>main()</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Sandbox Runner Panel */}
            <div className="rounded-xl p-5 bg-[#ffffff] shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)] border border-[#DDD1BF]/50 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#553722]">
                    <span className="material-symbols-outlined text-[18px]">terminal</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Fraunces'] text-[16px] text-[#3E322A]">
                      Pyodide Runtime Sandbox
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                      Isolated in-browser WebAssembly execution environment
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EDE5D8] font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] border border-[#DDD1BF]/60">
                    <span className="w-2 h-2 rounded-full bg-[#A3AD8F]" />
                    <span>Pyodide 0.26.1 ready</span>
                  </span>
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6f4e37] text-white hover:bg-[#7a5733] transition-all shadow-[0_4px_12px_-2px_rgba(62,50,42,0.12)] active:scale-[0.99] font-['Inter'] text-[14px] font-medium shrink-0 cursor-pointer"
                    data-path="s11-legacy-code-run"
                    href="#s11-legacy-code-run"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('s11-code-after');
                    }}
                  >
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                    <span>Run in Sandbox</span>
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-[#DDD1BF]/80 bg-[#EDE5D8]/70 overflow-hidden flex flex-col font-['JetBrains_Mono']">
                <div className="flex items-center justify-between px-3.5 py-2 bg-[#EDE5D8] border-b border-[#DDD1BF]/70 text-[11px] text-[#7D6D5F]">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C69C72]" />
                      <span className="font-medium text-[#3E322A]">tty0 • console output</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#7D6D5F]/80">Memory: &lt; 14 MB</span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#ffffff]/80 text-[10px] text-[#3E322A] font-semibold">
                      Python 3.12 (WASM)
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-1.5 text-[13px] leading-relaxed min-h-[96px]">
                  <div className="flex items-baseline gap-2 text-[#7D6D5F]">
                    <span className="text-[#7a5733] font-bold select-none text-[12px]">&gt;</span>
                    <span className="text-[#7D6D5F] text-[12px]">sandbox initialized with stdout pipe.</span>
                  </div>
                  <div className="flex items-baseline gap-2 text-[#3E322A]">
                    <span className="text-[#7a5733] font-bold select-none text-[12px]">&gt;</span>
                    <span className="italic text-[#7D6D5F]">
                      Ready. Press <strong className="font-semibold text-[#3E322A] not-italic">Run in Sandbox</strong> to execute translated Python code.
                    </span>
                    <span className="inline-block w-2 h-3.5 bg-[#553722]/70 animate-pulse ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why these changes */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="rounded-xl p-5 bg-[#ffffff] shadow-[0_4px_12px_-2px_rgba(62,50,42,0.05)] flex flex-col gap-4 border border-[#DDD1BF]/60">
              <div className="flex items-center justify-between">
                <h2 className="font-['Fraunces'] text-[18px] font-semibold text-[#3E322A]">
                  Why these changes
                </h2>
                <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] font-medium">
                  4 Key Refactors
                </span>
              </div>

              <div className="flex flex-col gap-3.5">
                <div className="p-3.5 rounded-lg bg-[#f8f3eb] flex items-start gap-3 transition-colors hover:bg-[#EDE5D8]">
                  <span className="w-5 h-5 rounded-full bg-[#553722] text-white text-[11px] font-['JetBrains_Mono'] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-['Inter'] text-[13px] font-medium text-[#3E322A]">
                      Explicit Exception Boundaries
                    </span>
                    <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-snug">
                      <code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">
                        On Error Resume Next
                      </code>{' '}
                      became <code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">try/except</code> with specific exceptions, so real errors are no longer silently ignored.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#f8f3eb] flex items-start gap-3 transition-colors hover:bg-[#EDE5D8]">
                  <span className="w-5 h-5 rounded-full bg-[#553722] text-white text-[11px] font-['JetBrains_Mono'] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-['Inter'] text-[13px] font-medium text-[#3E322A]">
                      Strong Static Typing
                    </span>
                    <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-snug">
                      <code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">
                        Variant
                      </code>{' '}
                      became typed values (<code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">list[float]</code>, <code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">float</code>), which makes the code checkable and self-documenting.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#f8f3eb] flex items-start gap-3 transition-colors hover:bg-[#EDE5D8]">
                  <span className="w-5 h-5 rounded-full bg-[#553722] text-white text-[11px] font-['JetBrains_Mono'] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-['Inter'] text-[13px] font-medium text-[#3E322A]">
                      Non-Blocking Terminal I/O
                    </span>
                    <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-snug">
                      <code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">
                        MsgBox
                      </code>{' '}
                      became <code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">print</code>, which works in any terminal instead of blocking on an OS modal dialog.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#f8f3eb] flex items-start gap-3 transition-colors hover:bg-[#EDE5D8]">
                  <span className="w-5 h-5 rounded-full bg-[#553722] text-white text-[11px] font-['JetBrains_Mono'] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-['Inter'] text-[13px] font-medium text-[#3E322A]">
                      Safe Numerical String Formatting
                    </span>
                    <p className="font-['Inter'] text-[12px] text-[#7D6D5F] leading-snug">
                      String concatenation with <code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">&amp;</code> became an f-string with fixed-precision number formatting (<code className="font-['JetBrains_Mono'] text-[11px] bg-[#EDE5D8] px-1 rounded text-[#553722]">.2f</code>).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Archival Provenance */}
            <div className="rounded-xl p-5 bg-[#EDE5D8]/60 flex flex-col gap-3 border border-[#DDD1BF]/60">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#7a5733]">verified</span>
                <span className="font-['Fraunces'] text-[15px] font-semibold text-[#3E322A]">
                  Archival Provenance
                </span>
              </div>
              <div className="flex flex-col gap-2 font-['Inter'] text-[12px] text-[#7D6D5F]">
                <div className="flex justify-between">
                  <span>Source artifact:</span>
                  <span className="font-['JetBrains_Mono'] text-[#3E322A]">DONATE.FRM (VB6 Form)</span>
                </div>
                <div className="flex justify-between">
                  <span>Extracted logic:</span>
                  <span className="font-['JetBrains_Mono'] text-[#3E322A]">cmdCalc_Click handler</span>
                </div>
                <div className="flex justify-between">
                  <span>Translation model:</span>
                  <span className="font-['JetBrains_Mono'] text-[#3E322A]">Calm AST v2.4</span>
                </div>
                <div className="flex justify-between">
                  <span>Static analysis:</span>
                  <span className="font-['JetBrains_Mono'] text-[#A3AD8F] font-semibold">
                    Passed (0 warnings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
