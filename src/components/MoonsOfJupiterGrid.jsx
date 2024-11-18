import '../css/style.css';
import '../css/moonsofjupiter.css';

function MoonsOfJupiterGrid() {
  return (
    <>
      <h1>Galilean Moons of Jupiter</h1>
      <div className="grid-container">
        <figure>
          <img
            src="/images/io.jpg"
            alt="A pizza looking moon. The outline of an erupting volcano is on the left."
          />
          <figcaption>
            Volcanic Activity on Io via
            <cite>
              <a
                href="https://images.nasa.gov/details/PIA01530"
                rel="noreferrer"
                target="_blank">
                NASA
              </a>
            </cite>
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/callisto.jpg"
            alt="A white moon with orange cracks all over the surface."
          />
          <figcaption>
            Bright scars on a darker surface testify to a long history of
            impacts on Jupiter'a moon Callisto in this image of Callisto from
            NASA Galilieo spacecraft.
            <cite>
              <a
                href="https://images.nasa.gov/details/PIA03456"
                rel="noreferrer"
                target="_blank">
                NASA
              </a>
            </cite>
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/europa.jpg"
            alt="A pizza looking moon. The outline of an erupting volcano is on the left."
          />
          <figcaption>
            The scene shows the stunning diversity of Europa's surface geology.
            Long, linear cracks and ridges crisscross the surfaces, interrupted
            by regions of disrupted terrain where the surface ice crust has been
            broken up and re-frozen into new patterns.
            <cite>
              <a
                href="https://images.nasa.gov/details/PIA19048"
                rel="noreferrer"
                target="_blank">
                NASA
              </a>
            </cite>
          </figcaption>
        </figure>
        <figure>
          <img
            src="/images/ganymede.jpg"
            alt="A moon that looks similar to our own, with a giant crater in the upper right."
          />
          <figcaption>
            This enhanced image of the jovian moon Ganymede was obtained the the
            JunoCam imager aboard NASA's Juno spacecraft during the mission's
            June 7,2021, flyby of the icy moon on Juno's 34th pass close to
            Jupiter.
            <cite>
              <a
                href="https://images.nasa.gov/details/PIA25028"
                rel="noreferrer"
                target="_blank">
                NASA
              </a>
            </cite>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default MoonsOfJupiterGrid;
