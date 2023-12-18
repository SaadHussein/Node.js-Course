const { Worker, workerData, isMainThread } = require("worker_threads");

if (isMainThread) {
  new Worker(__filename, {
    workerData: [3, 2, 8, 5],
  });
  new Worker(__filename, {
    workerData: [7, 4, 90, 1],
  });
} else {
  console.log("Worker Id" + `${process.pid}`);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
