import '../css/planets.css';
import React from 'react';
/* Grid Info:Uses grid-template-areas and subgrid */

export default function PlanetsGrid() {
  return (
    <div className="max-w-[1200px] m-auto text-black dark:text-white">
      <h1>Planets and Moons</h1>
      <div className="card-container">
        <div className="feature card border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2>Our Solar System</h2>
          <img
            src="/images/fem-new-system.jpg"
            alt="Many of the planets in the solar system, plus a few moons."
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, ad! Asperiores sed quae laudantium eveniet quis
            doloremque, ad veritatis ipsam?
          </p>
          <p>
            <a
              href="https://images.nasa.gov/details/PIA03153"
              className="button"
              target="_blank"
              rel="noreferrer">
              Learn more at NASA
            </a>
          </p>
        </div>
        <div className="card border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="text-black dark:text-white">Earth and Moon</h2>
          <img
            src="/images/fem-earth2.jpg"
            alt="The dark side of the moon in front of the Earth as viewed from a spacecraft."
          />
          <p className="text-black dark:text-white">
            <a
              href="https://images.nasa.gov/details/from-a-million-miles-away-nasa-camera-shows-moon-crossing-face-of-earth_20129140980_o"
              target="_blank"
              className="button"
              rel="noreferrer">
              Learn more at NASA
            </a>
          </p>
        </div>
        <div className="card border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2>Mars, Phobos, and Deimos</h2>
          <img
            src="/images/fem-mars.jpg"
            alt="Part of Mars with two tiny asteroid-looking moons."
          />
          <p>
            <a
              href="https://images.nasa.gov/details/PIA17305"
              target="_blank"
              className="button"
              rel="noreferrer">
              Learn more at NASA
            </a>
          </p>
        </div>
        <div className="card border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2>Jupiter and Galilean Moons</h2>
          <img
            src="/images/fem-jupiter.jpg"
            alt="Jupiter and its four Galilean moons."
          />
          <p className="text-black dark:text-white">
            <a
              href="h https://images.nasa.gov/details/PIA01481"
              target="_blank"
              className="button">
              Learn more at NASA
            </a>
          </p>
        </div>
        <div className="card border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2 className="text-black dark:text-white">Saturn and its moons</h2>
          <img
            src="/images/fem-saturn.jpg"
            alt="Saturn and several of its moons."
          />
          <p>
            <a
              href="https://images.nasa.gov/details/PIA01482"
              target="_blank"
              className="button"
              rel="noreferrer">
              Learn more at NASA
            </a>
          </p>
        </div>
        <div className="card border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2>Neptune and Triton</h2>
          <img
            src="/images/fem-neptune.jpg"
            alt="Triton, a gigantic moon, sits squarely in front of Neptune."
          />
          <p className="text-black dark:text-white">
            <a
              href="https://images.nasa.gov/details/PIA00340"
              target="_blank"
              className="button"
              rel="noreferrer">
              Learn more at NASA
            </a>
          </p>
        </div>
        <div className="card border-2 border-[#000000] dark:border-[#f5f5f5]">
          <h2>Pluto and Charon</h2>
          <img
            src="/images/fem-pluto.jpg"
            alt="Although Pluto is not technically a planet anymore, this photo of it with its moon Charon is pretty cool."
          />
          <p>
            <a
              href="https://images.nasa.gov/details/PIA19966"
              target="_blank"
              className="button"
              rel="noreferrer">
              Learn more at NASA
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
