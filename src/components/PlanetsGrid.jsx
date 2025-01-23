import React from 'react';
import LinkButton from './ButtonLink';
//console.log(import.meta.env); //Get environment data
/* Grid Info:Uses grid-template-areas and subgrid */

import solarSysFallback from '/src/imgs/fem-new-system.jpg?w=760';
import solarSysAVIFSrc from '/src/imgs/fem-new-system.jpg?w=390;760;916&format=avif&as=srcset';

import jupiterFallback from '/src/imgs/fem-jupiter.jpg?w=440';
import jupiterAVIFSrc from '/src/imgs/fem-jupiter.jpg?w=200;390;440&format=avif&as=srcset';

import marsFallback from '/src/imgs/fem-mars.jpg?w=440';
import marsAVIFSrc from '/src/imgs/fem-mars.jpg?w=200;390;440&format=avif&as=srcset';

import plutoFallback from '/src/imgs/fem-pluto.jpg?w=440';
import plutoAVIFSrc from '/src/imgs/fem-pluto.jpg?w=200;390;440&format=avif&as=srcset';

import saturnFallback from '/src/imgs/fem-saturn.jpg?w=440';
import saturnAVIFSrc from '/src/imgs/fem-saturn.jpg?w=200;390;440&format=avif&as=srcset';

import neptuneFallback from '/src/imgs/fem-neptune.jpg?w=440';
import neptuneAVIFSrc from '/src/imgs/fem-neptune.jpg?w=200;390;440&format=avif&as=srcset';

import earthFallback from '/src/imgs/fem-earth2.jpg?w=440';
import earthAVIFSrc from '/src/imgs/fem-earth2.jpg?w=200;390;440&format=avif&as=srcset';

