import React, { useState } from 'react';
import { ScreenId } from '../types';

interface SidebarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onNavigate }) => {
  const [historyOpen, setHistoryOpen] = useState(false);

  const isOldWebActive =
    currentScreen === 's07-old-web-desktop' ||
    currentScreen === 's08-old-web-mobile' ||
    currentScreen === 's09-download-modal';
  const isHandwritingActive =
    currentScreen === 's04-handwriting' ||
    currentScreen === 's05-shopping-list' ||
    currentScreen === 's06-cook-mode';
  const isCodeActive =
    currentScreen === 's10-code-before' || currentScreen === 's11-code-after';

  return (
    <>
      <aside className="fixed left-0 top-16 bottom-8 w-16 bg-[#f8f3eb] border-r border-[#DDD1BF] flex flex-col items-center py-4 px-2 shrink-0 z-40 select-none">
        {/* History Quick Trigger */}
        <button
          aria-label="History (3 artifacts)"
          title="History (3 artifacts)"
          onClick={() => setHistoryOpen(!historyOpen)}
          className="relative w-10 h-10 rounded-xl bg-[#FBF8F3] border border-[#DDD1BF] hover:border-[#C69C72] flex items-center justify-center text-[#3E322A] hover:bg-[#EDE5D8] transition-colors shadow-xs group"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px] text-[#3E322A] group-hover:text-[#6F4E37] transition-colors">
            history
          </span>
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#6F4E37] text-white text-[10px] flex items-center justify-center font-['JetBrains_Mono'] font-bold leading-none shadow-sm">
            3
          </span>
        </button>

        {/* Vertical divider */}
        <div className="w-8 h-px bg-[#DDD1BF]/70 my-3" />

        {/* Quick Nav Artifact Rails matching all spec xpaths */}
        <nav className="flex flex-col items-center gap-2.5 w-full" aria-label="Archival History">
          {/* Artifact 1: Old Web */}
          <a
            data-path="s07-old-website-view"
            href="#s07-old-website-view"
            title="Old Web: Riverbend Children's Relief (1999)"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('s07-old-web-desktop');
            }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isOldWebActive
                ? 'bg-[#EDE5D8] border-l-4 border-[#C69C72] text-[#6F4E37] shadow-xs'
                : 'text-[#7D6D5F] hover:bg-[#EDE5D8] hover:text-[#3E322A]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">public</span>
          </a>

          {/* Artifact 2: Handwriting (leads to S05 as specified in navigation flow) */}
          <a
            data-path="s04-handwriting-view"
            href="#s04-handwriting-view"
            title="Handwriting: Mamie's Apple Tart (1954)"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('s05-shopping-list');
            }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isHandwritingActive
                ? 'bg-[#EDE5D8] border-l-4 border-[#C69C72] text-[#6F4E37] shadow-xs'
                : 'text-[#7D6D5F] hover:bg-[#EDE5D8] hover:text-[#3E322A]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">edit_note</span>
          </a>

          {/* Artifact 3: Legacy Code */}
          <a
            data-path="s10-legacy-code-view"
            href="#s10-legacy-code-view"
            title="Legacy Code: Donation Calculator (VB6)"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('s10-code-before');
            }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isCodeActive
                ? 'bg-[#EDE5D8] border-l-4 border-[#C69C72] text-[#6F4E37] shadow-xs'
                : 'text-[#7D6D5F] hover:bg-[#EDE5D8] hover:text-[#3E322A]'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">terminal</span>
          </a>
        </nav>
      </aside>

      {/* Flyout Drawer when History button is clicked */}
      {historyOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#3E322A]/20 backdrop-blur-[2px] transition-opacity"
          onClick={() => setHistoryOpen(false)}
        >
          <div
            className="fixed left-16 top-16 bottom-8 w-72 bg-[#FBF8F3] border-r border-[#DDD1BF] shadow-xl p-4 flex flex-col gap-4 overflow-y-auto z-50 animate-in slide-in-from-left duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#DDD1BF]">
              <div>
                <h3 className="font-['Fraunces'] text-[18px] text-[#3E322A] font-semibold">
                  History
                </h3>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase">
                  3 artifacts recorded
                </span>
              </div>
              <button
                onClick={() => setHistoryOpen(false)}
                className="w-7 h-7 rounded-lg bg-[#EDE5D8] text-[#7D6D5F] hover:text-[#3E322A] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {/* Card 1 */}
              <div
                onClick={() => {
                  onNavigate('s07-old-web-desktop');
                  setHistoryOpen(false);
                }}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isOldWebActive
                    ? 'border-[#C69C72] bg-[#EDE5D8]/70 shadow-xs'
                    : 'border-[#DDD1BF] bg-[#FBF8F3] hover:bg-[#EDE5D8]/40'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-[#7D6D5F] font-['JetBrains_Mono'] mb-1">
                  <span>Old website • 2 min ago</span>
                  <span className="text-[#6F4E37] font-semibold">Reload</span>
                </div>
                <div className="font-['Fraunces'] text-[14px] text-[#3E322A] font-medium">
                  Riverbend Children's Relief Fund
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-[10px] text-[#7D6D5F]">
                  <span className="px-1.5 py-0.5 rounded bg-[#EDE5D8]">HTML 3.2</span>
                  <span>→</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#A3AD8F]/25 text-[#3E322A] font-medium">
                    Grid HTML5
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => {
                  onNavigate('s05-shopping-list');
                  setHistoryOpen(false);
                }}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isHandwritingActive
                    ? 'border-[#C69C72] bg-[#EDE5D8]/70 shadow-xs'
                    : 'border-[#DDD1BF] bg-[#FBF8F3] hover:bg-[#EDE5D8]/40'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-[#7D6D5F] font-['JetBrains_Mono'] mb-1">
                  <span>Handwriting • 1 hr ago</span>
                  <span className="text-[#6F4E37] font-semibold">Reload</span>
                </div>
                <div className="font-['Fraunces'] text-[14px] text-[#3E322A] font-medium">
                  Mamie's apple tart card
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-[10px] text-[#7D6D5F]">
                  <span className="px-1.5 py-0.5 rounded bg-[#EDE5D8]">Cursive 1954</span>
                  <span>→</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#C69C72]/20 text-[#6F4E37] font-medium">
                    Structured JSON
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div
                onClick={() => {
                  onNavigate('s10-code-before');
                  setHistoryOpen(false);
                }}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isCodeActive
                    ? 'border-[#C69C72] bg-[#EDE5D8]/70 shadow-xs'
                    : 'border-[#DDD1BF] bg-[#FBF8F3] hover:bg-[#EDE5D8]/40'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-[#7D6D5F] font-['JetBrains_Mono'] mb-1">
                  <span>Code • Yesterday</span>
                  <span className="text-[#6F4E37] font-semibold">Reload</span>
                </div>
                <div className="font-['Fraunces'] text-[14px] text-[#3E322A] font-medium">
                  Donation calculator (VB6)
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-[10px] text-[#7D6D5F]">
                  <span className="px-1.5 py-0.5 rounded bg-[#EDE5D8]">VB6 Monolith</span>
                  <span>→</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#A3AD8F]/25 text-[#3E322A] font-medium">
                    Python 3.12
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
