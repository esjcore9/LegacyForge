import React, { useState, useEffect, useRef } from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S12CommandPaletteOverlay: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onNavigate('s01-home');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNavigate]);

  const matches = (text: string) => {
    if (!searchTerm.trim()) return true;
    return text.toLowerCase().includes(searchTerm.toLowerCase().trim());
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Underneath: S01 Home Layout Dimmed and Blurred */}
      <div className="w-full max-w-6xl mx-auto px-6 py-8 select-none pointer-events-none filter blur-[1.5px] opacity-40 transition-all">
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-[#EDE5D8] font-['JetBrains_Mono'] text-[10px] text-[#553722] uppercase font-medium">
              Archival Ingestion Studio
            </span>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
              Catalog Ref. 1904-B
            </span>
          </div>
          <h1 className="font-['Fraunces'] text-[46px] text-[#3E322A] tracking-tight">
            Revive artifacts into living digital fabric.
          </h1>
          <p className="font-['Inter'] text-[16px] text-[#7D6D5F] max-w-2xl">
            Drop yellowed family manuscripts, archival 90s markup, or archaic machine routines into the chamber.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-[#EDE5D8]/60 p-8 shadow-sm mb-10 border border-[#DDD1BF]/60">
          <div className="flex flex-col items-center justify-center text-center py-12 px-4 rounded-xl bg-[#F6F1E9]/80">
            <div className="w-14 h-14 rounded-full bg-[#EDE5D8] flex items-center justify-center text-[#553722] mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">file_upload</span>
            </div>
            <span className="font-['Fraunces'] text-[20px] text-[#3E322A] mb-1">
              Deposit analog or antiquated artifacts
            </span>
            <span className="font-['Inter'] text-[12px] text-[#7D6D5F] max-w-md">
              Accepts high-res camera captures, vintage TAR files, raw scanned ledgers, or legacy script bundles
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-xl bg-[#f8f3eb] p-6 shadow-sm flex flex-col justify-between h-48 border border-[#DDD1BF]/50">
            <div className="flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase">Corpus 01</span>
              <span className="material-symbols-outlined text-[18px] text-[#553722]">edit_note</span>
            </div>
            <div>
              <h3 className="font-['Fraunces'] text-[20px] text-[#3E322A] mb-1">Cursive &amp; Manuscripts</h3>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">Optical deciphering into markdown recipes and inventories.</p>
            </div>
          </div>
          <div className="rounded-xl bg-[#f8f3eb] p-6 shadow-sm flex flex-col justify-between h-48 border border-[#DDD1BF]/50">
            <div className="flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase">Corpus 02</span>
              <span className="material-symbols-outlined text-[18px] text-[#7a5733]">public</span>
            </div>
            <div>
              <h3 className="font-['Fraunces'] text-[20px] text-[#3E322A] mb-1">Web 1.0 Table Soup</h3>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">Refactored to responsive semantic HTML5 layouts.</p>
            </div>
          </div>
          <div className="rounded-xl bg-[#f8f3eb] p-6 shadow-sm flex flex-col justify-between h-48 border border-[#DDD1BF]/50">
            <div className="flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase">Corpus 03</span>
              <span className="material-symbols-outlined text-[18px] text-[#6f4e37]">terminal</span>
            </div>
            <div>
              <h3 className="font-['Fraunces'] text-[20px] text-[#3E322A] mb-1">Antiquated Systems</h3>
              <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">COBOL, VB6 &amp; Pascal transformed to typed Python modules.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warm Scrim Layer */}
      <div
        id="command-backdrop"
        onClick={() => onNavigate('s01-home')}
        className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#3E322A]/45 backdrop-blur-[3px] transition-opacity duration-200"
      >
        {/* Command Palette Card Modal */}
        <div
          aria-label="Command Palette"
          aria-modal="true"
          role="dialog"
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[560px] rounded-2xl bg-[#FBF8F3] shadow-[0_1px_2px_rgba(62,50,42,0.05),0_16px_36px_rgba(62,50,42,0.18)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150 border border-[#DDD1BF]"
        >
          {/* Palette Top Bar */}
          <div className="px-5 py-4 bg-[#ffffff] flex items-center gap-3 border-b border-[#DDD1BF]/60">
            <span className="material-symbols-outlined text-[#553722] text-[22px] shrink-0 select-none">
              search
            </span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                autoFocus
                className="w-full bg-transparent font-['Inter'] text-[16px] text-[#3E322A] placeholder:text-[#7D6D5F]/70 focus:outline-none tracking-tight"
                id="palette-search-input"
                placeholder="Search or run a command..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {!searchTerm && (
                <span className="w-[2px] h-5 bg-[#C69C72] animate-pulse -ml-1 pointer-events-none" />
              )}
            </div>
            <a
              aria-label="Close command palette"
              className="w-7 h-7 rounded-lg bg-[#EDE5D8]/60 hover:bg-[#EDE5D8] text-[#7D6D5F] hover:text-[#3E322A] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              data-path="s01-home"
              href="#s01-home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s01-home');
              }}
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </a>
          </div>

          {/* Actionable Command Body */}
          <div className="p-3 max-h-[440px] overflow-y-auto flex flex-col gap-4 bg-[#FBF8F3]">
            {/* Group 1: Load Sample Artifacts */}
            <div className="flex flex-col gap-1">
              <div className="px-3 py-1.5 font-['JetBrains_Mono'] text-[11px] tracking-[0.08em] uppercase font-medium text-[#7D6D5F]/90 select-none flex items-center justify-between">
                <span>Load sample</span>
                <span className="text-[10px] text-[#7D6D5F]/60 lowercase tracking-normal">
                  instant sandbox data
                </span>
              </div>

              {/* Item 1: Handwriting to Text */}
              {matches("Handwriting to Text Mamie's heirloom apple tart recipe card") && (
                <a
                  className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#EDE5D8] focus:bg-[#EDE5D8] transition-all duration-150 text-left outline-none cursor-pointer"
                  data-path="s04-handwriting-view"
                  href="#s04-handwriting-view"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('s05-shopping-list');
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#C69C72]/20 flex items-center justify-center text-[#553722] shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors truncate">
                        Handwriting to Text
                      </span>
                      <span className="font-['Inter'] text-[12px] text-[#7D6D5F] truncate">
                        Mamie's heirloom apple tart recipe card (1948)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-3">
                    <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] group-hover:bg-[#ffffff] group-hover:text-[#553722] font-['JetBrains_Mono'] text-[10px] transition-colors">
                      Sample 01
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#7D6D5F]/40 group-hover:text-[#553722] group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </a>
              )}

              {/* Item 2: Old Web to Modern Web */}
              {matches("Old Web to Modern Web Riverbend Children's Relief Fund portal") && (
                <a
                  className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#EDE5D8] focus:bg-[#EDE5D8] transition-all duration-150 text-left outline-none cursor-pointer"
                  data-path="s07-old-website-view"
                  href="#s07-old-website-view"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('s07-old-web-desktop');
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#9FB0B8]/25 flex items-center justify-center text-[#3E322A] shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">language</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors truncate">
                        Old Web to Modern Web
                      </span>
                      <span className="font-['Inter'] text-[12px] text-[#7D6D5F] truncate">
                        Riverbend Children's Relief Fund portal (HTML 3.2)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-3">
                    <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] group-hover:bg-[#ffffff] group-hover:text-[#553722] font-['JetBrains_Mono'] text-[10px] transition-colors">
                      Sample 02
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#7D6D5F]/40 group-hover:text-[#553722] group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </a>
              )}

              {/* Item 3: Legacy Code to Python */}
              {matches("Legacy Code to Python Actuarial donation calculator subroutine") && (
                <a
                  className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#EDE5D8] focus:bg-[#EDE5D8] transition-all duration-150 text-left outline-none cursor-pointer"
                  data-path="s10-legacy-code-view"
                  href="#s10-legacy-code-view"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('s10-code-before');
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#A3AD8F]/25 flex items-center justify-center text-[#3E322A] shrink-0 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">terminal</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors truncate">
                        Legacy Code to Python
                      </span>
                      <span className="font-['Inter'] text-[12px] text-[#7D6D5F] truncate">
                        Actuarial donation calculator subroutine (VB6, 1999)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-3">
                    <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] group-hover:bg-[#ffffff] group-hover:text-[#553722] font-['JetBrains_Mono'] text-[10px] transition-colors">
                      Sample 03
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#7D6D5F]/40 group-hover:text-[#553722] group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </a>
              )}
            </div>

            <div className="w-full h-px bg-[#EDE5D8] my-0.5" />

            {/* Group 2: Go to Views */}
            <div className="flex flex-col gap-1">
              <div className="px-3 py-1.5 font-['JetBrains_Mono'] text-[11px] tracking-[0.08em] uppercase font-medium text-[#7D6D5F]/90 select-none">
                Go to
              </div>

              {/* Item 4: Home */}
              {matches("Home Clean intake canvas & recent processing history") && (
                <a
                  className="group flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#EDE5D8] focus:bg-[#EDE5D8] transition-all duration-150 text-left outline-none cursor-pointer"
                  data-path="s01-home"
                  href="#s01-home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('s01-home');
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#7D6D5F] group-hover:text-[#553722] shrink-0 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">home</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors">
                        Home
                      </span>
                      <span className="font-['Inter'] text-[12px] text-[#7D6D5F] truncate">
                        Clean intake canvas &amp; recent processing history
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-3">
                    <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] group-hover:bg-[#ffffff] group-hover:text-[#553722] font-['JetBrains_Mono'] text-[10px] transition-colors">
                      Jump
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#7D6D5F]/40 group-hover:text-[#553722] group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </a>
              )}

              {/* Item 5: Shopping List */}
              {matches("Shopping list Parsed pantry quantities from grandmother's card") && (
                <a
                  className="group flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#EDE5D8] focus:bg-[#EDE5D8] transition-all duration-150 text-left outline-none cursor-pointer"
                  data-path="s05-shopping-list-view"
                  href="#s05-shopping-list-view"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('s05-shopping-list');
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#7D6D5F] group-hover:text-[#553722] shrink-0 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">checklist</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors">
                        Shopping list (Handwriting)
                      </span>
                      <span className="font-['Inter'] text-[12px] text-[#7D6D5F] truncate">
                        Parsed pantry quantities from grandmother's card
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-3">
                    <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] group-hover:bg-[#ffffff] group-hover:text-[#553722] font-['JetBrains_Mono'] text-[10px] transition-colors">
                      View
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#7D6D5F]/40 group-hover:text-[#553722] group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </a>
              )}

              {/* Item 6: Cook Mode */}
              {matches("Cook mode High-contrast distraction-free kitchen timer view") && (
                <a
                  className="group flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#EDE5D8] focus:bg-[#EDE5D8] transition-all duration-150 text-left outline-none cursor-pointer"
                  data-path="s06-cook-mode-view"
                  href="#s06-cook-mode-view"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('s06-cook-mode');
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#7D6D5F] group-hover:text-[#553722] shrink-0 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">skillet</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors">
                        Cook mode (Handwriting)
                      </span>
                      <span className="font-['Inter'] text-[12px] text-[#7D6D5F] truncate">
                        High-contrast, distraction-free kitchen timer view
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-3">
                    <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] group-hover:bg-[#ffffff] group-hover:text-[#553722] font-['JetBrains_Mono'] text-[10px] transition-colors">
                      View
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#7D6D5F]/40 group-hover:text-[#553722] group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </a>
              )}

              {/* Item 7: Mobile preview */}
              {matches("Mobile preview Touch-friendly responsive rendering of Riverbend") && (
                <a
                  className="group flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#EDE5D8] focus:bg-[#EDE5D8] transition-all duration-150 text-left outline-none cursor-pointer"
                  data-path="s08-mobile-preview-view"
                  href="#s08-mobile-preview-view"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('s08-old-web-mobile');
                  }}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#7D6D5F] group-hover:text-[#553722] shrink-0 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">smartphone</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-['Inter'] text-[14px] font-medium text-[#3E322A] group-hover:text-[#553722] transition-colors">
                        Mobile preview (Web)
                      </span>
                      <span className="font-['Inter'] text-[12px] text-[#7D6D5F] truncate">
                        Touch-friendly responsive rendering of Riverbend
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-3">
                    <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] group-hover:bg-[#ffffff] group-hover:text-[#553722] font-['JetBrains_Mono'] text-[10px] transition-colors">
                      View
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#7D6D5F]/40 group-hover:text-[#553722] group-hover:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Palette Footer */}
          <div className="px-5 py-3 bg-[#f8f3eb] flex items-center justify-between select-none border-t border-[#DDD1BF]/60">
            <div className="flex items-center gap-4 font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-[#EDE5D8] text-[#3E322A] font-semibold">↑</span>
                <span className="px-1.5 py-0.5 rounded bg-[#EDE5D8] text-[#3E322A] font-semibold">↓</span>
                <span className="text-[#7D6D5F] ml-0.5">navigate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-[#EDE5D8] text-[#3E322A] font-semibold">↵</span>
                <span className="text-[#7D6D5F] ml-0.5">select</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-[#EDE5D8] text-[#3E322A] font-semibold">Esc</span>
                <span className="text-[#7D6D5F] ml-0.5">dismiss</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3AD8F]" />
              <span>7 Commands indexed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
