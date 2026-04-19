import QRPreview from "../components/Generator/QRPreview";
import Customizer from "../components/Generator/Customizer";
import TypeSelector from "../components/Generator/TypeSelector";

export default function Home() {
  return (
    <div>
      <h2>Welcome to QRCraft</h2>
      <TypeSelector />
      <Customizer />
      <QRPreview />
    </div>
  );
}
