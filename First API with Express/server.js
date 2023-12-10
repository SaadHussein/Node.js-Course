const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
const { friendsRouter } = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} - ${req.baseUrl} - ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(delta);
});
app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello Saaaad",
    caption: "Welcome To express.js",
  });
});

app.get("/", (req, res) => {
  res.send({
    messages: "Welcome To Express.js",
  });
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log("Welcome to Express..!");
});
