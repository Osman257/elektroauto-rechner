import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/start-page";
import RechnerOverview from "./pages/RechnerOverview";
import GebrauchtwagenBatterieRechner from './pages/GebrauchtwagenBatterieRechner';
import RechnerPage from "./pages/RechnerPage";
import RatgeberPage from "./pages/RatgeberPage";
import KaufberatungPage from "./pages/KaufberatungPage";
import MythenPage from "./pages/MythenPage";
import ThgQuotePage from "./pages/ThgQuotePage";
import WertverlustPage from './pages/WertverlustPage';
import VerkaufszahlenPage from "./pages/VerkaufszahlenPage";
import LadezeitPage from './pages/LadezeitPage';
import GebrauchtKaufenPage from './pages/GebrauchtKaufenPage';
import ImpressumPage from "./pages/impressum-page";
import DatenschutzPage from "./pages/datenschutz-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/rechner" element={<RechnerOverview />} />
        <Route path="/rechner/kostenrechner" element={<RechnerPage />} />
        <Route path="/rechner/gebrauchtwagenbatterierechner" element={<GebrauchtwagenBatterieRechner />} />

        {/* Ratgeber-Bereich */}
        <Route path="/ratgeber" element={<RatgeberPage />} />
        <Route path="/ratgeber/kaufberatung" element={<KaufberatungPage />} />
        <Route path="/ratgeber/mythen" element={<MythenPage />} />
        <Route path="/ratgeber/thg-quote" element={<ThgQuotePage />} />
        <Route path="/ratgeber/ladezeit" element={<LadezeitPage />} />
        <Route path="/ratgeber/wertverlust" element={<WertverlustPage />} />
        <Route path="/ratgeber/gebrauchtwagen" element={<GebrauchtKaufenPage />} />
        <Route path="/ratgeber/verkaufszahlen" element={<VerkaufszahlenPage />} />


        {/* Rechtliches */}
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </Router>
  );
}

export default App;
