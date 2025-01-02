import React from 'react';

export default function HomePlanets() {
  return (
    <div className="bg-white max-w-[1200px] m-auto mt-4 mb-8 mr-auto ml-auto dark:bg-black">
      <section className="homePlanetsOverlap grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto_auto_auto_auto] gap-0">
        <div className="col-start-1 col-end-4 row-start-1 row-end-4 border-[1vw] border-[#f5f5f5] border-bottom-[0.5vw] border-right-[0.5vw]">
          <img
            src="/images/fem-jupiter.jpg"
            alt="Jupiter and the Galilean moons."
          />
        </div>
        <div className="col-start-4 col-end-7 row-start-1 row-end-4 border-[1vw] border-[#f5f5f5] border-bottom-[0.5vw] border-right-[0.5vw]">
          <img src="/images/fem-pluto.jpg" alt="Pluto and its moon, Charon." />
        </div>
        <div className="col-start-1 col-end-4 row-start-4 row-end-7 border-[1vw] border-[#f5f5f5] border-bottom-[0.5vw] border-right-[0.5vw]">
          <img src="/images/fem-saturn.jpg" alt="Saturn and its moons." />
        </div>
        <div className="col-start-4 col-end-7 row-start-4 row-end-7 border-[1vw] dark:border-[#f5f5f5] border-bottom-[0.5vw] border-right-[0.5vw]">
          <img
            src="/images/fem-neptune.jpg"
            alt="Triton, Neptune's largest moon, and Neptune."
          />
        </div>
        <div className="col-start-3 col-end-5 row-start-3 row-end-5 overflow-hidden border-[1vw] dark:border-[#f5f5f5] rotate-45 scale-[1.1]">
          <img
            className="rotate-[-45deg] scale-[1.45]"
            src="/images/fem-earth2.jpg"
            alt="Earth from orbit, with the moon crossing in between the camera and Earth."
          />
        </div>
      </section>
    </div>
  );
}
