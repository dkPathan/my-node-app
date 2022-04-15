const express = require("express"); //imported express framework
const app = express(); // binded express with app
const port = process.env.PORT || 8000; // default port to 8000
const router = require("./router/router"); // imported router from router folder

app.use(router);
app.use(express.json());

// listening on port 8000
app.listen(port, (req, res) => {
  console.log("listening on port " + port);
});
