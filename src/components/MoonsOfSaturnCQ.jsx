import '../css/moonsofsaturncq.css';
import { useRef } from 'react';
import React from 'react';
import LinkButton from './ButtonLink';
import AdditionalLinks from './AdditionalLinks';
/* Grid Info: Uses containers and subgrid */

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

function MoonsOfSaturnCQ() {
  return (
    <div
      className="moonsofsaturncq max-w-[1200px] m-auto 
                    text-black dark:text-white">
      <h1 className="">The Moons of Saturn (Container Query)</h1>
      <div className="msCQContainer text-black dark:text-white border-[#000000] dark:border-[#f5f5f5]">
        <div className="featured">
          <article>
            <picture>
              <source srcSet={mimasAVIFSrc} type="image/avif" />
              <img
                width="600"
                height="600"
                src={mimasFallback}
                fetchpriority="high"
                alt="Death Star vs. Mimas, with similar looking craters in the upper right."
              />
            </picture>
            <h2>That's No Moon. It's a Space Station.</h2>
            <p className="text">
              At 198km diameter, Mimas is bigger than the first Death Star
              (120km) but smaller than the second (800km).{' '}
            </p>
            <LinkButton
              url="https://science.nasa.gov/saturn/moons/mimas/"
              label="More about Mimas"
              fontsize="sm"></LinkButton>
          </article>
        </div>
        <div className="msCQCard border-[#000000] dark:border-[#f5f5f5]">
          <article>
            <picture>
              <source srcSet={titanAVIFSrc} type="image/avif" />
              <img
                width="600"
                height="600"
                src={titanFallback}
                alt="A fuzzy looking world, with darker patches on a mostly light surface."
              />
            </picture>
            <h2>Titan's Ethane Lake</h2>
            <p className="text">
              Titan is the only world besides Earth that has standing bodies of
              liquid, including rivers, lakes and seas, on its surface. Titan is
              bigger than Earth's moon, and larger than even the planet Mercury.
            </p>
            <LinkButton
              url="https://science.nasa.gov/saturn/moons/titan/"
              label="More about Titan"
              fontsize="sm"></LinkButton>
          </article>
        </div>
        <div className="msCQCard border-[#000000] dark:border-[#f5f5f5]">
          <article>
            <picture>
              <source srcSet={enceladusAVIFSrc} type="image/avif" />
              <img
                width="600"
                height="600"
                src={enceladusFallback}
                alt="Enceladus is a water world."
              />
            </picture>
            <h2>Enceladus: Geyser World</h2>
            <p className="text">
              Geysers venting from this ocean world add material to Saturn's E
              ring, and give clues that its subsurface saltwater ocean could be
              a possible habitat for life.
            </p>
            <LinkButton
              url="https://science.nasa.gov/saturn/moons/enceladus/"
              label="About Enceladus"
              fontsize="sm"></LinkButton>
          </article>
        </div>
        <div className="msCQCard border-[#000000] dark:border-[#f5f5f5]">
          <article>
            <picture>
              <source srcSet={iapetusAVIFSrc} type="image/avif" />
              <img
                width="600"
                height="600"
                src={iapetusFallback}
                alt="A white moon that looks like it has mold growing on one side of it."
              />
            </picture>
            <h2>Iapetus: Yin and Yang</h2>
            <p className="text">
              Saturn has tidally locked Iapetus. The moon always presents the
              same face toward Saturn. With its distant, inclined orbit, Iapetus
              is the only large moon from which there is a nice view of the
              rings of Saturn.
            </p>
            <LinkButton
              url="https://science.nasa.gov/saturn/moons/iapetus/"
              label="About Iapetus"
              fontsize="sm"></LinkButton>
          </article>
        </div>
        <div className="msCQCard border-[#000000] dark:border-[#f5f5f5]">
          <article>
            <picture>
              <source srcSet={phoebeAVIFSrc} type="image/avif" />
              <img
                width="600"
                height="600"
                src={phoebeFallback}
                alt="A moon with heavy cratering, making it look more like an asteroid."
              />
            </picture>
            <h2>Phoebe</h2>
            <p className="text">
              Unlike most major moons orbiting Saturn, Phoebe is very dark and
              reflects only 6 percent of the sunlight it receives. Its darkness
              and irregular, retrograde orbit suggest Phoebe is most likely a
              captured object. A captured object is a celestial body that is
              trapped by the gravitational pull of a much bigger body, generally
              a planet. Phoebe's darkness, in particular, suggests that the
              small moon comes from the outer solar system, an area where there
              is plenty of dark material.
            </p>
            <LinkButton
              url="https://science.nasa.gov/saturn/moons/phoebe/"
              label="More about Phoebe"
              fontsize="sm"></LinkButton>
          </article>
        </div>
      </div>
      <AdditionalLinks></AdditionalLinks>
    </div>
  );
}

export default MoonsOfSaturnCQ;
