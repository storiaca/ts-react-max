import { createContext, ReactNode, useContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimerContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("Timers context is null - thst should not be the case!");
  }

  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};
export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      // TODO
    },
    startTimers() {
      // TODO
    },
    stopTimers() {
      // TODO
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
