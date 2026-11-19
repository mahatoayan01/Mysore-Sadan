import React from 'react';

export const PureVegBadge = ({ size = "sm", showText = false, className = "" }) => {
  const isSmall = size === "sm";

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <span
        className={`inline-flex items-center justify-center border-2 border-emerald-600 rounded-sm bg-white ${
          isSmall ? 'w-4 h-4 p-0.5' : 'w-5 h-5 p-0.5'
        }`}
        title="100% Pure Vegetarian"
        aria-label="Pure Vegetarian"
      >
        <span
          className={`rounded-full bg-emerald-600 ${
            isSmall ? 'w-2 h-2' : 'w-2.5 h-2.5'
          }`}
        />
      </span>
      {showText && (
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Pure Veg
        </span>
      )}
    </div>
  );
};
