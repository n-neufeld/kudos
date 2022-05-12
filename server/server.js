const express = require("express");
const cors = require("cors");
const app = express();

const kudoRoutes = require("./routes/kudoRoutes");

// <=====> port configuration <=====>
require("dotenv").config();
const PORT = process.env.PORT || 8080;

// <=====> allows access to my local host <=====>
app.use(express.json());
app.use(cors());

// app.use(express.static("public"));

// app.use((req, res, next) => {
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("This is the API documentation");
// });

app.use("/kudos", kudoRoutes);

// <=====> start the server <=====>
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
