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
    id: util.setNewId(),
    text: req.body.kudo,
    image:
      "https://th.bing.com/th/id/R.9fe1988f83eeae24d16db131475d31b2?rik=Eq0UEK5i3b%2bfgg&riu=http%3a%2f%2fcohenwoodworking.com%2fwp-content%2fuploads%2f2016%2f09%2fimage-placeholder-500x500.jpg&ehk=6xxwN2hsF1pbhTTWWflHnkIka8Rxe3PZahhFfRQJIrY%3d&risl=&pid=ImgRaw&r=0",
    likes: 0,
    timestamp: new Date(),
    comments: [],
    recipient: req.body.recipient,
    userId: 1,
    name: "Nathaniel Neufeld",
  };
  kudosList.push(newKudo); //pushes new kudo into an existing array
  util.writeJSONFile(kudosList); //writes new array of kudos to JSON
  res.status(200).json(newKudo); //return a new array of kudos
});

module.exports = router;
