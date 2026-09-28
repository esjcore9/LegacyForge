import React, { useState } from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const S06HandwritingCookMode: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(35 * 60);

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 py-8 flex flex-col gap-8">
        {/* Result Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-2.5 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[11px] tracking-wider uppercase font-semibold">
                Module 01 • Handwriting to Text
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[#52514E] font-['JetBrains_Mono'] text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
                Sample output
              </span>
            </div>
            <h1 className="font-['Fraunces'] text-[46px] leading-[56px] font-medium text-[#3E322A] tracking-tight">
              Tarte aux pommes de Mamie
            </h1>
            <p className="font-['Inter'] text-[14px] text-[#7D6D5F]">
              Turn handwritten records into searchable, structured text.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('s01-home')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#EDE5D8]/60 hover:bg-[#EDE5D8] text-[#3E322A] font-['Inter'] text-[14px] transition-colors group cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-[#7D6D5F] group-hover:rotate-[-45deg] transition-transform">
                restart_alt
              </span>
              <span>Start over</span>
            </button>
          </div>
        </header>

        {/* Top Split View (50 / 50 columns) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: Original (1954) Archival Card */}
          <div className="relative bg-[#FAF5EC] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_16px_-2px_rgba(62,50,42,0.06)] overflow-hidden min-h-[380px] border border-[#DDD1BF]/60">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C69C72] to-transparent opacity-70" />
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD1BF]/50">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#553722] text-[20px]">
                  history_edu
                </span>
                <span className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                  Original (1954)
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#52514E] uppercase tracking-wider bg-[#EDE5D8] px-2 py-0.5 rounded">
                L'Isle-sur-la-Sorgue • Recette #4
              </span>
            </div>

            <div className="my-6 space-y-4 px-2 select-none">
              <div className="font-['Caveat'] text-[22px] text-[#4A3B32] leading-loose rotate-[-0.5deg]">
                « Pour la tarte de mamie : Mélanger farine (250g), sel et beurre froid en sable. Ajouter l'œuf battu avec un peu d'eau pour lier. Laisser reposer au frais 30 min. Disposer les tranches de reinettes en fine rosace bien serrée. Cuire à four doux 180°C. Napper d'abricot pour faire briller à la sortie du four. »
              </div>
              <div className="flex justify-end pt-2">
                <span className="font-['Caveat'] text-[18px] text-[#7D6D5F] italic underline decoration-[#C69C72]/60 underline-offset-4">
                  Mamie Alice, Automne 1954
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#DDD1BF]/40 text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px]">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#A3AD8F]" />
                <span>600 DPI Optical Scan</span>
              </div>
              <span>Archival Grade • 100% Cotton Rag Paper</span>
            </div>
          </div>

          {/* Right Card: Live Transcript */}
          <div className="bg-[#f8f3eb] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_16px_-2px_rgba(62,50,42,0.06)] border border-[#DDD1BF]/60">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DDD1BF]/60">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#7a5733] text-[20px]">
                    spellcheck
                  </span>
                  <span className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                    Live Transcript
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fdcfa1] text-[#795632] font-['JetBrains_Mono'] text-[10px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">warning</span>
                  <span>3 words need review</span>
                </div>
              </div>
              <div className="mt-6 font-['Inter'] text-[16px] text-[#3E322A] leading-relaxed space-y-3">
                <p>
                  Pour la pâte : mélanger 250g de farine, une pincée de sel et 125g de{' '}
                  <mark className="bg-[#ffdcbc]/70 text-[#2c1600] px-1.5 py-0.5 rounded font-medium cursor-help">
                    beurre?
                  </mark>{' '}
                  froid coupé en petits dés jusqu'à former un sable fin.
                </p>
                <p>
                  Ajouter l'œuf et 2 c. à s. d'eau glacée. Garnir le moule avec les reinettes disposées en{' '}
                  <mark className="bg-[#ffdcbc]/70 text-[#2c1600] px-1.5 py-0.5 rounded font-medium cursor-help">
                    rosace?
                  </mark>{' '}
                  harmonieuse. Cuire 35 min au four à 180°C. Napper puis laisser{' '}
                  <mark className="bg-[#ffdcbc]/70 text-[#2c1600] px-1.5 py-0.5 rounded font-medium cursor-help">
                    tiédir?
                  </mark>{' '}
                  avant dégustation.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-[#DDD1BF]/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                  OCR Model: Whisper-Script v3
                </span>
                <span className="text-[#7D6D5F]">•</span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#52514E]">
                  Confidence 96.4%
                </span>
              </div>
              <button
                className="font-['JetBrains_Mono'] text-[10px] text-[#553722] font-medium hover:underline flex items-center gap-1 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[14px]">edit</span>
                Review tokens
              </button>
            </div>
          </div>
        </section>

        {/* Full Width Lower Section */}
        <section className="flex flex-col gap-6 pt-2">
          {/* Segmented Tab Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-1 border-b border-[#DDD1BF]">
            <div className="inline-flex p-1.5 rounded-xl bg-[#EDE5D8]">
              <button
                onClick={() => onNavigate('s04-handwriting')}
                className="px-5 py-2 rounded-lg font-['Inter'] text-[12px] text-[#7D6D5F] hover:text-[#3E322A] transition-all cursor-pointer"
                type="button"
              >
                Searchable Text
              </button>
              <button
                onClick={() => onNavigate('s05-shopping-list')}
                className="px-5 py-2 rounded-lg font-['Inter'] text-[12px] text-[#7D6D5F] hover:text-[#3E322A] transition-all cursor-pointer"
                type="button"
              >
                Shopping List
              </button>
              <button
                className="px-5 py-2 rounded-lg font-['Inter'] text-[12px] font-semibold text-[#3E322A] bg-[#ffffff] shadow-sm flex items-center gap-2 relative"
                type="button"
              >
                <span className="w-2 h-2 rounded-full bg-[#C69C72]" />
                <span>Cook Mode</span>
                <span className="inline-flex px-1.5 py-0.2 rounded bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[10px] font-medium ml-1">
                  Active
                </span>
              </button>
            </div>

            <div className="flex items-center gap-3 font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
                Tap step to highlight
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">keyboard</span>
                Use Space / Arrow Keys
              </span>
            </div>
          </div>

          {/* Cook Mode Panel */}
          <div className="flex flex-col gap-6">
            {/* Header Banner */}
            <div className="bg-[#ece8e0] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_4px_20px_-4px_rgba(62,50,42,0.04)] border border-[#DDD1BF]/60">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-[#C69C72]">
                  <span className="material-symbols-outlined text-[20px]">skillet</span>
                  <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider font-semibold">
                    Kitchen Protocol
                  </span>
                </div>
                <h2 className="font-['Fraunces'] text-[30px] font-medium text-[#3E322A]">
                  Interactive Cook Mode • Étape par étape
                </h2>
                <p className="font-['Inter'] text-[12px] text-[#7D6D5F]">
                  Paced culinary layout transcribed directly from handwritten proportions.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[11px]">
                  <span className="material-symbols-outlined text-[18px] text-[#553722]">timer</span>
                  <span className="font-semibold">35 min total</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[11px]">
                  <span className="material-symbols-outlined text-[18px] text-[#7a5733]">
                    thermostat
                  </span>
                  <span className="font-semibold">180°C</span>
                </div>
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="px-4 py-2.5 rounded-xl bg-[#6f4e37] text-white font-['Inter'] text-[12px] font-medium hover:bg-[#7a5733] transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {timerRunning ? 'pause' : 'play_arrow'}
                  </span>
                  <span>{timerRunning ? 'Pause Timer' : 'Start Timer'}</span>
                </button>
              </div>
            </div>

            {/* Eight Large Step Cards Stacked Vertically */}
            <div className="flex flex-col gap-4">
              {/* STEP 1 */}
              <article
                onClick={() => setActiveStep(1)}
                className={`relative rounded-2xl p-6 md:p-8 transition-all cursor-pointer ${
                  activeStep === 1
                    ? 'bg-[#FAF6F0] shadow-[0_12px_28px_-4px_rgba(62,50,42,0.12)] ring-2 ring-[#C69C72]'
                    : 'bg-[#f8f3eb] hover:bg-[#f2ede5] border border-[#DDD1BF]/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 min-w-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-['Fraunces'] text-[20px] shrink-0 font-semibold shadow-sm ${
                        activeStep === 1
                          ? 'bg-[#C69C72] text-white'
                          : 'bg-[#EDE5D8] text-[#3E322A]'
                      }`}
                    >
                      1
                    </div>
                    <div className="flex flex-col gap-2 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[10px] font-bold tracking-wide uppercase">
                          Active Step
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#52514E] font-['JetBrains_Mono'] text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">lightbulb_2</span>
                          5 min • Préparation
                        </span>
                      </div>
                      <p className="font-['Fraunces'] text-[24px] text-[#3E322A] leading-snug">
                        Mélanger la farine, le sel et le beurre froid jusqu'à obtenir un sable.
                      </p>
                      <p className="font-['Inter'] text-[14px] text-[#7D6D5F] mt-1">
                        Travaillez du bout des doigts pour ne pas réchauffer le beurre de baratte. La texture doit rappeler un sable doux et doré.
                      </p>
                    </div>
                  </div>
                  <div className="sm:self-center flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveStep(2);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-[#EDE5D8] hover:bg-[#ece8e0] text-[#3E322A] font-['JetBrains_Mono'] text-[10px] flex items-center gap-1.5 transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px] text-[#C69C72]">
                        check_circle
                      </span>
                      <span>Mark Done</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* STEP 2 */}
              <article
                onClick={() => setActiveStep(2)}
                className={`rounded-2xl p-6 md:p-8 transition-all cursor-pointer ${
                  activeStep === 2
                    ? 'bg-[#FAF6F0] shadow-md ring-2 ring-[#C69C72]'
                    : 'bg-[#f8f3eb] hover:bg-[#f2ede5] border border-[#DDD1BF]/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center font-['Fraunces'] text-[20px] shrink-0 font-semibold">
                      2
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1 text-[#52514E] font-['JetBrains_Mono'] text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">schedule</span>
                          30 min • Repos
                        </span>
                      </div>
                      <p className="font-['Fraunces'] text-[20px] text-[#3E322A] leading-snug">
                        Ajouter l'œuf et 2 c. à s. d'eau, former une boule et réserver 30 minutes au frais.
                      </p>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] self-center">
                    Étape suivante
                  </span>
                </div>
              </article>

              {/* STEP 3 */}
              <article
                onClick={() => setActiveStep(3)}
                className={`rounded-2xl p-6 md:p-8 transition-all cursor-pointer ${
                  activeStep === 3
                    ? 'bg-[#FAF6F0] shadow-md ring-2 ring-[#C69C72]'
                    : 'bg-[#f8f3eb] hover:bg-[#f2ede5] border border-[#DDD1BF]/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center font-['Fraunces'] text-[20px] shrink-0 font-semibold">
                      3
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1 text-[#52514E] font-['JetBrains_Mono'] text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                          180°C • Four
                        </span>
                      </div>
                      <p className="font-['Fraunces'] text-[20px] text-[#3E322A] leading-snug">
                        Préchauffer le four à 180 degrés.
                      </p>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] self-center">
                    Chaleur tournante
                  </span>
                </div>
              </article>

              {/* STEP 4 */}
              <article
                onClick={() => setActiveStep(4)}
                className={`rounded-2xl p-6 md:p-8 transition-all cursor-pointer ${
                  activeStep === 4
                    ? 'bg-[#FAF6F0] shadow-md ring-2 ring-[#C69C72]'
                    : 'bg-[#f8f3eb] hover:bg-[#f2ede5] border border-[#DDD1BF]/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center font-['Fraunces'] text-[20px] shrink-0 font-semibold">
                      4
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1 text-[#52514E] font-['JetBrains_Mono'] text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">countertops</span>
                          5 min • Fonçage
                        </span>
                      </div>
                      <p className="font-['Fraunces'] text-[20px] text-[#3E322A] leading-snug">
                        Étaler la pâte et foncer un moule beurré.
                      </p>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] self-center">
                    Moule cannelé 26 cm
                  </span>
                </div>
              </article>

              {/* STEP 5 */}
              <article
                onClick={() => setActiveStep(5)}
                className={`rounded-2xl p-6 md:p-8 transition-all cursor-pointer ${
                  activeStep === 5
                    ? 'bg-[#FAF6F0] shadow-md ring-2 ring-[#C69C72]'
                    : 'bg-[#f8f3eb] hover:bg-[#f2ede5] border border-[#DDD1BF]/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center font-['Fraunces'] text-[20px] shrink-0 font-semibold">
                      5
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1 text-[#52514E] font-['JetBrains_Mono'] text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">nutrition</span>
                          10 min • Découpe
                        </span>
                      </div>
                      <p className="font-['Fraunces'] text-[20px] text-[#3E322A] leading-snug">
                        Éplucher les pommes et les couper en fines lamelles.
                      </p>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] self-center">
                    4 pommes Reinettes
                  </span>
                </div>
              </article>

              {/* STEP 6 */}
              <article
                onClick={() => setActiveStep(6)}
                className={`rounded-2xl p-6 md:p-8 transition-all cursor-pointer ${
                  activeStep === 6
                    ? 'bg-[#FAF6F0] shadow-md ring-2 ring-[#C69C72]'
                    : 'bg-[#f8f3eb] hover:bg-[#f2ede5] border border-[#DDD1BF]/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center font-['Fraunces'] text-[20px] shrink-0 font-semibold">
                      6
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1 text-[#52514E] font-['JetBrains_Mono'] text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                          5 min • Dressage
                        </span>
                      </div>
                      <p className="font-['Fraunces'] text-[20px] text-[#3E322A] leading-snug">
                        Disposer les pommes en rosace, saupoudrer de sucre et de cannelle.
                      </p>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] self-center">
                    Cercles concentriques
                  </span>
                </div>
              </article>

              {/* STEP 7 */}
              <article
                onClick={() => setActiveStep(7)}
                className={`rounded-2xl p-6 md:p-8 transition-all cursor-pointer ${
                  activeStep === 7
                    ? 'bg-[#FAF6F0] shadow-md ring-2 ring-[#C69C72]'
                    : 'bg-[#f8f3eb] hover:bg-[#f2ede5] border border-[#DDD1BF]/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center font-['Fraunces'] text-[20px] shrink-0 font-semibold">
                      7
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1 text-[#52514E] font-['JetBrains_Mono'] text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">microwave</span>
                          35 min • Cuisson
                        </span>
                      </div>
                      <p className="font-['Fraunces'] text-[20px] text-[#3E322A] leading-snug">
                        Cuire 35 minutes, jusqu'à ce que les bords soient dorés.
                      </p>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] self-center">
                    Vérifier coloration à 30 min
                  </span>
                </div>
              </article>

              {/* STEP 8 */}
              <article
                onClick={() => setActiveStep(8)}
                className={`rounded-2xl p-6 md:p-8 transition-all cursor-pointer ${
                  activeStep === 8
                    ? 'bg-[#FAF6F0] shadow-md ring-2 ring-[#C69C72]'
                    : 'bg-[#f8f3eb] hover:bg-[#f2ede5] border border-[#DDD1BF]/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-[#EDE5D8] text-[#3E322A] flex items-center justify-center font-['Fraunces'] text-[20px] shrink-0 font-semibold">
                      8
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1 text-[#52514E] font-['JetBrains_Mono'] text-[11px]">
                          <span className="material-symbols-outlined text-[14px]">bakery_dining</span>
                          15 min • Finition &amp; Service
                        </span>
                      </div>
                      <p className="font-['Fraunces'] text-[20px] text-[#3E322A] leading-snug">
                        Napper de confiture d'abricot tiède et laisser tiédir avant de servir.
                      </p>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] self-center">
                    Brillance miroir
                  </span>
                </div>
              </article>
            </div>

            {/* Archival Provenance Footer Bar */}
            <div className="mt-4 p-5 rounded-xl bg-[#EDE5D8]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px] border border-[#DDD1BF]/60">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#C69C72]">
                  verified
                </span>
                <span>Transcription verified against handwritten manuscript • Archive Ref: 1954-FR-REC-0089</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="hover:text-[#3E322A] transition-colors cursor-pointer" type="button">
                  Export recipe markdown
                </button>
                <span>•</span>
                <button className="hover:text-[#3E322A] transition-colors cursor-pointer" type="button">
                  Print Kitchen Card
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
