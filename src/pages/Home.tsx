import SectionTitle from "../components/Generator/SectionTitle";
import TypeSelector from "../components/Generator/TypeSelector";
import QRForm from "../components/Generator/QRForm";
import Customizer from "../components/Generator/Customizer";
import QRPreview from "../components/Generator/QRPreview";
import CameraScanner from "../components/Scanner/CameraScanner";
import HistoryList from "../components/History/HistoryList";

export default function Home() {
  return (
    <main>
      <SectionTitle text="Welcome to QRCraft" />
      <TypeSelector />
      <QRForm />
      <Customizer />
      <QRPreview />
      <CameraScanner />
      <HistoryList />
    </main>
  );
}
