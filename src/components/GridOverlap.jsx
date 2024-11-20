import '../css/style.css';
import '../css/gridoverlap.css';

function GridOverlap() {
  return (
    <>
      <div className="row">
        <figure>
          <img
            src="/images/fem-jupiter.jpg"
            alt="Jupiter and its Galilean moons."
          />
          <figcaption>
            <h2>Jupiter</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/fem-saturn.jpg" alt="Saturn and its moons." />

          <figcaption>
            <h2>Saturn and its moons</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/fem-neptune.jpg"
            alt="Triton, Neptune's main moon, in front of Neptune."
          />

          <figcaption>
            <h2>Triton and Neptune</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </figcaption>
        </figure>
        <figure>
          <img src="/images/fem-pluto.jpg" alt="Pluto and Charon." />

          <figcaption>
            <h2>Pluto and Charon</h2>
            <p>Still a planet... in our hearts.</p>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default GridOverlap;
