import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import MoonsofJupiterGrid from './components/MoonsOfJupiterGrid';
import MarsGrid from './components/MarsGrid';
import PlanetsGrid from './components/PlanetsGrid';
import GridOverlap from './components/GridOverlap';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoonsofJupiterGrid />} />
      <Route path="/mars" element={<MarsGrid />} />
      <Route path="/planets" element={<PlanetsGrid />} />
      <Route path="/gridoverlap" element={<GridOverlap />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
