const util = require("util");

const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const expValid = require("express-validator");

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const router = express.Router();

app.use(express.static(`${__dirname}/build`));
app.use(compression());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(expValid([]));

app.get("/google1c0027e66548efc2.html", (req, res) => {
  res.sendFile(`${__dirname}/google1c0027e66548efc2.html`);
});

app.post("/contact", async function(req, res) {
  if (
    req.body.message === undefined ||
    req.body.email === undefined ||
    req.body.phone === undefined ||
    req.body.name === undefined
  )
    return res.status(422).json({ msg: "Remplissez tous les champs" });

  /* validation */
  req.checkBody("name", "Nom invalide").notEmpty();
  req.checkBody("message", "Message invalide").notEmpty();
  req.checkBody("phone", "Téléphone invalide").notEmpty();
  req.checkBody("email", "Email invalide").isEmail();

  var errors = req.validationErrors();

  if (errors) {
    const JSONResponse = JSON.stringify({
      msg: "Validation Errors:",
      errors: errors
    });
    res.status(422).send(JSONResponse);
    return;
  }

  const textToSend =
    req.body.message +
    "\n\n" +
    req.body.email +
    "\n" +
    req.body.phone +
    "\n" +
    req.body.name;
  const msg = {
    from: "aksels.ledins@gmail.com",
    to: "aksels.ledins+hypermoon@gmail.com",
    subject: req.body.name,
    text: textToSend
  };

  try {
    await sgMail.send(msg);
  } catch (e) {
    return res.status(500).json({ msg: "Rip sendgrid" });
  }
  return res.status(200).json({ msg: "Good!" });
});

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.use("/", router);

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log("hypermoon.io - web-frontend - running on 3000");
});
