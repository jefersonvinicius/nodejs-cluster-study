import os from 'os';
import cluster from 'cluster';

if (cluster.isPrimary) {
  const numberOfCpus = os.cpus().length;

  console.log(`Master ${process.pid} is running`);
  console.log(`Forking server for ${numberOfCpus} CPUs\n`);

  for (let index = 0; index < numberOfCpus; index++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`\nWorker ${worker.process.pid} died\n`);
  });
} else {
  import('./server');
}
