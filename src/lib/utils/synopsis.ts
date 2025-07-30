export function synopsis(
  text: string,
  charLength: number = 200,
  symbol: string = "[...]",
): string {
  if (!text || charLength <= 0) return "";

  if (text.length <= charLength) return text;

  return text.slice(0, charLength).trimEnd() + " " + symbol;
}
