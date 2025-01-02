import '../css/mars.css';
import React from 'react';
/* Grid Info: Uses grid template areas */

function MarsGrid() {
  return (
    <>
      <h1>Mars</h1>
      <div className="grid-container-mars grid gap-[1rem] max-w-[980px] mx-auto">
        <img
          className="one grid-area-[sol10]"
          src="/images/PIA01546~orig.jpg"
          alt="True Color of Mars - Pathfinder Sol 10 at Noon."
        />
        <img
          className="two grid-area-mars"
          src="/images/PIA00407~small.jpg"
          alt="Global color views of Mars"
        />
        <img
          className="three"
          src="/images/PIA13593~orig.jpg"
          alt="Intrepid Crater on Mars"
        />
        <img
          className="four"
          src="/images/PIA08528~orig.jpg"
          alt="Possible Meteorite in Columbia Hills on Mars False Color"
        />

        <img
          className="five"
          src="/images/PIA05208~small.jpg"
          alt="Mars Under the Microscope color"
        />
      </div>
    </>
  );
}

export default MarsGrid;
