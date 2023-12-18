const express = require("express");
const cluster = require("cluster");
cluster.schedulingPolicy = cluster.SCHED_RR;
const os = require("os");
const app = express();

function delay(duration) {
  const startDate = new Date();
  while (new Date() - startDate < duration) {}
}

app.get("/", (req, res) => {
  res.send(`Performance Example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(5000);
  res.send(`Ding Ding Ding! ${process.pid}`);
});

console.log("Running server.js...");
if (cluster.isMaster) {
  console.log("Master has been started...");
  const NUM_WORKERS = os.cpus().length;
  console.log(NUM_WORKERS);
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started.");
}
app.listen(3000);
