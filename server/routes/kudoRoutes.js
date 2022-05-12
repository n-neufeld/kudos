const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("../util/util");
const kudosFile = "../data/kudos.json";
const kudos = require(kudosFile);

// router.use((req, res, next) => {
//   console.log('kudoRoutes');
//   next()
// })

function readJSONFile() {
  const fileData = fs.readFileSync("./data/kudos.json");
  const parsedFileData = JSON.parse(fileData);
  return parsedFileData;
}

// <=====> ROUTE FOR GETTING ALL KUDOS <=====>
router.get("/", (_req, res) => {
  const kudos = readJSONFile();
  res.status(200).json(kudos);
});

// <=====> ORIGINAL ROUTER.GET FOR THE ABOVE <=====>
// router.get("/", (_req, res) => {
//   return res.send(
//     kudos.map((kudo) => {
//       return (kudo = {
//         id: kudo.id,
//         title: kudo.title,
//         channel: kudo.channel,
//         image: kudo.image,
//         description: kudo.description,
//         likes: kudo.likes,
//         duration: kudo.duration,
//         kudo: kudo.kudo,
//         timestamp: kudo.timestamp,
//         comments: kudo.comments,
//       });
//     })
//   );
// });

// <=====> ROUTE FOR GETTING SPECIFIC KUDO BY ID <=====>
router.get("/:id", (req, res) => {
  const kudos = readJSONFile();
  let kudo = kudos.find((kudo) => kudo.id === req.params.id);
  if (kudo) {
    return res.json(kudo);
  } else {
    res.status(404).json({
      error: `Kudo ID${req.params.id} is not found`,
    });
  }
});

router.post("/create", (req, res) => {
  const kudosList = readJSONFile();

  if (!req.body.title) {
    //<======== turnary?
    return res.status(400);
  }
  if (!req.body.description) {
    return res.status(400);
  }
  const newKudo = {
    id: util.setNewId(),
    kudo: req.body.kudo,
    image: req.body.image,
    description: req.body.description,
    likes: "2",
    timestamp: new Date().toLocaleDateString(),
    comments: [],
  };
  kudosList.push(newKudo); //pushes new kudo into an existing array
  util.writeJSONFile(kudosList); //writes new array of kudos to JSON
  res.status(200).json(newKudo); //return a new array of kudos
});

module.exports = router;
