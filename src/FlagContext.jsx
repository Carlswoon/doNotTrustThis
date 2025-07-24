import { createContext, useContext, useEffect, useState } from "react";

const FlagContext = createContext();

const allFlags = ["social", "inspect", "geo", "xss"];

export function FlagProvider({ children }) {
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

  const hasFlag = (flagId) => foundFlags.includes(flagId);

  return (
    <FlagContext.Provider
      value={{
        foundFlags,
        count: foundFlags.length,
        total: allFlags.length,
        submitFlag,
        hasFlag,
      }}
    >
      {children}
    </FlagContext.Provider>
  );
}

export function useFlagTracker() {
  return useContext(FlagContext);
}
