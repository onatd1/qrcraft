import { qrRoute } from "./routes/qr";

export function startServer() {
  return qrRoute();
}

console.log(startServer());
