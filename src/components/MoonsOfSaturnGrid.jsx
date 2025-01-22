import React from 'react';
import AdditionalLinks from './AdditionalLinks';
import LinkButton from './ButtonLink';
/* Grid Info: Uses subgrid */

import mimasFallback from '/src/imgs/fem-mimas.jpg?w=590';
import mimasAVIFSrc from '/src/imgs/fem-mimas.jpg?w=200,400,610,1220&format=avif&as=srcset';

import titanFallback from '/src/imgs/fem-titan-mosaic.jpg?w=300';
import titanAVIFSrc from '/src/imgs/fem-titan-mosaic.jpg?w=200,300,600&format=avif&as=srcset';

import enceladusFallback from '/src/imgs/fem-enceladus.jpg?w=300';
import enceladusAVIFSrc from '/src/imgs/fem-enceladus.jpg?w=200,300,600&format=avif&as=srcset';

import iapetusFallback from '/src/imgs/fem-iapetus.jpg?w=300';
import iapetusAVIFSrc from '/src/imgs/fem-iapetus.jpg?w=200,300,600&format=avif&as=srcset';

import phoebeFallback from '/src/imgs/fem-phoebe.jpg?w=300';
import phoebeAVIFSrc from '/src/imgs/fem-phoebe.jpg?w=200,300,600&format=avif&as=srcset';

