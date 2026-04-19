import QRForm from "../components/Generator/QRForm";
import QRPreview from "../components/Generator/QRPreview";
import Customizer from "../components/Generator/Customizer";
import TypeSelector from "../components/Generator/TypeSelector";
import CameraScanner from "../components/Scanner/CameraScanner";
import HistoryList from "../components/History/HistoryList";

export default function Home() {
  return (
    <div>
      <h2>Welcome to QRCraft</h2>
      <TypeSelector />
      <QRForm />
      <Customizer />
      <QRPreview />
      <CameraScanner />
      <HistoryList />
    </div>
  );
}
