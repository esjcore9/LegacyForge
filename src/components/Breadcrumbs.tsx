import React from 'react';
import { ScreenId } from '../types';

interface BreadcrumbItem {
  label: string;
  screen?: ScreenId;
  icon?: string;
  isCurrent?: boolean;
}

interface ScreenBreadcrumbData {
  trail: BreadcrumbItem[];
  processStage: string;
  stageBadge: string;
  artifactRef?: string;
}

interface BreadcrumbsProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentScreen, onNavigate }) => {
  const getBreadcrumbData = (screen: ScreenId): ScreenBreadcrumbData => {
    switch (screen) {
      case 's01-home':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Drop Image', isCurrent: true, icon: 'image' },
          ],
          processStage: 'Intake: Analog Cards & Manuscripts',
          stageBadge: 'Stage 1 • Deposit',
          artifactRef: 'Deposit Chamber',
        };
      case 's02-ingest-link':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Ingest Link', isCurrent: true, icon: 'link' },
          ],
          processStage: 'Intake: Archival Wayback / URL',
          stageBadge: 'Stage 1 • Web Ingest',
          artifactRef: 'Wayback Crawler',
        };
      case 's03-port-code':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Port Code', isCurrent: true, icon: 'code' },
          ],
          processStage: 'Intake: Legacy Repository / Snippet',
          stageBadge: 'Stage 1 • Source Ingest',
          artifactRef: 'Vintage Repositories',
        };
      case 's04-handwriting':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Handwriting', screen: 's04-handwriting', icon: 'history_edu' },
            { label: 'Searchable Text', isCurrent: true, icon: 'text_snippet' },
          ],
          processStage: 'Transcribed & Indexed Record',
          stageBadge: 'Stage 2 • Transcription',
          artifactRef: "Mamie's Recipe (1954)",
        };
      case 's05-shopping-list':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Handwriting', screen: 's04-handwriting', icon: 'history_edu' },
            { label: 'Shopping List', isCurrent: true, icon: 'checklist' },
          ],
          processStage: 'Structured Ingredient Checklist',
          stageBadge: 'Stage 3 • Interactive View',
          artifactRef: "Mamie's Recipe (1954)",
        };
      case 's06-cook-mode':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Handwriting', screen: 's04-handwriting', icon: 'history_edu' },
            { label: 'Cook Mode', isCurrent: true, icon: 'skillet' },
          ],
          processStage: 'Distraction-Free Kitchen Mode',
          stageBadge: 'Stage 3 • Step-by-Step',
          artifactRef: "Mamie's Recipe (1954)",
        };
      case 's07-old-web-desktop':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Old Web', screen: 's07-old-web-desktop', icon: 'language' },
            { label: 'Desktop View', isCurrent: true, icon: 'desktop_windows' },
          ],
          processStage: 'Modern HTML5 Semantic Rebuild',
          stageBadge: 'Stage 2 • Semantic Elevation',
          artifactRef: 'Riverbend Children (1999)',
        };
      case 's08-old-web-mobile':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Old Web', screen: 's07-old-web-desktop', icon: 'language' },
            { label: 'Mobile View', isCurrent: true, icon: 'smartphone' },
          ],
          processStage: 'Responsive Mobile Layout',
          stageBadge: 'Stage 2 • Mobile Viewport',
          artifactRef: 'Riverbend Children (1999)',
        };
      case 's09-download-modal':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Old Web', screen: 's07-old-web-desktop', icon: 'language' },
            { label: 'Download Clean HTML', isCurrent: true, icon: 'download' },
          ],
          processStage: 'Ready for Static Hosting',
          stageBadge: 'Stage 3 • Export Bundle',
          artifactRef: 'Riverbend Children (1999)',
        };
      case 's10-code-before':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Legacy Code', screen: 's10-code-before', icon: 'terminal' },
            { label: 'Refactor Analysis', isCurrent: true, icon: 'difference' },
          ],
          processStage: 'VB6 to Modern Python 3.12 Diff',
          stageBadge: 'Stage 2 • AST Migration',
          artifactRef: 'Donation Ledger (1998)',
        };
      case 's11-code-after':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Legacy Code', screen: 's10-code-before', icon: 'terminal' },
            { label: 'Execution Sandbox', isCurrent: true, icon: 'play_arrow' },
          ],
          processStage: 'WASM Runtime Sandbox (Exit 0)',
          stageBadge: 'Stage 3 • Live Verification',
          artifactRef: 'Donation Ledger (1998)',
        };
      case 's12-command-palette':
        return {
          trail: [
            { label: 'Home', screen: 's01-home', icon: 'home' },
            { label: 'Command Palette', isCurrent: true, icon: 'search' },
          ],
          processStage: 'Omni Search & Quick Index',
          stageBadge: 'Overlay Index',
          artifactRef: 'Archival Catalog',
        };
      default:
        return {
          trail: [{ label: 'Home', screen: 's01-home', icon: 'home', isCurrent: true }],
          processStage: 'Archival Restoration',
          stageBadge: 'LegacyForge',
        };
    }
  };

  const { trail, processStage, stageBadge, artifactRef } = getBreadcrumbData(currentScreen);

  return (
    <div
      data-testid="breadcrumb-navigation"
      className="w-full bg-[#FAF6F0]/90 backdrop-blur-xs border-b border-[#DDD1BF]/80 px-6 lg:px-10 py-2.5 transition-colors sticky top-16 z-30"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 flex-wrap">
        {/* Main Breadcrumb Path */}
        <nav aria-label="Breadcrumb" className="flex items-center min-w-0">
          <ol className="flex items-center gap-1 sm:gap-1.5 text-[12.5px] font-['Inter'] flex-wrap">
            {trail.map((item, index) => {
              const isLast = index === trail.length - 1;

              return (
                <li key={`${item.label}-${index}`} className="flex items-center gap-1 sm:gap-1.5">
                  {item.isCurrent || isLast ? (
                    <span
                      aria-current="page"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#3E322A] bg-[#EDE5D8]/70 px-2 py-0.5 rounded-md border border-[#DDD1BF]/60 shadow-2xs"
                    >
                      {item.icon && (
                        <span className="material-symbols-outlined text-[14px] text-[#7a5733]">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.label}</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => item.screen && onNavigate(item.screen)}
                      className="inline-flex items-center gap-1.5 text-[#7D6D5F] hover:text-[#3E322A] hover:bg-[#EDE5D8]/50 px-2 py-0.5 rounded-md transition-colors cursor-pointer group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C69C72]"
                      title={`Navigate to ${item.label}`}
                    >
                      {item.icon && (
                        <span className="material-symbols-outlined text-[14px] text-[#A68A75] group-hover:text-[#6F4E37] transition-colors">
                          {item.icon}
                        </span>
                      )}
                      <span className="group-hover:underline underline-offset-2">{item.label}</span>
                    </button>
                  )}

                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="text-[#C69C72]/80 select-none font-serif text-[13px] px-0.5"
                    >
                      ›
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Archival Context & Stage Tracking */}
        <div className="hidden md:flex items-center gap-3 text-[11px] font-['JetBrains_Mono'] text-[#7D6D5F] shrink-0">
          {artifactRef && (
            <div className="flex items-center gap-1.5 text-[#6F4E37]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
              <span className="font-medium">{artifactRef}</span>
            </div>
          )}

          <span className="text-[#DDD1BF]" aria-hidden="true">
            •
          </span>

          <span className="text-[#553722] bg-[#EDE5D8]/60 px-2 py-0.5 rounded text-[10px] tracking-wide font-medium">
            {stageBadge}
          </span>

          <span className="text-[#DDD1BF] hidden lg:inline" aria-hidden="true">
            •
          </span>

          <span className="text-[#7D6D5F] hidden lg:inline text-[11px] truncate max-w-xs">
            {processStage}
          </span>
        </div>
      </div>
    </div>
  );
};
