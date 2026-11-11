const numerals: ReadonlyArray<readonly [number, string]> = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];
/** Standard modern Roman numerals, supported range 1..3999. */
export function toRoman(value: number): string {
  if (!Number.isInteger(value) || value < 1 || value > 3999) throw new RangeError('Expected integer from 1 to 3999');
  let remaining = value;
  let result = '';
  for (const [amount, symbol] of numerals) {
    while (remaining >= amount) { result += symbol; remaining -= amount; }
  }
  return result;
}
export function fromRoman(input: string): number {
  if (!input) throw new Error('Invalid Roman numeral');
  let remaining = input;
  let total = 0;
  for (const [amount, symbol] of numerals) {
    while (remaining.startsWith(symbol)) {
      total += amount;
      remaining = remaining.slice(symbol.length);
    }
  }
  if (remaining || total > 3999 || toRoman(total) !== input) throw new Error('Invalid Roman numeral');
  return total;
}
