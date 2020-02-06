const numbers = {
  M: { value: 1000, before: ["I", "V", "X", "L", "C", "D", "M"] },
  D: { value: 500, before: ["I", "V", "X", "L", "C"] },
  C: { value: 100, before: ["I", "V", "X", "L", "C", "D", "M"] },
  L: { value: 50, before: ["I", "V", "X"] },
  X: { value: 10, before: ["I", "V", "X", "L", "C"] },
  V: { value: 5, before: ["I"] },
  I: { value: 1, before: ["I", "V", "X"] }
};

export default numbers;
