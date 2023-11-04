import Button from "./UI/Button.tsx";
import { useTimerContext } from "../store/timers-context.tsx";

export default function Header() {
  const timersCtx = useTimerContext();

  // if (timersCtx === null) {
  //   throw new Error("Something went wrong here");
  // }
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
