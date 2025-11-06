import React from 'react';
import StartPage from './pages/start-page';
import RechnerPage from './pages/rechner-page';
import InformationenPage from './pages/informationen-page';
import ImpressumPage from './pages/impressum-page';
import DatenschutzPage from './pages/datenschutz-page';

function App() {
  // Simple client-side routing based on path
  const path = window.location.pathname;

  // Route to the correct page
  if (path === '/' || path === '/start') {
    return <StartPage />;
  } else if (path === '/rechner') {
    return <RechnerPage />;
  } else if (path === '/informationen') {
    return <InformationenPage />;
  } else if (path === '/impressum') {
    return <ImpressumPage />;
  } else if (path === '/datenschutz') {
    return <DatenschutzPage />;
  } else {
    // Default to start page for unknown routes
    return <StartPage />;
  }
}

export default App;
