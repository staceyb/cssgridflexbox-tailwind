import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import MoonsofJupiterGrid from './components/MoonsOfJupiterGrid';
import MarsGrid from './components/MarsGrid';
import PlanetsGrid from './components/PlanetsGrid';
import MoonsOfSaturnGrid from './components/MoonsOfSaturnGrid';
import GridOverlap from './components/GridOverlap';
import MoonsOfSaturnFlexbox from './components/MoonsOfSaturnFlexbox';
import MoonsOfSaturnCQ from './components/MoonsOfSaturnCQ';
import App from './App';
import './css/style.css';
import ErrorPage from './components/ErrorPage';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
          <Route path="/moonsofjupiter" element={<MoonsofJupiterGrid />} />
          <Route path="/mars" element={<MarsGrid />} />
          <Route path="/planets" element={<PlanetsGrid />} />
          <Route path="/saturnmoons" element={<MoonsOfSaturnGrid />} />
          <Route path="/gridoverlap" element={<GridOverlap />} />
          <Route path="/saturnmoonsflex" element={<MoonsOfSaturnFlexbox />} />
          <Route path="/saturnmoonscq" element={<MoonsOfSaturnCQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
