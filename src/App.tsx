import React, { useState, useEffect } from 'react';
import { ScreenId } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';

import { S01HomeDropImage } from './screens/S01HomeDropImage';
import { S02HomeIngestLink } from './screens/S02HomeIngestLink';
import { S03HomePortCode } from './screens/S03HomePortCode';
import { S04HandwritingSearchableText } from './screens/S04HandwritingSearchableText';
import { S05HandwritingShoppingList } from './screens/S05HandwritingShoppingList';
import { S06HandwritingCookMode } from './screens/S06HandwritingCookMode';
import { S07OldWebDesktop } from './screens/S07OldWebDesktop';
import { S08OldWebMobile } from './screens/S08OldWebMobile';
import { S09OldWebDownloadModal } from './screens/S09OldWebDownloadModal';
import { S10CodeBeforeRun } from './screens/S10CodeBeforeRun';
import { S11CodeAfterRun } from './screens/S11CodeAfterRun';
import { S12CommandPaletteOverlay } from './screens/S12CommandPaletteOverlay';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('s01-home');

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K opens Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCurrentScreen((prev) =>
          prev === 's12-command-palette' ? 's01-home' : 's12-command-palette'
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 's01-home':
        return <S01HomeDropImage onNavigate={handleNavigate} />;
      case 's02-ingest-link':
        return <S02HomeIngestLink onNavigate={handleNavigate} />;
      case 's03-port-code':
        return <S03HomePortCode onNavigate={handleNavigate} />;
      case 's04-handwriting':
        return <S04HandwritingSearchableText onNavigate={handleNavigate} />;
      case 's05-shopping-list':
        return <S05HandwritingShoppingList onNavigate={handleNavigate} />;
      case 's06-cook-mode':
        return <S06HandwritingCookMode onNavigate={handleNavigate} />;
      case 's07-old-web-desktop':
        return <S07OldWebDesktop onNavigate={handleNavigate} />;
      case 's08-old-web-mobile':
        return <S08OldWebMobile onNavigate={handleNavigate} />;
      case 's09-download-modal':
        return <S09OldWebDownloadModal onNavigate={handleNavigate} />;
      case 's10-code-before':
        return <S10CodeBeforeRun onNavigate={handleNavigate} />;
      case 's11-code-after':
        return <S11CodeAfterRun onNavigate={handleNavigate} />;
      case 's12-command-palette':
        return <S12CommandPaletteOverlay onNavigate={handleNavigate} />;
      default:
        return <S01HomeDropImage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-[#F6F1E9] text-[#3E322A] font-['Inter'] antialiased min-h-screen flex flex-col selection:bg-[#C69C72]/20">
      <Header onNavigate={handleNavigate} />

      <div className="flex-1 flex pt-16">
        <Sidebar currentScreen={currentScreen} onNavigate={handleNavigate} />

        <div className="flex-1 flex flex-col min-w-0 pb-8 pl-16">
          <Breadcrumbs currentScreen={currentScreen} onNavigate={handleNavigate} />
          <main className="flex-1 bg-[#F6F1E9]">{renderScreen()}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
