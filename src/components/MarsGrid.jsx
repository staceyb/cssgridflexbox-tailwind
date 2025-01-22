import React from 'react';
/* Grid Info: Uses grid template areas */

import PIA01546AVIFSrc from '/src/imgs/PIA01546~orig.jpg?w=980;601&format=avif&as=srcset';
import PIA01546Fallback from '/src/imgs/PIA01546~orig.jpg?w=980';

import PIA13593AVIFSrc from '/src/imgs/PIA13593~orig.jpg?w=980;601&format=avif&as=srcset';
import PIA13593Fallback from '/src/imgs/PIA13593~orig.jpg?w=980';

import PIA00407AVIFSrc from '/src/imgs/PIA00407~small.jpg?w=482;591&format=avif&as=srcset';
import PIA00407Fallback from '/src/imgs/PIA00407~small.jpg?w=591';

import PIA08528AVIFSrc from '/src/imgs/PIA08528~orig.jpg?w=482;591&format=avif&as=srcset';
import PIA08528Fallback from '/src/imgs/PIA08528~orig.jpg?w=591';

import PIA05208AVIFSrc from '/src/imgs/PIA05208~small.jpg?w=482;591&format=avif&as=srcset';
import PIA05208Fallback from '/src/imgs/PIA05208~small.jpg?w=591';

function MarsGrid() {
  return (
    <div className="text-black dark:text-white">
      <h1>Mars</h1>
      <div
        className="grid grid-cols-[1fr] 
      [grid-template-areas:'sol10''mars''meteorite''microscope''intrepid'] 
      sm:[grid-template-areas:'sol10_sol10''mars_meteorite''mars_microscope''intrepid_intrepid'] 
      sm:grid-cols-[1fr_1fr] gap-[1rem] max-w-[980px] mx-auto">
        <picture className="[grid-area:sol10]">
          <source srcSet={PIA01546AVIFSrc} type="image/avif" />
          <img
            alt="True Color of Mars - Pathfinder Sol 10 at Noon"
            src={PIA01546Fallback}
          />
        </picture>
        <picture className="[grid-area:mars]">
          <source srcSet={PIA00407AVIFSrc} type="image/avif" />
          <img
            alt="Global color views of Mars"
            fetchPriority="high"
            src={PIA00407Fallback}
          />
        </picture>
        <picture className="[grid-area:intrepid]">
          <source srcSet={PIA13593AVIFSrc} type="image/avif" />
          <img alt="Intrepid Crater on Mars" src={PIA13593Fallback} />
        </picture>
        <picture className="[grid-area:meteorite]">
          <source srcSet={PIA08528AVIFSrc} type="image/avif" />
          <img
            alt="Possible Meteorite in Columbia Hills on Mars False Color"
            src={PIA08528Fallback}
          />
        </picture>
        <picture className="[grid-area:microscope]">
          <source srcSet={PIA05208AVIFSrc} type="image/avif" />
          <img alt="Mars Under the Microscope color" src={PIA05208Fallback} />
        </picture>
      </div>
    </div>
  );
}

export default MarsGrid;
