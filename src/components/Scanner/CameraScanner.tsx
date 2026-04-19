import { useCamera } from "../../hooks/useCamera";

export default function CameraScanner() {
  const { active, start, stop } = useCamera();

  return (
    <section>
      <div>Camera Scanner: {active ? "On" : "Off"}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </section>
  );
}
