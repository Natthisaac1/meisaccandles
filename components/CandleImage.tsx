"use client";

import { useState } from "react";

export function CandleImage({
  src,
  alt,
  className = ""
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`bg-gradient-to-br from-[#f7efe3] via-[#e8d4b4] to-[#c4a574] ${className}`}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
