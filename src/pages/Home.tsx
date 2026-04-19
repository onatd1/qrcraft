import TypeSelector from "../components/Generator/TypeSelector";
import QRForm from "../components/Generator/QRForm";
import Customizer from "../components/Generator/Customizer";
import QRPreview from "../components/Generator/QRPreview";
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
