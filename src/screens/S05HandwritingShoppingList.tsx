import React, { useState } from 'react';
import { ScreenId } from '../types';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

interface Item {
  id: number;
  name: string;
  category: string;
  checked: boolean;
}

export const S05HandwritingShoppingList: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: '6 pommes', category: 'Fruits', checked: true },
    { id: 2, name: '200 g de farine', category: 'Épicerie', checked: true },
    { id: 3, name: '100 g de beurre', category: 'Frais', checked: true },
    { id: 4, name: '80 g de sucre', category: 'Épicerie', checked: false },
    { id: 5, name: '1 œuf', category: 'Frais', checked: false },
    { id: 6, name: '1 pincée de sel', category: 'Épicerie', checked: false },
    { id: 7, name: '1 c. à c. de cannelle', category: 'Épicerie', checked: false },
    { id: 8, name: "2 c. à s. de confiture d'abricot", category: 'Épicerie', checked: false },
    { id: 9, name: '1 sachet de sucre vanillé', category: 'Épicerie', checked: false },
  ]);

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const checkedCount = items.filter((i) => i.checked).length;

  return (
    <div className="flex flex-col w-full">
      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
        {/* Result Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#C69C72]/20 text-[#553722] font-['JetBrains_Mono'] text-[11px] font-medium tracking-wide">
                Module 01 • Handwriting to Text
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#EDE5D8] text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px]">
                Sample output
              </span>
            </div>
            <h1 className="font-['Fraunces'] text-[30px] font-medium text-[#3E322A] tracking-tight">
              Tarte aux pommes de Mamie
            </h1>
            <p className="font-['Inter'] text-[14px] text-[#7D6D5F] max-w-xl">
              Turn handwritten records into searchable, structured text.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('s01-home')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f8f3eb] hover:bg-[#EDE5D8] text-[#3E322A] font-['Inter'] text-[12px] font-medium transition-all shadow-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">replay</span>
              <span>Start over</span>
            </button>
          </div>
        </div>

        {/* Top Split View (50 / 50 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card: Original Recipe Card (1954) */}
          <div className="relative bg-[#ffffff] rounded-2xl p-6 md:p-7 shadow-md overflow-hidden flex flex-col justify-between min-h-[380px] border border-[#DDD1BF]/60">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C69C72] to-transparent pointer-events-none opacity-80 top-1/3 animate-pulse" />
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD1BF]/40">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#C69C72] text-[20px]">
                    history_edu
                  </span>
                  <span className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                    Original Card
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] bg-[#EDE5D8] px-2 py-0.5 rounded">
                    Circa 1954
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F] uppercase tracking-wider">
                  Normandie, FR
                </span>
              </div>
              <div className="bg-[#FBF7EE] p-6 rounded-xl shadow-inner relative space-y-4 border border-[#DDD1BF]/40">
                <div className="font-['Caveat'] text-[22px] text-[#3E322A]/90 leading-relaxed tracking-wide">
                  <p className="font-bold text-2xl mb-3 text-[#5a3517]">
                    Tarte aux pommes de Mamie
                  </p>
                  <p className="mb-2">
                    Pour la pâte: 200g de farine, 100g de beurre demi-sel frais, 1 pincée de sel, un peu d'eau tiède.
                  </p>
                  <p className="mb-2">
                    Garniture: 6 belles pommes Reinettes. Cuire une compote légère avec cannelle et sucre vanillé.
                  </p>
                  <p>
                    Disposer les lamelles en rosace serrée. Enfourner à four moyen (th. 6) 35 min. Napper d'abricot.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 mt-2">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                Ink fidelity: 94.2%
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#C69C72] font-medium">
                Archival scan #FR-1954-A04
              </span>
            </div>
          </div>

          {/* Right Card: Live Transcript */}
          <div className="bg-[#ffffff] rounded-2xl p-6 md:p-7 shadow-md flex flex-col justify-between min-h-[380px] border border-[#DDD1BF]/60">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD1BF]/40">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#A3AD8F] text-[20px]">
                    document_scanner
                  </span>
                  <span className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                    Live Transcript
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F3E2B5] text-[#6B4E10] font-['JetBrains_Mono'] text-[10px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B4E10]" />
                  3 words need review
                </span>
              </div>
              <div className="bg-[#EDE5D8]/40 p-6 rounded-xl space-y-3 font-['Inter'] text-[14px] text-[#3E322A]">
                <h2 className="font-['Fraunces'] text-[18px] text-[#553722]">
                  Tarte aux pommes de Mamie
                </h2>
                <p className="leading-relaxed">
                  Pour la pâte : 200 g de farine, 100 g de{' '}
                  <span
                    className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#F3E2B5] text-[#6B4E10] font-['JetBrains_Mono'] text-[11px] font-semibold cursor-help"
                    title="Uncertain stroke transcription"
                  >
                    beurre?
                  </span>{' '}
                  demi-sel, 1 pincée de sel, un peu d'eau.
                </p>
                <p className="leading-relaxed">
                  Garniture : 6 pommes Reinettes. Cuire une compote douce avec cannelle et sucre vanillé.
                </p>
                <p className="leading-relaxed">
                  Disposer les lamelles en{' '}
                  <span
                    className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#F3E2B5] text-[#6B4E10] font-['JetBrains_Mono'] text-[11px] font-semibold cursor-help"
                    title="Cursive loop ambiguous"
                  >
                    rosace?
                  </span>{' '}
                  serrée. Cuire à four doux 35 min. Laisser{' '}
                  <span
                    className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#F3E2B5] text-[#6B4E10] font-['JetBrains_Mono'] text-[11px] font-semibold cursor-help"
                    title="Faded ink stroke"
                  >
                    tiédir?
                  </span>{' '}
                  puis napper.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 mt-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#7D6D5F]">
                  translate
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#7D6D5F]">
                  Language: French (auto-detected)
                </span>
              </div>
              <button
                className="text-[#7a5733] font-['JetBrains_Mono'] text-[10px] font-semibold hover:underline cursor-pointer"
                type="button"
              >
                Verify transcription
              </button>
            </div>
          </div>
        </div>

        {/* Full Width Lower Section */}
        <div className="bg-[#ffffff] rounded-2xl shadow-md overflow-hidden border border-[#DDD1BF]/60">
          {/* Segmented Tab Bar */}
          <div className="flex items-center bg-[#f8f3eb]/70 px-6 pt-3 gap-3 border-b border-[#DDD1BF]/40">
            <button
              onClick={() => onNavigate('s04-handwriting')}
              className="px-5 py-3 font-['Inter'] text-[14px] text-[#7D6D5F] hover:text-[#3E322A] transition-colors cursor-pointer"
              type="button"
            >
              Searchable Text
            </button>
            <button
              className="relative px-5 py-3 font-['Inter'] text-[14px] font-semibold text-[#3E322A] bg-[#ffffff] rounded-t-xl shadow-[0_-2px_8px_-2px_rgba(62,50,42,0.06)]"
              type="button"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#C69C72]">
                  checklist
                </span>
                <span>Shopping List</span>
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#C69C72] rounded-full" />
            </button>
            <button
              onClick={() => onNavigate('s06-cook-mode')}
              className="px-5 py-3 font-['Inter'] text-[14px] text-[#7D6D5F] hover:text-[#3E322A] transition-colors cursor-pointer"
              type="button"
            >
              Cook Mode
            </button>
          </div>

          {/* Shopping List Panel */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Panel Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 bg-[#EDE5D8]/20 p-4 rounded-xl border border-[#DDD1BF]/40">
              <div className="flex items-center gap-3">
                <h3 className="font-['Fraunces'] text-[20px] font-semibold text-[#3E322A]">
                  Shopping list
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDE7D3] text-[#4F6B45] font-['JetBrains_Mono'] text-[11px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  {checkedCount} of {items.length} done
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[10px]">
                  <span className="material-symbols-outlined text-[13px] text-[#A3AD8F]">eco</span>
                  Fruits &amp; Légumes (1)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[10px]">
                  <span className="material-symbols-outlined text-[13px] text-[#C69C72]">
                    storefront
                  </span>
                  Épicerie (6)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#EDE5D8] text-[#3E322A] font-['JetBrains_Mono'] text-[10px]">
                  <span className="material-symbols-outlined text-[13px] text-[#9FB0B8]">
                    egg_alt
                  </span>
                  Produits Frais (2)
                </span>
              </div>
            </div>

            {/* 9 Modern Ingredient Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl transition-all cursor-pointer border ${
                    item.checked
                      ? 'bg-[#f8f3eb]/60 border-[#DDD1BF]/40 opacity-70'
                      : 'bg-[#EDE5D8]/30 border-[#DDD1BF]/60 hover:bg-[#EDE5D8]/60 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                        item.checked
                          ? 'bg-[#553722] text-white'
                          : 'bg-[#EDE5D8] border border-[#DDD1BF]'
                      }`}
                    >
                      {item.checked && (
                        <span className="material-symbols-outlined text-[15px]">check</span>
                      )}
                    </div>
                    <span
                      className={`font-['Inter'] text-[14px] truncate ${
                        item.checked
                          ? 'text-[#7D6D5F] line-through'
                          : 'text-[#3E322A] font-medium'
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#7D6D5F] font-['JetBrains_Mono'] text-[10px]">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Utility Bottom Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#DDD1BF]/40 gap-4 text-[#7D6D5F]">
              <div className="flex items-center gap-4 font-['Inter'] text-[12px]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#C69C72]">
                    inventory
                  </span>
                  Total items: 9 units
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#DDD1BF]" />
                <span>Serves: 6 portions</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => alert('Shopping card printed.')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#EDE5D8] text-[#3E322A] font-['Inter'] text-[12px] hover:bg-[#ece8e0] transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  <span>Export Card</span>
                </button>
                <button
                  onClick={() => alert('Sent to Apple Notes & Google Keep.')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#6f4e37] text-white font-['Inter'] text-[12px] hover:bg-[#553722] transition-colors shadow-sm cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">sync</span>
                  <span>Send to Notes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
