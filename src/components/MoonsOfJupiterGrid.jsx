import React from 'react';

function MoonsOfJupiterGrid() {
  return (
    <div className="max-w-[1200px] m-auto text-black dark:text-white">
      <h1>Galilean Moons of Jupiter</h1>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] col-gap-4 row-gap-8 m-8">
        <figure className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] items-center gap-8">
          <img
            src="/images/io.jpg"
            alt="A pizza looking moon. The outline of an erupting volcano is on the left."
          />
          <figcaption className="m-4">
            Volcanic Activity on Io via
            <cite className="ml-2">
              <a
                href="https://images.nasa.gov/details/PIA01530"
                rel="noreferrer"
                target="_blank">
                NASA
              </a>
            </cite>
          </figcaption>
        </figure>
        <figure className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] items-center gap-8">
          <img
            src="/images/callisto.jpg"
            alt="A white moon with orange cracks all over the surface."
          />
          <figcaption className="m-4">
            Bright scars on a darker surface testify to a long history of
            impacts on Jupiter'a moon Callisto in this image of Callisto from
            NASA Galilieo spacecraft.
            <cite className="ml-2">
              <a
                href="https://images.nasa.gov/details/PIA03456"
                rel="noreferrer"
                target="_blank">
                NASA
              </a>
            </cite>
          </figcaption>
        </figure>
        <figure className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 roitems-center gap-8">
          <img
            src="/images/europa.jpg"
            alt="A pizza looking moon. The outline of an erupting volcano is on the left."
          />
          <figcaption className="m-4">
            The scene shows the stunning diversity of Europa's surface geology.
            Long, linear cracks and ridges crisscross the surfaces, interrupted
            by regions of disrupted terrain where the surface ice crust has been
            broken up and re-frozen into new patterns.
            <cite className="ml-2">
              <a
                href="https://images.nasa.gov/details/PIA19048"
                rel="noreferrer"
                target="_blank">
                NASA
              </a>
            </cite>
          </figcaption>
        </figure>
        <figure className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] md:col-start-1 md:col-end-3 items-center gap-8">
          <img
            src="/images/ganymede.jpg"
            alt="A moon that looks similar to our own, with a giant crater in the upper right."
          />
          <figcaption className="m-4">
            This enhanced image of the jovian moon Ganymede was obtained the the
            JunoCam imager aboard NASA's Juno spacecraft during the mission's
            June 7,2021, flyby of the icy moon on Juno's 34th pass close to
            Jupiter.
            <cite className="ml-2">
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
    </div>
  );
}

export default MoonsOfJupiterGrid;
