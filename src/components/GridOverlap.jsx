import React from 'react';

import jupiterFallback from '/src/imgs/fem-jupiter.jpg?w=630';
import jupiterAVIFSrc from '/src/imgs/fem-jupiter.jpg?w=320,630;960,1920&format=avif&as=srcset';

import neptuneFallback from '/src/imgs/fem-neptune.jpg?w=630';
import neptuneAVIFSrc from '/src/imgs/fem-neptune.jpg?w=320,630;960,1920&format=avif&as=srcset';

import saturnFallback from '/src/imgs/fem-saturn.jpg?w=630';
import saturnAVIFSrc from '/src/imgs/fem-saturn.jpg?w=320,630;960,1920&format=avif&as=srcset';

import plutoFallback from '/src/imgs/fem-pluto.jpg?w=630';
import plutoAVIFSrc from '/src/imgs/fem-pluto.jpg?w=320,630;960,1920&format=avif&as=srcset';

function GridOverlap() {
  return (
    <div className="grid max-w-[1200px] mx-auto sm:grid-cols-[1fr_1fr] sm:gap-[1vw]">
      <figure className="grid grid-cols-[1fr] grid-rows-[60%_40%] items-center gap-8">
        <img
          className="row-start-1 row-end-3 col-start-1 col-end-2"
          sizes="(max-width: 640px) calc(100vw-39px), 519px"
          srcSet={jupiterAVIFSrc}
          src={jupiterFallback}
          width="488"
          height="488"
          alt="Jupiter and its Galilean moons."
        />
        <figcaption className="col-start-1 col-end-2 row-start-2 opacity-[0.6] row-end-3 bg-color-black text-color-white p4">
          <h2 className="m2">Jupiter</h2>
          <p className="m2 px-2">Lorem ipsum dolor sit amet.</p>
        </figcaption>
      </figure>
      <figure className="grid grid-cols-[1fr] grid-rows-[60%_40%] items-center gap-8">
        <img
          className="row-start-1 row-end-3 col-start-1 col-end-2"
          sizes="(max-width: 640px) calc(100vw-39px), 519px"
          srcSet={saturnAVIFSrc}
          src={saturnFallback}
          width="488"
          height="488"
          alt="Saturn and its moons."
        />
        <figcaption className="col-start-1 col-end-2 row-start-2 opacity-[0.6] row-end-3 bg-color-black text-color-white p4">
          <h2 className="m2">Saturn and its moons</h2>
          <p className="m2 px-2">Lorem ipsum dolor sit amet.</p>
        </figcaption>
      </figure>
      <figure className="grid grid-cols-[1fr] grid-rows-[60%_40%] items-center gap-8">
        <img
          className="row-start-1 row-end-3 col-start-1 col-end-2"
          sizes="(max-width: 640px) calc(100vw-39px), 519px"
          srcSet={neptuneAVIFSrc}
          src={neptuneFallback}
          width="488"
          height="488"
          alt="Triton, Neptune's main moon, in front of Neptune."
        />
        <figcaption className="col-start-1 col-end-2 row-start-2 opacity-[0.6] row-end-3 bg-color-black text-color-white p4">
          <h2 className="m2">Triton and Neptune</h2>
          <p className="m2 px-2">Lorem ipsum dolor sit amet.</p>
        </figcaption>
      </figure>
      <figure className="grid grid-cols-[1fr] grid-rows-[60%_40%] items-center gap-8">
        <img
          className="row-start-1 row-end-3 col-start-1 col-end-2"
          sizes="(max-width: 640px) calc(100vw-39px), 519px"
          srcSet={plutoAVIFSrc}
          src={plutoFallback}
          width="488"
          height="488"
          alt="Pluto and Charon."
        />
        <figcaption className="col-start-1 col-end-2 row-start-2 opacity-[0.6] row-end-3 bg-color-black text-color-white p4">
          <h2 className="m2">Pluto and Charon</h2>
          <p className="m2 px-2">Still a planet... in our hearts.</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default GridOverlap;
