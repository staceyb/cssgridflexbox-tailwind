import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import MoonsofJupiterGrid from './components/MoonsOfJupiter.Grid';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoonsofJupiterGrid />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
