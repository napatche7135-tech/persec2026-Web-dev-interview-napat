/** Rank prefix matches first, then middle matches, then suffix matches. */
export function autocomplete(search: string, items: string[], maxResult: number): string[] {
  if (!Number.isInteger(maxResult) || maxResult <= 0) return [];
  const needle = search.toLocaleLowerCase();
  return items.map((value, index) => {
    const word = value.toLocaleLowerCase();
    const position = word.indexOf(needle);
    const rank = position === 0 ? 0 : position + needle.length === word.length ? 2 : 1;
    return { value, index, position, rank };
  }).filter(x => x.position >= 0)
    .sort((a, b) => a.rank - b.rank || a.index - b.index)
    .slice(0, maxResult).map(x => x.value);
}
