import React from 'react';

import ioFallback from '/src/imgs/io.jpg?w=630';
import ioAVIFSrc from '/src/imgs/io.jpg?w=200,400,630,1260&format=avif&as=srcset';

import callistoFallback from '/src/imgs/callisto.jpg?w=630';
import callistoAVIFSrc from '/src/imgs/callisto.jpg?w=200,400,630,1260&format=avif&as=srcset';

import europaFallback from '/src/imgs/europa.jpg?w=630';
import europaAVIFSrc from '/src/imgs/europa.jpg?w=200,400,630,1260&format=avif&as=srcset';

import ganymedeFallback from '/src/imgs/ganymede.jpg?w=630';
import ganymedeAVIFSrc from '/src/imgs/ganymede.jpg?w=200,400,630,1260&format=avif&as=srcset';

function MoonsOfJupiterGrid() {
  return (
    <div className="max-w-[1200px] m-auto text-black dark:text-white">
      <h1>Galilean Moons of Jupiter</h1>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] col-gap-4 row-gap-8 m-8">
        <figure className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] items-center gap-8">
          <picture>
            <source srcSet={ioAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={ioFallback}
              alt="A pizza looking moon. The outline of an erupting volcano is on the left."
            />
          </picture>
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
          <picture>
            <source srcSet={callistoAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={callistoFallback}
              alt="A white moon with orange cracks all over the surface."
            />
          </picture>
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
          <picture>
            <source srcSet={europaAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={europaFallback}
              alt="A pizza looking moon. The outline of an erupting volcano is on the left."
            />
          </picture>
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
          <picture>
            <source srcSet={ganymedeAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={ganymedeFallback}
              alt="A moon that looks similar to our own, with a giant crater in the upper right."
            />
          </picture>
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
