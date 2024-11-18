import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import MoonsofJupiterGrid from './components/MoonsOfJupiterGrid';
import MarsGrid from './components/MarsGrid';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoonsofJupiterGrid />} />
      <Route path="/mars/" element={<MarsGrid />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
