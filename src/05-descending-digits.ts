/** Rearrange decimal digits of a nonnegative safe integer in descending order. */
export function descendingDigits(value: number): number {
  if (!Number.isSafeInteger(value) || value < 0) throw new RangeError('Expected nonnegative safe integer');
  return Number(String(value).split('').sort((a, b) => Number(b) - Number(a)).join(''));
}
