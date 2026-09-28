import React, { useState } from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S04HandwritingSearchableText: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('pommes');

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-7xl mx-auto w-full px-6 py-8 flex flex-col gap-8">
        {/* 1. Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-[#C69C72]/20 text-[#6f4e37] font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider font-semibold">
                Module 01 • Handwriting to Text
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[#52514E] font-['JetBrains_Mono'] text-[10px] uppercase tracking-wide">
                Sample output
              </span>
            </div>
            <h1 className="font-['Fraunces'] text-[30px] leading-[38px] font-medium text-[#3E322A] tracking-tight">
              Tarte aux pommes de Mamie
            </h1>
            <p className="font-['Inter'] text-[14px] text-[#7D6D5F] max-w-xl">
              Turn handwritten family records, vintage index cards, and kitchen journals into clean, searchable, structured culinary data.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('s01-home')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#EDE5D8] hover:bg-[#ece8e0] transition-colors text-[#3E322A] font-['JetBrains_Mono'] text-[11px] cursor-pointer group"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px] text-[#7D6D5F] group-hover:-rotate-90 transition-transform duration-300">
                replay
              </span>
              <span>Start over</span>
            </button>
            <button
              onClick={() => alert('Document exported to culinary JSON / Markdown.')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6f4e37] text-white hover:bg-[#7a5733] font-['JetBrains_Mono'] text-[11px] transition-colors shadow-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">file_download</span>
              <span>Export Document</span>
            </button>
          </div>
        </header>

        {/* 2. Top Split View: Card vs Live Monospace Transcription */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT CARD: Vintage Index Card (1954) */}
          <div className="relative bg-[#EDE5D8]/70 rounded-xl p-6 shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C69C72]" />
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#3E322A] font-semibold uppercase tracking-wider">
                  Original Artifact (1954)
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                3" × 5" Manilla Index Card • 600 DPI
              </span>
            </div>

            {/* The physical index card replica */}
            <div className="relative bg-[#FAF4E8] rounded-md p-7 shadow-md transition-all duration-300 border border-[#DDD1BF]/60">
              <div className="absolute inset-0 pointer-events-none rounded-md opacity-35 bg-[repeating-linear-gradient(0deg,transparent,transparent_23px,#d8c4b2_24px)]" />
              <div className="absolute top-0 bottom-0 left-12 w-0.5 bg-[#C69C72]/25 pointer-events-none" />
              <div className="absolute inset-x-0 top-1/3 h-0.5 bg-[#C69C72]/70 shadow-[0_0_12px_rgba(198,156,114,0.8)] pointer-events-none" />

              <div className="relative z-10 pl-6 space-y-3 font-['Caveat'] text-[22px] leading-relaxed text-[#3E322A]">
                <div className="flex items-baseline justify-between border-b border-transparent pb-1">
                  <span className="text-[28px] font-bold tracking-wide text-[#553722]">
                    Tarte aux pommes de Mamie
                  </span>
                  <span className="text-sm font-['JetBrains_Mono'] text-[#7D6D5F]">Automne 1954</span>
                </div>
                <p className="pt-1 text-[21px]">
                  6 belles <span className="bg-[#C69C72]/30 px-1 rounded-[2px]">pommes</span> reinettes (du jardin)
                </p>
                <p className="text-[21px]">
                  200g de farine de blé fine, 100g de beurre frais doux
                </p>
                <p className="text-[21px]">
                  1 pincée de sel, 50g de sucre blond
                </p>
                <p className="pt-2 text-[20px] leading-snug">
                  Éplucher 4 <span className="bg-[#C69C72]/30 px-1 rounded-[2px]">pommes</span> et faire compoter à feu doux avec un rien d'eau et une noisette de beurre.
                </p>
                <p className="text-[20px] leading-snug">
                  Disposer le reste des <span className="bg-[#C69C72]/30 px-1 rounded-[2px]">pommes</span> en rosace fine par-dessus la compote.
                </p>
                <p className="text-[20px]">
                  Cuire 35 min au four bien chaud (th. 6). Laisser tiédir avant de servir.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-6 mt-4 text-[10px] font-['JetBrains_Mono'] text-[#7D6D5F]">
                <span>Legibility: 96.2% • Script: French cursive (Mid-century)</span>
                <div className="flex items-center gap-1.5 text-[#52514E]">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  <span>Archival Preserved</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">center_focus_strong</span>
                Bounding box detected with optical skew correction (-0.4°)
              </span>
              <button className="font-['JetBrains_Mono'] text-[10px] text-[#553722] hover:underline cursor-pointer">
                View raw scan
              </button>
            </div>
          </div>

          {/* RIGHT CARD: Live OCR & Transcript Review */}
          <div className="bg-[#ffffff] rounded-xl p-6 shadow-sm flex flex-col justify-between border border-[#DDD1BF]/60">
            <div>
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A3AD8F]" />
                  <span className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                    Live Transcript
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E2B5] text-[#6B4E10] font-['JetBrains_Mono'] text-[10px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">warning</span>
                  <span>3 words need review</span>
                </div>
              </div>

              <div className="bg-[#EDE5D8]/40 rounded-lg p-5 flex flex-col gap-4 font-['Inter'] text-[14px] leading-relaxed text-[#3E322A]">
                <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] pb-2 border-b border-[#DDD1BF]/40">
                  <span>TRANSCRIPTION BUFFER (MODEL: CALM-VISION-V2)</span>
                  <span>CONFIDENCE: 98.4%</span>
                </div>
                <p className="font-['Inter'] text-[16px] font-medium text-[#3E322A]">
                  Tarte aux <mark className="bg-[#C69C72]/25 text-[#3E322A] px-1 rounded-[2px]">pommes</mark> de Mamie
                </p>
                <p>
                  6 belles <mark className="bg-[#C69C72]/25 text-[#3E322A] px-1 rounded-[2px]">pommes</mark> reinettes (du jardin)<br />
                  200g de farine de blé fine, 100g de{' '}
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#F3E2B5] text-[#6B4E10] font-['JetBrains_Mono'] text-[11px] font-semibold cursor-help" title="Confidence: 71%">
                    beurre?
                    <span className="material-symbols-outlined text-[12px]">help</span>
                  </span>{' '}
                  frais doux<br />
                  1 pincée de sel, 50g de sucre blond
                </p>
                <p>
                  Éplucher 4 <mark className="bg-[#C69C72]/25 text-[#3E322A] px-1 rounded-[2px]">pommes</mark> et faire compoter à feu doux avec un rien d'eau et une noisette de beurre.
                </p>
                <p>
                  Disposer le reste des <mark className="bg-[#C69C72]/25 text-[#3E322A] px-1 rounded-[2px]">pommes</mark> en{' '}
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#F3E2B5] text-[#6B4E10] font-['JetBrains_Mono'] text-[11px] font-semibold cursor-help" title="Confidence: 68%">
                    rosace?
                    <span className="material-symbols-outlined text-[12px]">edit</span>
                  </span>{' '}
                  fine par-dessus la compote.
                </p>
                <p>
                  Cuire 35 min au four bien chaud (th. 6). Laisser{' '}
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#F3E2B5] text-[#6B4E10] font-['JetBrains_Mono'] text-[11px] font-semibold cursor-help" title="Confidence: 74%">
                    tiédir?
                    <span className="material-symbols-outlined text-[12px]">spellcheck</span>
                  </span>{' '}
                  avant de servir.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-2">
              <div className="flex items-center gap-4 font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#C69C72]" />
                  Character accuracy: 99.1%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#A3AD8F]" />
                  Grammar syntax: FR-FR
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-[#7D6D5F] hover:text-[#3E322A] font-['JetBrains_Mono'] text-[10px] cursor-pointer">
                  Reject edits
                </button>
                <button className="px-3.5 py-1.5 bg-[#EDE5D8] hover:bg-[#ece8e0] rounded-md text-[#553722] font-['JetBrains_Mono'] text-[10px] font-semibold transition-colors cursor-pointer">
                  Approve all suggestions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Full Width Lower Section */}
        <section className="flex flex-col gap-6 pt-4">
          {/* Segmented Navigation Tab Bar */}
          <div className="flex items-center justify-between border-b border-[#DDD1BF]/40 pb-3">
            <nav className="inline-flex p-1 bg-[#EDE5D8] rounded-xl gap-1">
              <button
                className="tab-btn px-4 py-2 rounded-lg bg-[#ffffff] text-[#6f4e37] font-['JetBrains_Mono'] text-[11px] font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                id="tab-search"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">manage_search</span>
                <span>Searchable Text</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
              </button>
              <button
                className="tab-btn px-4 py-2 rounded-lg text-[#7D6D5F] hover:text-[#3E322A] font-['JetBrains_Mono'] text-[11px] font-medium transition-all flex items-center gap-2 cursor-pointer"
                id="tab-shopping"
                onClick={() => onNavigate('s05-shopping-list')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">shopping_basket</span>
                <span>Shopping List</span>
                <span className="px-1.5 py-0.2 rounded bg-[#ece8e0] text-[#52514E] font-['JetBrains_Mono'] text-[10px]">
                  9 items
                </span>
              </button>
              <button
                className="tab-btn px-4 py-2 rounded-lg text-[#7D6D5F] hover:text-[#3E322A] font-['JetBrains_Mono'] text-[11px] font-medium transition-all flex items-center gap-2 cursor-pointer"
                id="tab-cook"
                onClick={() => onNavigate('s06-cook-mode')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">skillet</span>
                <span>Cook Mode</span>
                <span className="px-1.5 py-0.2 rounded bg-[#ece8e0] text-[#52514E] font-['JetBrains_Mono'] text-[10px]">
                  8 steps
                </span>
              </button>
            </nav>
            <div className="hidden sm:flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              <span>Indexed into Personal Recipe Archive</span>
            </div>
          </div>

          {/* Search Bar with Pre-filled query and Occurrences Badge */}
          <div className="bg-[#ffffff] rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#DDD1BF]/60">
            <div className="flex items-center gap-3 w-full sm:max-w-md bg-[#EDE5D8] px-3.5 py-2 rounded-lg">
              <span className="material-symbols-outlined text-[20px] text-[#553722]">search</span>
              <input
                className="bg-transparent border-none focus:outline-none w-full font-['Inter'] text-[14px] text-[#3E322A] font-medium"
                placeholder="Search recipe ingredients or steps..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#7D6D5F] hover:text-[#3E322A] cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[11px] font-semibold">
                <span className="material-symbols-outlined text-[16px] text-[#C69C72]">
                  find_in_page
                </span>
                <span>4 occurrences found</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="p-1.5 rounded hover:bg-[#EDE5D8] text-[#7D6D5F] hover:text-[#3E322A] cursor-pointer"
                  title="Previous occurrence"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">expand_less</span>
                </button>
                <button
                  className="p-1.5 rounded hover:bg-[#EDE5D8] text-[#7D6D5F] hover:text-[#3E322A] cursor-pointer"
                  title="Next occurrence"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>
              </div>
            </div>
          </div>

          {/* Rendered Editorial Recipe Document */}
          <article className="bg-[#ffffff] rounded-xl p-8 sm:p-12 shadow-sm flex flex-col gap-8 relative overflow-hidden border border-[#DDD1BF]/60">
            <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#EDE5D8]/40 pointer-events-none flex items-center justify-center">
              <span className="font-['Caveat'] text-[#DDD1BF] rotate-12 select-none text-[32px]">
                Cuisine 1954
              </span>
            </div>

            <div className="flex flex-col gap-4 border-b border-[#DDD1BF]/50 pb-8 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#7D6D5F]">
                    Authentic French Tart • Normandy Tradition
                  </span>
                  <h2 className="font-['Fraunces'] text-[30px] font-medium text-[#3E322A] mt-1">
                    Tarte aux{' '}
                    <mark className="bg-[#C69C72]/25 text-[#3E322A] px-1.5 py-0.5 rounded-sm font-semibold">
                      pommes
                    </mark>{' '}
                    de Mamie
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 rounded-lg bg-[#EDE5D8] hover:bg-[#ece8e0] text-[#3E322A] transition-colors cursor-pointer"
                    title="Bookmark"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">bookmark</span>
                  </button>
                  <button
                    className="p-2 rounded-lg bg-[#EDE5D8] hover:bg-[#ece8e0] text-[#3E322A] transition-colors cursor-pointer"
                    title="Print recipe"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">print</span>
                  </button>
                  <button
                    className="p-2 rounded-lg bg-[#EDE5D8] hover:bg-[#ece8e0] text-[#3E322A] transition-colors cursor-pointer"
                    title="Share recipe"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="bg-[#EDE5D8]/50 rounded-lg p-3">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase block">
                    Prep Time
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[13px] font-semibold text-[#3E322A]">
                    25 min
                  </span>
                </div>
                <div className="bg-[#EDE5D8]/50 rounded-lg p-3">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase block">
                    Bake Time
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[13px] font-semibold text-[#3E322A]">
                    35 min
                  </span>
                </div>
                <div className="bg-[#EDE5D8]/50 rounded-lg p-3">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase block">
                    Yield
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[13px] font-semibold text-[#3E322A]">
                    6–8 servings
                  </span>
                </div>
                <div className="bg-[#EDE5D8]/50 rounded-lg p-3">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase block">
                    Oven Temp
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[13px] font-semibold text-[#3E322A]">
                    180°C / Th. 6
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Left Side: Ingrédients (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#DDD1BF]/40">
                  <h3 className="font-['Fraunces'] text-[18px] font-medium text-[#3E322A]">
                    Ingrédients
                  </h3>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                    Scale: 1x (Standard 24cm)
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 font-['Inter'] text-[14px] text-[#3E322A]">
                  <li className="flex items-center justify-between py-1 border-b border-[#DDD1BF]/30">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
                      6 belles{' '}
                      <mark className="bg-[#C69C72]/25 text-[#3E322A] px-1 rounded-xs">pommes</mark>{' '}
                      reinettes
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">~1.2 kg</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-[#DDD1BF]/30">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
                      Farine de blé fine (T55)
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">200 g</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-[#DDD1BF]/30">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
                      Beurre doux de baratte (frais)
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">100 g</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-[#DDD1BF]/30">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
                      Sucre blond de canne
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">50 g</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-[#DDD1BF]/30">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
                      Sel marin fin
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F]">1 pincée</span>
                  </li>
                </ul>

                <div className="mt-4 p-4 rounded-xl bg-[#EDE5D8]/50 border border-[#DDD1BF]/60 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#553722] font-['JetBrains_Mono'] text-[10px] uppercase font-semibold">
                    <span className="material-symbols-outlined text-[15px]">edit_note</span>
                    <span>Family Note (Mamie)</span>
                  </div>
                  <p className="font-['Caveat'] text-[20px] text-[#3E322A] leading-snug">
                    "Prendre impérativement des reinettes un peu acidulées. Si les fruits sont très doux, diminuer le sucre de moitié."
                  </p>
                </div>
              </div>

              {/* Right Side: Préparation (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center justify-between pb-2 border-b border-[#DDD1BF]/40">
                  <h3 className="font-['Fraunces'] text-[18px] font-medium text-[#3E322A]">
                    Préparation
                  </h3>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                    3 Étapes principales
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Step 1 */}
                  <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#6f4e37] text-white flex items-center justify-center font-['JetBrains_Mono'] text-[11px] font-semibold shrink-0">
                        1
                      </div>
                      <div className="w-0.5 h-full bg-[#DDD1BF]/40 mt-2" />
                    </div>
                    <div className="flex flex-col gap-1 pb-4">
                      <h4 className="font-['Fraunces'] text-[16px] font-medium text-[#3E322A]">
                        Préparer la pâte brisée
                      </h4>
                      <p className="font-['Inter'] text-[14px] text-[#7D6D5F] leading-relaxed">
                        Sabler rapidement du bout des doigts la farine avec le sel et les 100g de beurre frais coupé en petits dés. Ajouter un filet d'eau froide pour former une boule homogène sans trop pétrir. Étaler dans un moule à tarte de 24 cm et piquer le fond à la fourchette. Réserver au frais.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#6f4e37] text-white flex items-center justify-center font-['JetBrains_Mono'] text-[11px] font-semibold shrink-0">
                        2
                      </div>
                      <div className="w-0.5 h-full bg-[#DDD1BF]/40 mt-2" />
                    </div>
                    <div className="flex flex-col gap-1 pb-4">
                      <h4 className="font-['Fraunces'] text-[16px] font-medium text-[#3E322A]">
                        Confectionner le lit de compote
                      </h4>
                      <p className="font-['Inter'] text-[14px] text-[#7D6D5F] leading-relaxed">
                        Éplucher 4{' '}
                        <mark className="bg-[#C69C72]/25 text-[#3E322A] px-1.5 py-0.5 rounded-sm font-semibold">
                          pommes
                        </mark>{' '}
                        et les couper en morceaux réguliers. Faire compoter à feu doux dans une casserole à fond épais avec un rien d'eau et une noisette de beurre pendant 15 minutes. Écraser grossièrement à la fourchette afin de conserver de la texture, puis étaler uniformément sur le fond de pâte.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#6f4e37] text-white flex items-center justify-center font-['JetBrains_Mono'] text-[11px] font-semibold shrink-0">
                        3
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-['Fraunces'] text-[16px] font-medium text-[#3E322A]">
                        Dressage en rosace &amp; Cuisson
                      </h4>
                      <p className="font-['Inter'] text-[14px] text-[#7D6D5F] leading-relaxed">
                        Peler et tailler les 2 dernières{' '}
                        <mark className="bg-[#C69C72]/25 text-[#3E322A] px-1.5 py-0.5 rounded-sm font-semibold">
                          pommes
                        </mark>{' '}
                        en lamelles fines très régulières. Les disposer concentriquement en rosace par-dessus la compote tiède. Saupoudrer de 50g de sucre blond et parsemer de quelques éclats de beurre. Enfourner pendant 35 minutes au four préchauffé à 180°C (thermostat 6) jusqu'à belle caramélisation des bords. Laisser tiédir avant de démouler.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-4 border-t border-[#DDD1BF]/40 font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#A3AD8F]">
                  verified_user
                </span>
                <span>Authenticity check: Original family recipe confirmed via 1954 handwriting sample.</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Artifact ID: REC-1954-FR-0042</span>
                <span>•</span>
                <span>Tagged: Tartes, Desserts, Pommes</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};