function MoonsOfSaturn() {
  return (
    <div className="moonsofsaturn max-w-[1200px] m-auto text-black dark:text-white">
      <h1>The Moons of Saturn</h1>
      <div
        className="msContainer border-[#000000] dark:border-[#f5f5f5] 
      sm:grid sm:grid-cols-[1fr_1fr] sm:grid-rows[auto_1fr_auto] sm:border-t
      md:grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-{auto_auto_auto]">
        <article
          className="msCardTail block py-12 px-4 sm:grid sm:grid-cols-[3fr_1fr] sm:col-start-1 
          sm:col-end-3 sm:grid-rows-[auto] sm:row-span-4 
          md:col-start-1 md:col-end-4 md:border-t
          md:grid-rows[minmax(0,_0.7fr)_minmax(0,_1fr)_auto]
          md:row-start-1 md:row-end-3
          lg:grid-rows-[minmax(0,_1fr)_minmax(0,_0.1fr)_minmax(0,_0.2fr)_auto] 
          lg:gap-8 lg:grid-cols-[1fr,1fr] lg:col-start-1 lg:col-end-3">
          <picture>
            <source srcSet={mimasAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={mimasFallback}
              className="col-start-2 col-end-3 row-start-1 row-end-3 rounded-md self-start 
            sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:max-w-full
            md:col-start-1 md:col-end-4
            lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-1"
              alt="Death Star vs. Mimas, with similar looking craters in the upper right."
            />
          </picture>
          <h2
            className="col-start-1 col-end-2 mb-4 text-left 
          sm:col-span-4 sm:row-start-2 sm:row-end-3 
          md:col-start-1 md:col-end-3
          lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3
          lg:self-start lg:mb-4">
            That's No Moon. It's a Space Station.
          </h2>
          <p
            className="text my-4 mr-4 ml-0 sm:col-span-4 
          md:ml-0 md:col-start-1 md:col-end-4
          lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4">
            At 198km diameter, Mimas is bigger than the first Death Star (120km)
            but smaller than the second (800km).{' '}
          </p>
          <LinkButton
            classNames="sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-4 
            md:col-start-1 md:col-end-4"
            url="https://science.nasa.gov/saturn/moons/mimas/"
            label="More about Mimas"
            fontsize="base"></LinkButton>
        </article>
        <article
          className="msCardTail py-12 px-4 grid grid-cols-[3fr_1fr] py-12 px-4 gap-4 
        items-center sm:row-span-4 sm:grid-rows-subgrid
        md:grid-cols-[2fr_2fr] md:border-t
        md:grid-rows-[auto] md:col-span-3 md:row-span-2
        md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2 md:block
        lg:grid-rows-subgrid lg:grid-col-[1fr_1fr]
        lg:grid lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-1">
          <picture>
            <source srcSet={titanAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={titanFallback}
              className="col-start-2 col-end-3 row-start-1 row-end-3 rounded-md self-start 
            sm:col-start-4 sm:col-end-5 sm:grid-row-start-1 sm:grid-row-end-4 
            sm:max-w-[100px] md:max-w-[150px]
            lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
              alt="A fuzzy looking world, with darker patches on a mostly light surface."
            />
          </picture>
          <h2
            className="text-left mb-4 
          sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-span-1
          sm:self-start
          lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:self-start lg:mb-4">
            Titan's Ethane Lake
          </h2>
          <p
            className="text my-4 mr-4 ml-0 
          sm:col-start-1 sm:col-end-5 sm:row-start-2 sm:row-end-3
          sm:self-start sm:ml-0 sm:my-16
          md:hidden">
            Titan is the only world besides Earth that has standing bodies of
            liquid, including rivers, lakes and seas, on its surface. Titan is
            bigger than Earth's moon, and larger than even the planet Mercury.
          </p>
          <LinkButton
            classNames="sm:col-start-1 sm:col-end-5 sm:row-start-3 
            sm:row-end-4
            lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:self-end"
            url="https://science.nasa.gov/saturn/moons/titan/"
            label="More about Titan"
            fontsize="base"></LinkButton>
        </article>
        <article
          className="msCardTail border-[#000000] dark:border-[#f5f5f5] py-12 px-4 grid grid-cols-[3fr_1fr] py-12 px-4 gap-4 
          items-center sm:row-span-4 sm:grid-rows-subgrid md:grid-cols-[2fr_2fr] 
          md:grid-rows-[minmax(0, 0.7fr)_minmax(0,1fr)_auto] md:border-t
          md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-3 md:block
          lg:grid-rows-subgrid lg-grid-col-{1fr_1fr]
          lg:grid lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-1
          lg:border-t lg:border-solid">
          <picture>
            <source srcSet={enceladusAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={enceladusFallback}
              className="col-start-2 col-end-3 row-start-1 row-end-3 rounded-md self-start 
            sm:col-start-4 sm:col-end-5 sm:grid-row-start-1 sm:grid-row-end-4 
            sm:max-w-[100px] md:max-w-[150px]
            lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
              alt="Enceladus is a water world."
            />
          </picture>
          <h2
            className="text-left mb-4 
            sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-span-1 
            sm:self-start
            lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3
            lg:self-start lg:mb-4">
            Enceladus: Geyser World
          </h2>
          <p
            className="text my-4 mr-4 ml-0 sm:col-start-1 
          sm:col-end-5 sm:row-start-2 sm:row-end-3 sm:self-start sm:ml-0 sm:my-16
          md:hidden">
            Geysers venting from this ocean world add material to Saturn's E
            ring, and give clues that its subsurface saltwater ocean could be a
            possible habitat for life.
          </p>
          <LinkButton
            classNames="sm:col-start-1 sm:col-end-5 sm:row-start-3 sm:row-end-4
             lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:self-end"
            url="https://science.nasa.gov/saturn/moons/enceladus/"
            label="More about Enceladus"
            fontsize="base"></LinkButton>
        </article>
        <article
          className="msCardTail py-12 px-4 grid grid-cols-[3fr_1fr] py-12 px-4 
        gap-4 items-center sm:row-span-4 sm:grid-rows-subgrid
        md:grid-cols-[2fr_2fr]
        md:grid-rows-[auto]
        md:border-t md:col-start-1 md:col-end-3 md:row-start-3
        md:row-end-4
        lg:grid-rows-subgrid lg-grid-col-{1fr_1fr]
        lg:grid lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3
        lg:border-t">
          <picture>
            <source srcSet={iapetusAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={iapetusFallback}
              className="col-start-2 col-end-3 row-start-1 row-end-3 rounded-md self-start 
            sm:col-start-4 sm:col-end-5 sm:grid-row-start-1 sm:grid-row-end-4
            md-row-start-1 md:row-end-2 
            sm:max-w-[100px] md:max-w-[150px]
            lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
              alt="A white moon that looks like it has mold growing on one side of it."
            />
          </picture>
          <h2
            className="text-left mb-4 sm:col-start-1 
          sm:col-end-4 sm:row-start-1 sm:row-span-1 
          sm:self-start 
          md:self-start md:col-start-1 md:col-end-3
          lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3
          lg:self-start lg:mb-4">
            Iapetus: Yin and Yang
          </h2>
          <p
            className="text my-4 mr-4 ml-0 sm:col-start-1 
          sm:col-end-5 sm:row-start-2 sm:row-end-3 s
          m:self-start sm:ml-0 sm:my-16
          lg:hidden">
            Saturn has tidally locked Iapetus. The moon always presents the same
            face toward Saturn. With its distant, inclined orbit, Iapetus is the
            only large moon from which there is a nice view of the rings of
            Saturn.
          </p>
          <LinkButton
            classNames="sm:col-start-1 sm:col-end-5 sm:row-start-3
            lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:self-end"
            url="https://science.nasa.gov/saturn/moons/iapetus/"
            label="More about Iapetus"
            fontsize="base"></LinkButton>
        </article>
        <article
          className="msCardTail py-12 px-4 grid grid-cols-[3fr_1fr] py-12 px-4 
        gap-4 items-center sm:row-span-4 sm:grid-rows-subgrid
        md:grid-cols-[2fr_2fr] md:grid-rows-[auto]
        md:border-t md:col-start-3 md:col-end-5 md:row-start-3
        md:row-end-4
        lg:grid-rows-subgrid lg-grid-col-{1fr_1fr]
        lg:grid lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3
        lg:border-t">
          <picture>
            <source srcSet={phoebeAVIFSrc} type="image/avif" />
            <img
              width="600"
              height="600"
              src={phoebeFallback}
              className="col-start-2 col-end-3 row-start-1 row-end-3 rounded-md self-start 
            sm:col-start-4 sm:col-end-5 sm:grid-row-start-1 sm:grid-row-end-4 
            sm:max-w-[100px] md:max-w-[150px]
            md-row-start-1 md:row-end-2
            lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
              alt="A moon with heavy cratering, making it look more like an asteroid."
            />
          </picture>
          <h2
            className="text-left mb-4 
            sm:col-start-1 sm:col-end-4 sm:row-start-1 
           sm:row-span-1 sm:self-start
           md:col-start-1 md:col-end-3 md:self-start
           lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3
           lg:self-start lg:mb-4">
            Phoebe
          </h2>
          <p
            className="text my-4 mr-4 ml-0 sm:col-start-1 
          sm:col-end-5 sm:row-start-2 sm:row-end-3
          sm:self-start sm:ml-0 sm:my-16
          lg:hidden">
            Unlike most major moons orbiting Saturn, Phoebe is very dark and
            reflects only 6 percent of the sunlight it receives. Its darkness
            and irregular, retrograde orbit suggest Phoebe is most likely a
            captured object. A captured object is a celestial body that is
            trapped by the gravitational pull of a much bigger body, generally a
            planet. Phoebe's darkness, in particular, suggests that the small
            moon comes from the outer solar system, an area where there is
            plenty of dark material.
          </p>
          <LinkButton
            classNames="sm:col-start-1 sm:col-end-5 sm:row-start-3  
            lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:self-end"
            url="https://science.nasa.gov/saturn/moons/phoebe/"
            label="More about Phoebe"
            fontsize="base"></LinkButton>
        </article>
      </div>
      <AdditionalLinks></AdditionalLinks>
    </div>
  );
}

export default MoonsOfSaturn;
