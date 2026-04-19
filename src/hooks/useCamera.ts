export function useCamera() {
  return {
    active: false,
    start: () => console.log("camera start"),
    stop: () => console.log("camera stop"),
  };
}
