/** Sort by alphabetic prefix, then by embedded numeric value (natural order). */
export function sortStrings(items: string[]): string[] {
  const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
  return [...items].sort((a, b) => collator.compare(a, b));
}
