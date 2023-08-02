import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const numWorkers = os.cpus().length;
  const workers = new Array(numWorkers);
  const results = new Array(numWorkers);

  const handleMessage = (index) => (result) => {
    results[index] = { status: "resolved", data: result };
    checkResults();
  };

  const handleError = (index) => (error) => {
    console.error(`Worker ${index} encountered an error`, error);
    results[index] = { status: "error", data: null };
    checkResults();
  };

  const checkResults = () => {
    if (results.every((result) => result !== undefined)) {
      console.log("All workers have finished. Results: ", results);
    }
  };

  for (let i = 0; i < numWorkers; i++) {
    workers[i] = new Worker("./worker.js");
    workers[i].on("message", handleMessage(i));
    workers[i].on("error", handleError(i));
    workers[i].postMessage(10 + i);
  }
};

await performCalculations();
