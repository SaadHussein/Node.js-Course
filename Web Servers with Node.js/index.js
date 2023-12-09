const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 1,
    name: "Saad Hussein",
  },
  {
    id: 2,
    name: "Mohamed Hussein",
  },
  {
    id: 3,
    name: "Yassin Hussein",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      console.log(data);
      const friend = data.toString();
      console.log(friend);
      friends.push(JSON.parse(friend));
      console.log(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length == 3) {
      res.end(
        JSON.stringify(friends.filter((friend) => friend.id === +items[2]))
      );
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Welcome To Node.js World..!</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("Helloo Nooode.js");
});
