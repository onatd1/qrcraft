import { qrTypes } from "../../utils/qrTypes";

export default function TypeSelector() {
  return (
    <select>
      {qrTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
