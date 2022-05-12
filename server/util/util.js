const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// <=====> VARIABLE TO SET UNIQUE IDS <=====>
const setNewId = () => {
  return uuidv4();
};

// <=====> FUNCTION SET TO WRITE NEW FILES WITH AN ERROR CONDITION <=====>
function writeJSONFile(content) {
  console.log(content);
  fs.writeFileSync("./data/kudos.json", JSON.stringify(content));
}

module.exports = {
  writeJSONFile,
  setNewId,
};
