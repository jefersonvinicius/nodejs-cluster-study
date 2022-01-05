import { randomUUID } from 'crypto';
import http from 'http';
import { performance } from 'perf_hooks';
import { calculateExpensiveOperation } from './expensive-operation';

const server = http.createServer((request, response) => {
  const identifier = randomUUID();

  console.log(`Calculating to ${identifier}`);

  const startTime = performance.now();
  const result = calculateExpensiveOperation();
  const endTime = performance.now();

  const performanceTime = endTime - startTime;
  const performanceInSeconds = `${performanceTime / 1000}s`;
  response.write(JSON.stringify({ identifier, result, performance: performanceTime, performanceInSeconds }));
  response.end();
});

server.listen(3333, () => {
  console.log('Server listing at http://localhost:3333');
});
