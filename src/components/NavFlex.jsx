import { Link } from 'react-router-dom';
import '../css/style.css';
import '../css/navflex.css';

export default function NavFlex() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src="images/logo192.png" alt="Home." className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/moonsofjupiter">Moons Of Jupiter</Link>
        </li>
        <li>
          <Link to="/saturnmoons">Moons of Saturn</Link>
        </li>
        <li>
          <Link to="/saturnmoonsflex">Moons of Saturn (Flex)</Link>
        </li>
        <li>
          <Link to="/mars">Mars</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/saturnmoonscq">Moons of Saturn (Container Query)</Link>
        </li>
      </ul>
    </nav>
  );
}
