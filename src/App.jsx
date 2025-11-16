import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/start-page";
import RechnerPage from "./pages/RechnerPage";
import RatgeberPage from "./pages/RatgeberPage";
import KaufberatungPage from "./pages/KaufberatungPage";
import MythenPage from "./pages/MythenPage";
import ThgQuotePage from "./pages/ThgQuotePage";
import LadezeitPage from './pages/LadezeitPage';
import ImpressumPage from "./pages/impressum-page";
import DatenschutzPage from "./pages/datenschutz-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/rechner" element={<RechnerPage />} />

        {/* Ratgeber-Bereich */}
        <Route path="/ratgeber" element={<RatgeberPage />} />
        <Route path="/ratgeber/kaufberatung" element={<KaufberatungPage />} />
        <Route path="/ratgeber/mythen" element={<MythenPage />} />
        <Route path="/ratgeber/thg-quote" element={<ThgQuotePage />} />
        <Route path="/ratgeber/ladezeit" element={<LadezeitPage />} />


        {/* Rechtliches */}
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </Router>
  );
}

export default App;
