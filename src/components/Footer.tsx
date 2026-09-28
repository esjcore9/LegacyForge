import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-8 px-6 border-t border-[#DDD1BF] bg-[#f8f3eb] flex items-center justify-between font-['JetBrains_Mono'] text-[11px] text-[#7D6D5F] z-50 select-none">
      <div>Demo build. Sample outputs are simulated.</div>
      <div className="flex items-center gap-4">
        <span>LegacyForge v1.0.4</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C69C72]" />
        <span>Calm Archival Engine</span>
      </div>
    </footer>
  );
};
