import '../css/style.css';
import '../css/homeplanets.css';

export default function HomePlanets() {
  return (
    <div className="planetOverlay">
      <section className="homePlanetsOverlap">
        <div>
          <img
            src="/images/fem-jupiter.jpg"
            alt="Jupiter and the Galilean moons."
          />
        </div>
        <div>
          <img src="/images/fem-pluto.jpg" alt="Pluto and its moon, Charon." />
        </div>
        <div>
          <img src="/images/fem-saturn.jpg" alt="Saturn and its moons." />
        </div>
        <div>
          <img
            src="/images/fem-neptune.jpg"
            alt="Triton, Neptune's largest moon, and Neptune."
          />
        </div>
        <div>
          <img
            src="/images/fem-earth2.jpg"
            alt="Earth from orbit, with the moon crossing in between the camera and Earth."
          />
        </div>
      </section>
    </div>
  );
}
