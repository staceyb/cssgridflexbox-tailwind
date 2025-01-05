import React from 'react';
/* Grid Info: Uses grid template areas */

function MarsGrid() {
  return (
    <>
      <h1>Mars</h1>
      <div className="grid grid-cols-[1fr] [grid-template-areas:'sol10''mars''meteorite''microscope''intrepid'] sm:[grid-template-areas:'sol10_sol10''mars_meteorite''mars_microscope''intrepid_intrepid'] sm:grid-cols-[1fr_1fr] gap-[1rem] max-w-[980px] mx-auto">
        <img
          className="[grid-area:sol10]"
          src="/images/PIA01546~orig.jpg"
          alt="True Color of Mars - Pathfinder Sol 10 at Noon."
        />
        <img
          className="[grid-area:mars]"
          src="/images/PIA00407~small.jpg"
          alt="Global color views of Mars"
        />
        <img
          className="[grid-area:intrepid]"
          src="/images/PIA13593~orig.jpg"
          alt="Intrepid Crater on Mars"
        />
        <img
          className="[grid-area:meteorite]"
          src="/images/PIA08528~orig.jpg"
          alt="Possible Meteorite in Columbia Hills on Mars False Color"
        />

        <img
          className="[grid-area:microscope]"
          src="/images/PIA05208~small.jpg"
          alt="Mars Under the Microscope color"
        />
      </div>
    </>
  );
}

export default MarsGrid;
