import React, { createContext, useContext, useState, useEffect } from "react";

type StartupPhase =
  | "pending"
  | "fadeIn"
  | "fadeOutOverlay"
  | "showH1"
  | "hideH1"
  | "showUI";

interface StartupContextType {
  phase: StartupPhase;
  startSequence: () => void;
}

const StartupContext = createContext<StartupContextType>({
  phase: "fadeIn",
  startSequence: () => {},
});

export const useStartup = () => useContext(StartupContext);

export const StartupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [phase, setPhase] = useState<StartupPhase>("fadeIn");

  const startSequence = () => {
    setPhase("fadeIn");
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    if (phase === "fadeIn") {
      timers.push(setTimeout(() => setPhase("fadeOutOverlay"), 1000));
    }
    if (phase === "fadeOutOverlay") {
      timers.push(setTimeout(() => setPhase("showH1"), 1000));
    }
    if (phase === "showH1") {
      timers.push(setTimeout(() => setPhase("hideH1"), 3000));
    }
    if (phase === "hideH1") {
      timers.push(setTimeout(() => setPhase("showUI"), 800));
    }

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  return (
    <StartupContext.Provider value={{ phase, startSequence }}>
      {children}
    </StartupContext.Provider>
  );
};
