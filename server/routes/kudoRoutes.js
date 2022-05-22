const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("../util/util");
// const kudosFile = "../data/kudos.json";
// const kudos = require(kudosFile);

// router.use((req, res, next) => {
//   console.log('kudoRoutes');
//   next()
// })

function readJSONFile() {
  const fileData = fs.readFileSync("./data/kudos.json");
  const parsedFileData = JSON.parse(fileData);
  return parsedFileData;
}

// <====================> ROUTE FOR GETTING ALL KUDOS <====================>
router.get("/", (_req, res) => {
  const kudos = readJSONFile();
  res.status(200).json(kudos);
});

// <====================> ROUTE FOR GETTING SPECIFIC KUDO BY ID <====================>
router.get("/:id", (req, res) => {
  const users = readJSONFile();

  const kudos = [];

  users.forEach((u) => {
    if (u.kudos) {
      u.kudos.forEach((k) => kudos.push(k));
    }
  });

  let kudo = kudos.find((k) => k.id === req.params.id);

  if (kudo) {
    console.log("success ");
    return res.json(kudo);
  } else {
    console.log("fail ");
    res.status(404).json({
      error: `Kudo ID${req.params.id} is not found`,
    });
  }
});

// <====================> ROUTE FOR POSTING KUDO <====================>
router.post("/create", (req, res) => {
  const kudosList = readJSONFile();

  // if (!req.body.kudo) {
  //   return res.status(400);
  // }
  // if (!req.body.recipient) {
  //   return res.status(400);
  // }
  const newKudo = {
    id: req.body.id,
    text: req.body.kudo,
    recipient: req.body.recipient,
    author: req.body.author,
    image:
      "",
    likes: 0,
    timestamp: new Date(),
    comments: [],
  };

  kudosList.find((u) => u.userId === newKudo.recipient).kudos.push(newKudo);
  //pushes new kudo into an existing array
  util.writeJSONFile(kudosList); //writes new array of kudos to JSON
  res.status(200).json(newKudo); //return a new array of kudos
});

module.exports = router;
