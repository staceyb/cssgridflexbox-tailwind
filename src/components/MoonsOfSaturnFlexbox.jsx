import React from 'react';
import AdditionalLinks from './AdditionalLinks';
import LinkButton from './ButtonLink';

function MoonsOfSaturnFlexbox() {
  return (
    <div className="max-w-[1200px] m-auto">
      <h1 className="text-black dark:text-white">
        The Moons of Saturn (Flexbox)
      </h1>
      <div className="flex flex-wrap flex-col border-bottom-1 sm:flex-row sm:col-gap[2%] sm:row-gap-8 sm:justify-around sm:mt-8 gap-[2%] md:items-end md:justify-start">
        <article className="sm:basis-[32%] sm:grow-2 md:basis-[18.4%] py-12 px-4">
          <img
            src="/images/fem-mimas.jpg"
            alt="Death Star vs. Mimas, with similar looking craters in the upper right."
          />
          <h2 className="mt-8 text-black dark:text-white">
            That's No Moon. It's a Space Station.
          </h2>
          <p className="text-black dark:text-white">
            At 198km diameter, Mimas is bigger than the first Death Star (120km)
            but smaller than the second (800km).{' '}
          </p>
          <LinkButton
            url="https://science.nasa.gov/saturn/moons/mimas/"
            label="More about Mimas"
            fontsize="base"></LinkButton>
        </article>
        <article className="sm:basis-[32%] sm:grow-2 md:basis-[18.4%] py-12 px-4">
          <img
            src="/images/fem-titan-mosaic.jpg"
            alt="A fuzzy looking world, with darker patches on a mostly light surface."
          />
          <h2 className="mt-8 text-black dark:text-white">
            Titan's Ethane Lake
          </h2>
          <p className="text text-black dark:text-white">
            Titan is the only world besides Earth that has standing bodies of
            liquid, including rivers, lakes and seas, on its surface. Titan is
            bigger than Earth's moon, and larger than even the planet Mercury.
          </p>
          <LinkButton
            url="https://science.nasa.gov/saturn/moons/titan/"
            label="More about Titan"
            fontsize="base"></LinkButton>
        </article>
        <article className="sm:basis-[32%] sm:grow-2 md:basis-[18.4%] py-12 px-4">
          <img
            src="/images/fem-enceladus.jpg"
            alt="Enceladus is a water world."
          />
          <h2 className="mt-8 text-black dark:text-white">
            Enceladus: Geyser World
          </h2>
          <p className="text text-black dark:text-white">
            Geysers venting from this ocean world add material to Saturn's E
            ring, and give clues that its subsurface saltwater ocean could be a
            possible habitat for life.
          </p>
          <LinkButton
            url="https://science.nasa.gov/saturn/moons/enceladus/"
            label="More about Enceladus"
            fontsize="base"></LinkButton>
        </article>
        <article className="sm:basis-[32%] sm:grow-2 md:basis-[18.4%] py-12 px-4">
          <img
            src="/images/fem-iapetus.jpg"
            alt="A white moon that looks like it has mold growing on one side of it."
          />
          <h2 className="mt-8 text-black dark:text-white">
            Iapetus: Yin and Yang
          </h2>
          <p className="text text-black dark:text-white">
            Saturn has tidally locked Iapetus. The moon always presents the same
            face toward Saturn. With its distant, inclined orbit, Iapetus is the
            only large moon from which there is a nice view of the rings of
            Saturn.
          </p>
          <LinkButton
            url="https://science.nasa.gov/saturn/moons/iapetus/"
            label="More about Iapetus"
            fontsize="base"></LinkButton>
        </article>
        <article className="sm:basis-[32%] sm:grow-2 md:basis-[18.4%] py-12 px-4">
          <img
            src="/images/fem-phoebe.jpg"
            alt="A moon with heavy cratering, making it look more like an asteroid."
          />
          <h2 className="mt-8 text-black dark:text-white">Phoebe</h2>
          <p className="text text-black dark:text-white">
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
            url="https://science.nasa.gov/saturn/moons/phoebe/"
            label="More about Phoebe"
            fontsize="base"></LinkButton>
        </article>
      </div>
      <AdditionalLinks></AdditionalLinks>
    </div>
  );
}

export default MoonsOfSaturnFlexbox;
