const path = require("path");

function getMessages(req, res) {
  // res.send("<ul><li>Saaad</li></ul>");
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );
  res.render("messages", {
    title: "Welcome My Friends",
    friend: "Saad",
  });
}

function postMessages(req, res) {
  console.log("Updating Messages.");
}

module.exports = {
  getMessages,
  postMessages,
};
