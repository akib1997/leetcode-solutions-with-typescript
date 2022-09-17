function romanToInt(s: string): number {
  let keys: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0,
    length = s.length - 1;

  for (let i = 0; i < length; i++) {
    let current = keys[s[i]],
      currentNext = keys[s[i + 1]];
    current < currentNext ? (total -= current) : (total += current);
  }
  return total + keys[s[length]];
}

romanToInt("MCMXCIV");

interface IRoman {
  I: number;
  V: number;
  X: number;
  L: number;
  C: number;
  D: number;
  M: number;
}
