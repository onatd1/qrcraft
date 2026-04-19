import { exportImage } from "../../utils/imageExport";

export default function DownloadActions() {
  return (
    <div>
      <button onClick={() => exportImage("png")}>PNG</button>
      <button onClick={() => exportImage("svg")}>SVG</button>
      <button onClick={() => exportImage("pdf")}>PDF</button>
    </div>
  );
}
