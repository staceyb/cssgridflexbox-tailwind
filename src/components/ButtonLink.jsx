import React from 'react';
export default function LinkButton({ label, url, fontsize }) {
  const cnames = `link text-${fontsize}`;
  return (
    <p className={cnames}>
      <a
        href={url}
        target="_blank"
        className="bg-[#13446e] p-2 text-white shadow-md inline-block mt-8 
        hover:bg-[#13446e80]"
        rel="noreferrer">
        {label}
      </a>
    </p>
  );
}
