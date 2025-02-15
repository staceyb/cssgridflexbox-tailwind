import React from 'react';

import jupiterFallback from '/src/imgs/fem-jupiter.jpg?w=440';
import jupiterAVIFSrc from '/src/imgs/fem-jupiter.jpg?w=200;390;440&format=avif&as=srcset';

import plutoFallback from '/src/imgs/fem-pluto.jpg?w=440';
import plutoAVIFSrc from '/src/imgs/fem-pluto.jpg?w=200;390;440&format=avif&as=srcset';

import saturnFallback from '/src/imgs/fem-saturn.jpg?w=440';
import saturnAVIFSrc from '/src/imgs/fem-saturn.jpg?w=200;390;440&format=avif&as=srcset';

import neptuneFallback from '/src/imgs/fem-neptune.jpg?w=440';
import neptuneAVIFSrc from '/src/imgs/fem-neptune.jpg?w=200;390;440&format=avif&as=srcset';

import earthFallback from '/src/imgs/fem-earth2.jpg?w=440';
import earthAVIFSrc from '/src/imgs/fem-earth2.jpg?w=200;390;440&format=avif&as=srcset';

export default function HomePlanets() {
  //console.log(jupiterImage);
  // console.log(jupiterFallback);
  //console.log('AVIF = ', plutoAVIFSrc);

  return (
    <div className="bg-white max-w-[900px] m-auto mt-4 mb-8 mr-auto ml-auto dark:bg-black dark-border-white">
      <section className="homePlanetsOverlap grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] gap-0">
        <div className="col-start-1 col-end-4 row-start-1 row-end-4 border-[1vw] border-white border-b-[0.5vw] border-r-[0.5vw]">
          <img
            srcSet={jupiterAVIFSrc}
            sizes="(max-width:640px) 50vw, 440px"
            width="440"
            height="440"
            alt="Jupiter and it Galilean moons"
            src={jupiterFallback}
          />
        </div>
        <div className="col-start-4 col-end-7 row-start-1 row-end-4 border-[1vw] border-white border-b-[0.5vw] border-l-[0.5vw]">
          <img
            srcSet={plutoAVIFSrc}
            sizes="(max-width:640px) 50vw, 440px"
            width="440"
            height="440"
            src={plutoFallback}
            alt="Pluto and its moon, Charon."
          />
        </div>
        <div className="col-start-1 col-end-4 row-start-4 row-end-7 border-[1vw] border-white border-b-[0.5vw] border-r-[0.5vw]">
          <img
            srcSet={saturnAVIFSrc}
            sizes="(max-width:640px) 50vw, 440px"
            width="440"
            height="440"
            src={saturnFallback}
            alt="Saturn and its moons."
          />
        </div>
        <div className="col-start-4 col-end-7 row-start-4 row-end-7 border-[1vw] dark-border-white border-b-[0.5vw] border-l-[0.5vw]">
          <img
            srcSet={neptuneAVIFSrc}
            sizes="(max-width:640px) 50vw, 440px"
            width="440"
            height="440"
            src={neptuneFallback}
            alt="Triton, Neptune's largest moon, and Neptune."
          />
        </div>
        <div className="col-start-3 col-end-5 row-start-3 row-end-5 overflow-hidden border-[1vw] dark-border-white rotate-45 scale-[1.1]">
          <img
            srcSet={earthAVIFSrc}
            sizes="(max-width:640px) 50vw, 385px"
            className="scale-[1.45]"
            width="385"
            height="385"
            src={earthFallback}
            alt="Earth from orbit, with the moon crossing in between the camera and Earth."
          />
        </div>
      </section>
    </div>
  );
}
