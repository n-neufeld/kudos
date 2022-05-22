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

router.put("/:id", (req, res) => {
  const comment = {
    text: req.body.text,
    author: req.body.author,
    id: util.setNewId(),
    timestamp: new Date(),
  };

  const kudosList = readJSONFile();

  kudosList.forEach((u) => {
    const found = u.kudos.find((k) => k.id === req.params.id);
    if (u.kudos && found) {
      u.kudos.find((k) => k.id === req.params.id).comments.push(comment);
    }
  });

  util.writeJSONFile(kudosList); //writes new array of kudos to JSON

  res.status(200).json({
    succes: "Comment added",
  });
});

router.put("/:id/likes", (req, res) => {
  const kudosList = readJSONFile();

  kudosList.forEach((u) => {
    const found = u.kudos.find((k) => k.id === req.params.id);
    if (u.kudos && found) {
      u.kudos.find((k) => k.id === req.params.id).likes++;
    }
  });

  util.writeJSONFile(kudosList); //writes new array of kudos to JSON

  res.status(200).json({
    success: "Like added",
  });
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

  const imageArray = [
    "/kodoImages/kc0.png",
    "/kodoImages/kc1.png",
    "/kodoImages/kc2.png",
    "/kodoImages/kc3.png",
    "/kodoImages/kc4.png",
    "/kodoImages/kc5.png",
    "/kodoImages/kc6.png",
  ];

  const newKudo = {
    id: req.body.id,
    text: req.body.kudo,
    recipient: req.body.recipient,
    author: req.body.author,
    image: imageArray[Math.floor(Math.random() * imageArray.length)],
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
