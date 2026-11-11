/** Build a Tribonacci sequence with missing seed positions treated as zero. */
export function tribonacci(seed: number[], count: number): number[] {
  if (!Number.isInteger(count) || count < 0) throw new RangeError('Count must be nonnegative integer');
  if (seed.length > 3 || seed.some(n => !Number.isInteger(n))) throw new Error('Seed must contain 0..3 integers');
  if (count === 0) return [];
  const result = [...seed];
  while (result.length < Math.min(3, count)) result.push(0);
  while (result.length < count) {
    const n = result.length;
    result.push(result[n - 1] + result[n - 2] + result[n - 3]);
  }
  return result.slice(0, count);
}
