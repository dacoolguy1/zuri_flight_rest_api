const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const user = require("./routes/flightRoute");


const app = express();

app.use(json());

app.use("/user", user);

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send("Zuri Training")
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
