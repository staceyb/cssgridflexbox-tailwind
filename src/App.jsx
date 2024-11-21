import { Outlet } from 'react-router-dom';
import NavFlex from './components/NavFlex';

const App = () => {
  return (
    <>
      <NavFlex></NavFlex>
      <Outlet />
    </>
  );
};

export default App;
