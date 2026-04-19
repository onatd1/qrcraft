import { useQRGenerator } from "../../hooks/useQRGenerator";

export default function QRForm() {
  const { value, setValue } = useQRGenerator();

  return (
    <form>
      <input
        type="text"
        placeholder="Enter QR content"
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
