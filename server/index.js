const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const houseController = require("./houseController");
const api = "/api/houses";

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
	app.set("db", database);
});

app.get(api, houseController.read);
app.post(api, houseController.create);
// app.patch(api, houseController.update);
// app.delete(api, houseController.delete);

const PORT = process.env.SERVER_PORT || 25565;
app.listen(PORT, () => {
	console.log(`Server shipped on port ${PORT} ⛵️`);
});
