import React from 'react';

export const SampleBadge = ({ text = "Sample image", className = "" }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-charcoal-900/75 text-warmbg-100 backdrop-blur-sm border border-white/20 select-none shadow-sm ${className}`}
      title="Sample illustration - replace with actual restaurant photo"
    >
      {text}
    </span>
  );
};
