import { useCamera } from "../../hooks/useCamera";

export default function CameraScanner() {
  const { active } = useCamera();

  return <div>Camera Scanner: {active ? "On" : "Off"}</div>;
}
