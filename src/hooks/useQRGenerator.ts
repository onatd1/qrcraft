export function useQRGenerator() {
  return {
    value: "",
    setValue: (next: string) => console.log(next),
  };
}
