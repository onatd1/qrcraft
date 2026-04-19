import { useQRGenerator } from "../../hooks/useQRGenerator";

export default function QRForm() {
  const { value } = useQRGenerator();

  return (
    <form>
      <input type="text" placeholder="Enter QR content" defaultValue={value} />
    </form>
  );
}
