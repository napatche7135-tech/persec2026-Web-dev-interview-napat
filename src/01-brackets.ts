/** Returns true when all brackets are correctly nested and closed. */
export function validBrackets(input: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
  for (const char of input) {
    if ('([{'.includes(char)) stack.push(char);
    else if (char in pairs) {
      if (stack.pop() !== pairs[char]) return false;
    } else return false; // The assignment permits bracket characters only.
  }
  return stack.length === 0;
}
