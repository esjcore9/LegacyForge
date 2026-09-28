import React from 'react';
import { ScreenId } from '../types';

interface HeaderProps {
  onNavigate: (screen: ScreenId) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#FBF8F3]/90 backdrop-blur-md border-b border-[#DDD1BF] px-6 flex items-center justify-between z-50">
      <div className="flex items-center gap-6">
        <a
          className="flex items-center gap-3 group cursor-pointer"
          data-path="s01-home"
          href="#s01-home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('s01-home');
          }}
        >
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute -top-1 right-1.5 w-1.5 h-1.5 bg-[#C69C72] rotate-45 rounded-[2px]" />
            <div className="flex items-end gap-0.5">
              <div className="flex flex-col gap-0.5 opacity-25">
                <div className="w-1.5 h-1.5 bg-[#3E322A] rounded-[2px]" />
                <div className="w-1.5 h-1.5 bg-[#3E322A] rounded-[2px]" />
              </div>
              <div className="flex flex-col gap-0.5 opacity-60">
                <div className="w-1.5 h-1.5 bg-[#3E322A] rounded-[2px]" />
                <div className="w-1.5 h-1.5 bg-[#3E322A] rounded-[2px]" />
              </div>
              <div className="w-3 h-5 bg-[#3E322A] rounded-r-md" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-['Fraunces'] text-[24px] leading-8 font-medium text-[#3E322A] tracking-tight">
              Legacy
            </span>
            <span className="font-['Fraunces'] text-[24px] leading-8 font-medium text-[#7a5733] tracking-tight">
              Forge
            </span>
          </div>
        </a>
        <div className="hidden md:block h-4 w-px bg-[#DDD1BF]" />
        <span className="hidden md:inline font-['Inter'] text-[12px] text-[#7D6D5F]">
          One box. Every artifact.
        </span>
      </div>

      <div className="flex items-center gap-4">
        <a
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#DDD1BF] bg-[#f8f3eb]/60 hover:bg-[#EDE5D8] hover:text-[#3E322A] transition-colors text-[#7D6D5F] font-['Inter'] text-[12px] cursor-pointer"
          data-path="s12-command-palette"
          href="#s12-command-palette"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('s12-command-palette');
          }}
        >
          <span className="material-symbols-outlined text-[16px]">search</span>
          <span className="hidden sm:inline">Search or run a command</span>
          <kbd className="bg-[#EDE5D8] px-1.5 py-0.5 rounded font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">
            Ctrl K
          </kbd>
        </a>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EDE5D8] font-['Inter'] text-[12px] text-[#3E322A]">
          <span className="w-2 h-2 rounded-full bg-[#A3AD8F]" />
          <span className="font-medium">Ready</span>
        </div>

        <div className="hidden sm:inline-flex px-2.5 py-1 rounded-full border border-[#DDD1BF] bg-transparent font-['JetBrains_Mono'] text-[10px] uppercase font-semibold text-[#7D6D5F]">
          DEMO MODE: ON
        </div>

        <div className="w-8 h-8 rounded-full bg-[#6F4E37] text-white flex items-center justify-center font-['Fraunces'] text-[12px] font-semibold ring-1 ring-[#DDD1BF] shadow-xs">
          LF
        </div>
      </div>
    </header>
  );
};
