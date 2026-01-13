import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/start-page";
import RechnerOverview from "./pages/RechnerOverview";
import GebrauchtwagenBatterieRechner from './pages/GebrauchtwagenBatterieRechner';
import RechnerPage from "./pages/RechnerPage";
import RatgeberPage from "./pages/RatgeberPage";
import KaufberatungPage from "./pages/KaufberatungPage";
import ElektroautoReichweiteWinterTest from "./pages/ElektroautoReichweiteWinterTest";
import MythenPage from "./pages/MythenPage";
import ThgQuotePage from "./pages/ThgQuotePage";
import EAutoPendlerPage from "./pages/EAutoPendlerPage";
import EffizienteElektroautosPage from "./pages/EffizienteElektroautosPage";
import ElektroautoLeasingKaufPage from "./pages/ElektroautoLeasingKaufPage";
import EAutoVersicherungPage from "./pages/EAutoVersicherungPage";
import EAutoSchiebenPage from "./pages/EAutoSchiebenPage";
import ElektroautoWartungPage from "./pages/ElektroautoWartungPage";
import ElektroautoProbefahrtChecklistePage from "./pages/ElektroautoProbefahrtChecklistePage";
import ErstesElektroautoGeschichtePage from "./pages/ErstesElektroautoGeschichtePage";
import LadenOhneWallboxPage from "./pages/LadenOhneWallboxPage";
import StrompreisePage from "./pages/StrompreisePage";
import WallboxKostenPage from "./pages/WallboxKostenPage";
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
        <Route path="/ratgeber/wallbox-kosten-installation" element={<WallboxKostenPage />} />
        <Route path="/ratgeber/effiziente-elektroautos" element={<EffizienteElektroautosPage />} />
        <Route path="/ratgeber/elektroauto-reichweite-winter-test" element={<ElektroautoReichweiteWinterTest />} />
        <Route path="/ratgeber/thg-quote" element={<ThgQuotePage />} />
        <Route path="/ratgeber/erstes-elektroauto-geschichte" element={<ErstesElektroautoGeschichtePage />} />
        <Route path="/ratgeber/strompreise-2025" element={<StrompreisePage />} />
        <Route path="/ratgeber/elektroauto-wartung" element={<ElektroautoWartungPage />} />
        <Route path="/ratgeber/laden-ohne-wallbox-mieter" element={<LadenOhneWallboxPage />} />
        <Route path="/ratgeber/elektroauto-leasing-oder-kauf" element={<ElektroautoLeasingKaufPage />} />
        <Route path="/ratgeber/e-auto-pendler" element={<EAutoPendlerPage />} />
        <Route path="/ratgeber/elektroauto-versicherung" element={<EAutoVersicherungPage />} />
        <Route path="/ratgeber/elektroauto-probefahrt-checkliste" element={<ElektroautoProbefahrtChecklistePage />} />
        <Route path="/ratgeber/e-auto-schieben" element={<EAutoSchiebenPage />} />
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