export default function PlanetsGrid() {
  return (
    <div className="max-w-[1200px] m-auto text-black dark:text-white">
      <h1>Planets and Moons</h1>
      <div
        className="card-container xsm:grid xsm:grid-cols-[1fr_1fr] xsm:grid-row-[0.2fr_1fr_0.1fr] 
           xsm:gap-[1rem] smmd:grid-cols-[repeat(3,_1fr)]
           [grid-template-areas:'featured_featured_earth''featured_featured_mars''featured_featured_jupiter''saturn_neptune_pluto']">
        <div className="feature card rounded-lg grid grid-cols-[1fr_1fr] py-12 px-4 items-center gap-0  smlg:[grid-area:featured] smlg:block xsm:grid-rows-[0.2fr_1fr_0.2fr_0.1fr] xsm:col-start-1 xsm:col-end-4 xsm:row-start-1 xsm:row-end-5 border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="col-start-1 col-end-3 text-2xl text-left">
            Our Solar System
          </h2>
          <img
            className="col-start-1 col-end-3 row-start-2 row-end-3"
            srcSet={solarSysAVIFSrc}
            src={solarSysFallback}
            width="916"
            height="529"
            alt="Many of the planets in the solar system, plus a few moons."
          />
          <p className="hidden text-lg xsm:block xsm:col-start-1 col-end-3 xsm:pt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, ad! Asperiores sed quae laudantium eveniet quis
            doloremque, ad veritatis ipsam?
          </p>
          <LinkButton
            label="Learn more at NASA"
            url="https://images.nasa.gov/details/PIA03153"
            fontsize="xl"
            classNames="row-start-3 row-end-4 mt-8 xsm:row-start-4 xsm:row-end-5"
          />
        </div>
        <div
          className="card rounded-lg grid grid-cols-[3fr_1fr] xsm:grid-rows-[subgrid] xsm:grid-cols-[1fr] 
        smlg:[grid-area:earth] smlg:grid-cols-[1fr_1fr] smlg:grid-rows-[1fr_1fr] smlg:p-4 smlg: items-center
        py-12 px-4  xsm:col-start-1 xsm:col-end-2 xsm:row-start-5 xsm:row-end-8 xsm:p-4 xsm:items-start items-center
        gap-0 border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="text-2xl text-left smlg:row-start-1 smlg:row-end-2 xsm:mb-0 ">
            Earth and Moon
          </h2>
          <img
            className="col-start-2 col-end-3 rounded-lg row-start-1 row-end-3 
            smlg:col-start-2 smlg:col-end-2 smlg:row-start-1 smlg:row-end-3 
            xsm:col-start-1 xsm:col-end-2 xsm:row-start-2 xsm:row-end-2"
            srcSet={earthAVIFSrc}
            sizes="(max-width:640px) 50vw, 385px"
            src={earthFallback}
            alt="The dark side of the moon in front of the Earth as viewed from a spacecraft."
          />
          <LinkButton
            label="Learn more at NASA"
            url="https://images.nasa.gov/details/from-a-million-miles-away-nasa-camera-shows-moon-crossing-face-of-earth_20129140980_o"
            fontsize="xl"
            classNames="xsm:row-start-3 xsm-row-end-4 smlg:col-start-1 smlg:col-end-3 
            "
          />
        </div>
        <div
          className="card rounded-lg grid grid-cols-[3fr_1fr] xsm:grid-rows-[subgrid] xsm:grid-cols-[1fr] 
        xsm:col-start-2 xsm:col-end-3 xsm:row-start-5 xsm:row-end-8 xsm:p-4 xsm:items-start
        smlg:[grid-area:mars] smlg:grid-cols-[1fr_1fr] smlg:grid-rows-[1fr_1fr] smlg:p-4 smlg: items-center py-12 px-4  items-center gap-0 border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="text-2xl text-left smlg:row-start-1 smlg:row-end-2 xsm:mb-0 ">
            Mars, Phobos, and Deimos
          </h2>
          <img
            className="col-start-2 col-end-3 rounded-lg row-start-1 row-end-3
            smlg:col-start-2 smlg:col-end-2 smlg:row-start-1 smlg:row-end-3  
            xsm:col-start-1 xsm:col-end-2 xsm:row-start-2 xsm:row-end-2"
            srcSet={marsAVIFSrc}
            sizes="(max-width:640px) 50vw, 385px"
            src={marsFallback}
            alt="Part of Mars with two tiny asteroid-looking moons."
          />
          <LinkButton
            label="Learn more at NASA"
            url="https://images.nasa.gov/details/PIA17305"
            fontsize="xl"
            classNames="xsm:row-start-3 xsm-row-end-4 smlg:col-start-1 smlg:col-end-3"
          />
        </div>
        <div
          className="card rounded-lg grid grid-cols-[3fr_1fr] smmd:col-start-3 smmd:col-end-4 smmd:row-start-5 
        smmd:row-end-8 xsm:grid-rows-[subgrid] xsm:grid-cols-[1fr] xsm:col-start-1 xsm:col-end-2 xsm:row-start-8
        xsm:row-end-11 smlg:[grid-area:jupiter] smlg:grid-cols-[1fr_1fr] smlg:grid-rows-[1fr_1fr] smlg:p-4 smlg: items-center
        rounded-lg xsm:p-4 xsm:items-start py-12 px-4 items-center gap-0 border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="text-2xl text-left smlg:row-start-1 smlg:row-end-2 xsm:mb-0 ">
            Jupiter and Galilean Moons
          </h2>
          <img
            className="col-start-2 col-end-3 rounded-lg row-start-1 row-end-3 
            smlg:col-start-2 smlg:col-end-2 smlg:row-start-1 smlg:row-end-3 
            xsm:col-start-1 xsm:col-end-2 xsm:row-start-2 xsm:row-end-2"
            srcSet={jupiterAVIFSrc}
            sizes="(max-width:640px) 50vw, 385px"
            src={jupiterFallback}
            alt="Jupiter and its four Galilean moons."
          />
          <LinkButton
            label="Learn more at NASA"
            url="https://images.nasa.gov/details/PIA01481"
            fontsize="xl"
            classNames="xsm:row-start-3 xsm-row-end-4 smlg:col-start-1 smlg:col-end-3"
          />
        </div>
        <div
          className="card rounded-lg grid grid-cols-[3fr_1fr] smmd:col-start-1 smmd:col-end-2 smmd:row-start-8 
        smmd:row-end-11 xsm:grid-rows-[subgrid] xsm:grid-cols-[1fr] xsm:col-start-2 xsm:col-end-3
        xsm:row-start-8 xsm:row-end-11 xsm:p-4 xsm:items-start smlg:[grid-area:saturn] smlg:grid-cols-[1fr_1fr] smlg:grid-rows-[1fr_1fr] smlg:p-4 smlg: items-center
        py-12 px-4 xsm:items-start items-center gap-0 border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="text-2xl text-left smlg:row-start-1 smlg:row-end-2 xsm:mb-0 ">
            Saturn and its moons
          </h2>
          <img
            className="col-start-2 col-end-3 rounded-lg row-start-1 row-end-3 
            smlg:col-start-2 smlg:col-end-2 smlg:row-start-1 smlg:row-end-3 
            xsm:col-start-1 xsm:col-end-2 xsm:row-start-2 xsm:row-end-2"
            srcSet={saturnAVIFSrc}
            sizes="(max-width:640px) 50vw, 385px"
            src={saturnFallback}
            alt="Saturn and several of its moons."
          />
          <LinkButton
            label="Learn more at NASA"
            url="https://images.nasa.gov/details/PIA01482"
            fontsize="xl"
            classNames="xsm:row-start-3 xsm-row-end-4 smlg:col-start-1 smlg:col-end-3"
          />
        </div>
        <div
          className="card rounded-lg grid grid-cols-[3fr_1fr] smmd:col-start-2 smmd:col-end-3 smmd:row-start-8 
        smmd:row-end-11 xsm:grid-rows-[subgrid] xsm:grid-cols-[1fr] xsm:col-start-1 xsm:col-end-2 xsm:row-start-11
        xsm:row-end-14 xsm:p-4 xsm:items-start xsm:items-start smlg:[grid-area:neptune] smlg:grid-cols-[1fr_1fr] 
        smlg:grid-rows-[1fr_1fr] smlg:p-4 smlg: items-center
        py-12 px-4 items-center gap-0 border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="text-2xl text-left smlg:row-start-1 smlg:row-end-2 xsm:mb-0 ">
            Neptune and Triton
          </h2>
          <img
            className="col-start-2 col-end-3 rounded-lg row-start-1 row-end-3 
            smlg:col-start-2 smlg:col-end-2 smlg:row-start-1 smlg:row-end-3 
            xsm:col-start-1 xsm:col-end-2 xsm:row-start-2 xsm:row-end-2"
            srcSet={neptuneAVIFSrc}
            sizes="(max-width:640px) 50vw, 385px"
            src={neptuneFallback}
            alt="Triton, a gigantic moon, sits squarely in front of Neptune."
          />
          <LinkButton
            label="Learn more at NASA"
            url="https://images.nasa.gov/details/PIA00340"
            fontsize="xl"
            classNames="xsm:row-start-3 xsm-row-end-4 smlg:col-start-1 smlg:col-end-3"
          />
        </div>
        <div
          className="card rounded-lg grid grid-cols-[3fr_1fr] smmd:col-start-3 smmd:col-end-4 smmd:row-start-8 
        smmd:row-end-11 xsm:grid-rows-[subgrid] xsm:grid-cols-[1fr] xsm:col-start-2 xsm:col-end-3 xsm:row-start-11
        xsm:row-end-14 xsm:p-4 xsm:items-start py-12 px-4 xsm:items-start smlg:[grid-area:pluto] smlg:grid-cols-[1fr_1fr] 
        smlg:grid-rows-[1fr_1fr] smlg:p-4 smlg: items-center
        items-center gap-0 border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="text-2xl text-left smlg:row-start-1 smlg:row-end-2 xsm:mb-0 ">
            Pluto and Charon
          </h2>
          <img
            className="col-start-2 col-end-3 rounded-lg row-start-1 row-end-3 
            smlg:col-start-2 smlg:col-end-2 smlg:row-start-1 smlg:row-end-3 
            xsm:col-span-2 xsm:row-start-2 xsm:row-end-2"
            srcSet={plutoAVIFSrc}
            sizes="(max-width:640px) 50vw, 385px"
            src={plutoFallback}
            alt="Although Pluto is not technically a planet anymore, this photo of it with its moon Charon is pretty cool."
          />
          <LinkButton
            label="Learn more at NASA"
            url="https://images.nasa.gov/details/PIA19966"
            fontsize="xl"
            classNames="xsm:row-start-3 xsm-row-end-4 smlg:col-start-1 smlg:col-end-3"
          />
        </div>
      </div>
    </div>
  );
}
