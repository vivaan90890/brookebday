import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./components/Navigation";
import FloatingHearts from "./components/FloatingHearts";
import IntroTab from "./components/tabs/IntroTab";
import GalleryTab from "./components/tabs/GalleryTab";
import MemoriesTab from "./components/tabs/MemoriesTab";
import LoveLetterTab from "./components/tabs/LoveLetterTab";
import TimelineTab from "./components/tabs/TimelineTab";
import CountdownTab from "./components/tabs/CountdownTab";
import ProposalTab from "./components/tabs/ProposalTab";
import Lightbox from "./components/Lightbox";
import { useAudio } from "./hooks/useAudio";

export type TabType = 'intro' | 'gallery' | 'memories' | 'letter' | 'timeline' | 'countdown' | 'proposal';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('intro');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  // Initialize global music
  const { isPlaying, toggleAudio } = useAudio();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'intro':
        return <IntroTab onNavigate={setActiveTab} />;
      case 'gallery':
        return <GalleryTab onImageClick={setLightboxImage} />;
      case 'memories':
        return <MemoriesTab onImageClick={setLightboxImage} />;
      case 'letter':
        return <LoveLetterTab />;
      case 'timeline':
        return <TimelineTab />;
      case 'countdown':
        return <CountdownTab />;
      case 'proposal':
        return <ProposalTab />;
      default:
        return <IntroTab onNavigate={setActiveTab} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-romantic-gradient">
          <FloatingHearts />
          
          {/* Music Control Button */}
          <button
            onClick={toggleAudio}
            className="fixed top-20 right-4 z-50 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full shadow-lg hover:bg-white/30 transition-all transform hover:scale-110 border border-white/30"
            title={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="tab-content-enter">
            {renderActiveTab()}
          </main>
          {lightboxImage && (
            <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
          )}
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
