const http = require("http");
const app = require("./app");
require("dotenv").config();
const { mongoConnect } = require("./services/mongo");
const { loadPlanets } = require("./models/planets.model");
const { loadLaunchData } = require("./models/launches.model");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

async function startServer() {
  await mongoConnect();
  await loadPlanets();
  await loadLaunchData();
  server.listen(PORT, () => {
    console.log("Hello To Nasa Project");
  });
}

startServer();
