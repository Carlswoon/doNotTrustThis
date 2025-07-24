import { useState, useEffect } from "react";

const allFlags = ["social", "inspect", "geo", "xss"];

export default function useFlagTracker() {
  const [foundFlags, setFoundFlags] = useState(() => {
    const saved = localStorage.getItem("foundFlags");
    return saved ? JSON.parse(saved) : [];
  });

  const submitFlag = (flagId) => {
    if (!foundFlags.includes(flagId)) {
      const updated = [...foundFlags, flagId];
      setFoundFlags(updated);
      localStorage.setItem("foundFlags", JSON.stringify(updated));
    }
  };

  const resetFlags = () => {
    localStorage.removeItem("foundFlags");
    setFoundFlags([]);
  };

  return {
    foundFlags,
    total: allFlags.length,
    count: foundFlags.length,
    submitFlag,
    resetFlags,
    hasFlag: (flagId) => foundFlags.includes(flagId),
  };
}

