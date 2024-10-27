"use client";

import { purgeCache } from "@/app/lib/purge-cache";
import { useState } from "react";

export const PurgeCacheButton = () => {
  const [isPurging, setIsPurging] = useState(false);
  const handleClick = async () => {
    setIsPurging(true);
    await purgeCache();
    setIsPurging(false);
  };

  return (
    <button
      className={`border p-2 rounded ${isPurging ? "bg-gray-300" : "bg-gray-100"}`}
      onClick={handleClick}
      disabled={isPurging}
    >
      Purge Cache
    </button>
  );
};
