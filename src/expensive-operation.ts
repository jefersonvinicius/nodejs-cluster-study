const FIRST_LOOP_SIZE = 1e5;
const LAST_LOOP_SIZE = 1e4;

export function calculateExpensiveOperation() {
  let result = 0;
  for (let i = 0; i < FIRST_LOOP_SIZE; i++) {
    for (let j = 0; j < LAST_LOOP_SIZE; j++) {
      result = Math.random() * i + j;
    }
  }
  return result;
}
