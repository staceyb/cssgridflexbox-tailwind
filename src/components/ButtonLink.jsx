import React from 'react';
export default function LinkButton({ label, url, fontsize, classNames = '' }) {
  let cnames = `link text-${fontsize}`;
  if (classNames) {
    cnames = `${cnames} ${classNames}`;
  }
  return (
    <p className={cnames}>
      <a
        href={url}
        target="_blank"
        className="bg-[#13446e] p-2 text-white shadow-md inline-block text-center rounded-sm mt-8 
        hover:bg-[#13446e80]"
        rel="noreferrer">
        {label}
      </a>
    </p>
  );
}
