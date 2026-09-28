import React, { useEffect } from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S09OldWebDownloadModal: React.FC<ScreenProps> = ({ onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onNavigate('s07-old-web-desktop');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNavigate]);

  return (
    <div className="flex flex-col w-full relative min-w-0">
      {/* UNDERLYING S07 Layout (Dimmed and blurred) */}
      <div
        aria-hidden="true"
        className="flex flex-col w-full p-6 lg:p-8 space-y-6 select-none pointer-events-none opacity-40 filter blur-[0.5px]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DDD1BF]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#9FB0B8]/20 font-['JetBrains_Mono'] text-[10px] text-[#3E322A] uppercase tracking-wider">
              Artifact #8042
            </span>
            <span className="text-[#7D6D5F] font-['Inter'] text-[14px]">/</span>
            <span className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
              Riverbend Children's Relief Fund
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#A3AD8F]/25 text-[#553722] font-['JetBrains_Mono'] text-[10px]">
              Transformation: Complete
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[11px]">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              <span>Processed in 4.2s</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6f4e37] text-white font-['Inter'] text-[14px] font-medium">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Artifact</span>
            </div>
          </div>
        </div>

        {/* 2003 vs Modern Split Layout Simulated */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-6 flex flex-col rounded-2xl bg-[#EDE5D8]/40 border border-[#DDD1BF] p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDD1BF]/70">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">
                Source: index.htm (Original v2.1)
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#ba1a1a] bg-[#ffdad6]/40 px-2 py-0.5 rounded">
                67 Nested Tables
              </span>
            </div>
            <div className="rounded-xl border border-[#DDD1BF] bg-[#ffffff] p-5 space-y-4 font-mono text-[12px] text-[#7D6D5F]">
              &lt;table width="760" border="0" cellpadding="2" cellspacing="0" bgcolor="#EDE5D8"&gt;
            </div>
          </div>
          <div className="xl:col-span-6 flex flex-col rounded-2xl bg-[#ffffff] border border-[#DDD1BF] p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDD1BF]/70">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#3E322A] font-medium">
                Reconstructed HTML5 &amp; CSS Grid
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#3E322A] bg-[#A3AD8F]/20 px-2 py-0.5 rounded">
                WCAG 2.1 AA Compliant
              </span>
            </div>
            <div className="rounded-xl border border-[#DDD1BF] bg-[#F6F1E9] p-5 space-y-4 font-mono text-[12px] text-[#3E322A]">
              &lt;main class="grid grid-cols-1 md:grid-cols-12 gap-6"&gt;
            </div>
          </div>
        </div>
      </div>

      {/* MODAL BACKDROP OVERLAY */}
      <div
        id="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 top-16 bottom-8 bg-[#3E322A]/45 backdrop-blur-[4px] z-50 flex items-center justify-center p-6 left-16"
        onClick={() => onNavigate('s07-old-web-desktop')}
      >
        {/* CENTERED MODAL CARD */}
        <div
          className="relative w-full max-w-[520px] rounded-2xl bg-[#FBF8F3] border border-[#DDD1BF] p-8 md:p-9 shadow-[0_16px_40px_-6px_rgba(62,50,42,0.22),0_8px_16px_-4px_rgba(62,50,42,0.12)] flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Success Icon Badge */}
          <div className="w-14 h-14 rounded-full bg-[#DDE7D3] flex items-center justify-center mb-5 ring-4 ring-[#DDE7D3]/40">
            <span
              className="material-symbols-outlined text-[26px] text-[#4F6B45]"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}
            >
              check_circle
            </span>
          </div>

          {/* Header Typography */}
          <h2
            className="font-['Fraunces'] text-[24px] font-medium text-[#3E322A] tracking-tight mb-2"
            id="modal-title"
          >
            Download complete
          </h2>
          <p className="font-['Inter'] text-[14px] text-[#7D6D5F] max-w-sm mb-6 leading-relaxed">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#3E322A] bg-[#EDE5D8] px-1.5 py-0.5 rounded">
              riverbend-modern.html
            </span>{' '}
            was saved to your device. This is a ready-to-deploy archive specimen.
          </p>

          {/* Artifact Details Pill / Box */}
          <div className="w-full rounded-xl bg-[#EDE5D8] border border-[#DDD1BF] p-4.5 mb-7 text-left">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#DDD1BF]/70">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#ffffff] border border-[#DDD1BF] flex items-center justify-center shrink-0 text-[#553722]">
                  <span className="material-symbols-outlined text-[20px]">html</span>
                </div>
                <div className="min-w-0">
                  <div className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#3E322A] truncate">
                    riverbend-modern.html
                  </div>
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] mt-0.5">
                    18.4 KB • HTML5 + Tailwind CSS
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#DDD1BF] font-['JetBrains_Mono'] text-[10px] text-[#3E322A] shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#A3AD8F]" />
                <span className="font-medium">Production Ready</span>
              </span>
            </div>
            <div className="pt-3 flex items-start gap-2 text-[#7D6D5F] font-['Inter'] text-[12px] leading-snug">
              <span className="material-symbols-outlined text-[16px] text-[#C69C72] shrink-0 mt-0.5">
                verified
              </span>
              <span>Semantic HTML5, zero inline tables, responsive CSS grid, modern form bindings.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center gap-3">
            <a
              className="w-full sm:w-1/3 py-2.5 px-4 rounded-xl border border-[#DDD1BF] bg-transparent hover:bg-[#EDE5D8] hover:text-[#3E322A] text-[#7D6D5F] font-['Inter'] text-[14px] font-medium transition-colors text-center order-2 sm:order-1 cursor-pointer"
              data-path="s01-home"
              href="#s01-home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s01-home');
              }}
            >
              Start over
            </a>
            <a
              className="w-full sm:w-2/3 py-2.5 px-5 rounded-xl bg-[#6F4E37] hover:bg-[#5C3F2B] active:scale-[0.99] text-[#F6F1E9] font-['Inter'] text-[14px] font-medium shadow-[0_4px_12px_-2px_rgba(62,50,42,0.18)] transition-all flex items-center justify-center gap-2 order-1 sm:order-2 cursor-pointer"
              data-path="s07-old-website-view"
              href="#s07-old-website-view"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('s07-old-web-desktop');
              }}
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Back to result</span>
            </a>
          </div>

          {/* Escape hint */}
          <div className="mt-4 font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]/80 flex items-center gap-1">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#EDE5D8] font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] border border-[#DDD1BF]/80">
              ESC
            </kbd>
            <span>to dismiss this confirmation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
