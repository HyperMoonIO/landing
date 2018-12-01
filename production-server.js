const express = require("express");
const compression = require("compression");

const app = express();
const router = express.Router();

app.use(express.static(`${__dirname}/build`));
app.use(compression());

app.get("/google1c0027e66548efc2.html", (req, res) => {
  res.sendFile(`${__dirname}/google1c0027e66548efc2.html`);
});

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.use("/", router);

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log("hypermoon.io - web-frontend - running on 3000");
});
