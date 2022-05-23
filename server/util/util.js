const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// <=====> VARIABLE TO SET UNIQUE IDS <=====>
const setNewId = () => {
  return uuidv4();
};

// <=====> FUNCTION SET TO WRITE NEW FILES WITH AN ERROR CONDITION <=====>
function writeJSONFile(content) {
  fs.writeFileSync("./data/kudos.json", JSON.stringify(content));
}

//*====================> READ THE JSON DATA <====================*//
function readJSONFile() {
  const fileData = fs.readFileSync("./data/kudos.json");
  const parsedFileData = JSON.parse(fileData);
  return parsedFileData;
}

module.exports = {
  readJSONFile,
  writeJSONFile,
  setNewId,
};
