const friends = require("../models/friends.model");

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing Friend Name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length + 1,
  };
  friends.push(newFriend);
  res.status(200).json(friends);
}

function getFriends(req, res) {
  res.json(friends);
}

function getSpecificFriend(req, res) {
  const friendId = req.params.friendId;
  const friend = friends.filter((friendItem) => friendItem.id === +friendId);

  if (friend.length !== 0) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ message: "No Friend Found" });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getSpecificFriend,
};
