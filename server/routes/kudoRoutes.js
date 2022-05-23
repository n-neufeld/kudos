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

//*====================> READ THE JSON DATA <====================*//
function readJSONFile() {
  const fileData = fs.readFileSync("./data/kudos.json");
  const parsedFileData = JSON.parse(fileData);
  return parsedFileData;
}

//*====================> ROUTE FOR GETTING ALL KUDOS <====================*//
router.get("/", (_req, res) => {
  const kudos = readJSONFile();
  res.status(200).json(kudos);
});

//*====================> ROUTE FOR GETTING SPECIFIC KUDO BY ID <====================*//
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

//*====================> UPDATE ADDED COMMENT TO KUDO <====================*//
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

  //*===============> WRITES NEW ARRAY OF KUDOS TO JSON <===============*//
  util.writeJSONFile(kudosList); 

  res.status(200).json({
    succes: "Comment added",
  });
});
//*====================> UPDATE THE LIKE COUNT <====================*//
router.put("/:id/likes", (req, res) => {
  const kudosList = readJSONFile();

  kudosList.forEach((u) => {
    const found = u.kudos.find((k) => k.id === req.params.id);
    if (u.kudos && found) {
      u.kudos.find((k) => k.id === req.params.id).likes++;
    }
  });
//*===============> WRITES NEW ARRAY OF KUDOS TO JSON <===============*//
  util.writeJSONFile(kudosList);

  res.status(200).json({
    success: "Like added",
  });
});

//*=====================> POSTING KUDO TO KUDO PAGE <=====================*//
router.post("/create", (req, res) => {
  const kudosList = readJSONFile();

  // if (!req.body.kudo) {
  //   return res.status(400);
  // }
  // if (!req.body.recipient) {
  //   return res.status(400);
  // }

  //*=====================> ARRAY OF IMAGES FOR KUDOS POSTED <=====================*//
  const imageArray = [
    "/canvasImages/create/kc7.png",
    "/canvasImages/create/kc8.png",
    "/canvasImages/create/kc9.png",
    "/canvasImages/create/kc10.png",
    "/canvasImages/create/kc11.png",
    "/canvasImages/create/kc12.png",
    "/canvasImages/create/kc13.png",
  ];

  //*=====================> VARIABLE FOR NEW KUDO FORMAT <=====================*//
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
