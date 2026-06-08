import { useEffect, useState } from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import TopBar from "./components/TopBar";
import Hero from "./sections/Hero";
import OneLine from "./sections/OneLine";
import AudienceTruth from "./sections/AudienceTruth";
import FocoMoment from "./sections/FocoMoment";
import MapSection from "./sections/MapSection";
import Numbers from "./sections/Numbers";
import CompetitorReality from "./sections/CompetitorReality";
import WhatYouGet from "./sections/WhatYouGet";
import ChaiConversation from "./sections/ChaiConversation";
import TheAsk from "./sections/TheAsk";
import SiteFooter from "./sections/SiteFooter";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      // Reveal the page
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [loaded]);

  return (
    <div className="App relative">
      <CustomCursor />
      <LoadingScreen onDone={() => setLoaded(true)} />
      <TopBar />

      <main className="relative">
        <Hero />
        <OneLine />
        <AudienceTruth />
        <FocoMoment />
        <MapSection />
        <Numbers />
        <CompetitorReality />
        <WhatYouGet />
        <ChaiConversation />
        <TheAsk />
        <SiteFooter />
      </main>
    </div>
  );
}

export default App;
