import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';

import './css/style.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
