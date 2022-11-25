const express = require("express");
const path = require("path");
const fs = require("fs");
var juice = require("juice");
var { Liquid } = require("liquidjs");

const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 8082;

var engine = new Liquid();

const db = require("./db");

app.get("/user", (req, res) => {
  let final;
  const data = db.filter((d) => {
    if (d.id === Number(req.query.id) && d.url.includes(req.hostname)) {
      final = juice.inlineContent(d.component, d.styles);
      return d;
    }
  });

  if (data.length > 0 && final) {
    let dataRes = { ...data[0], final };
    var engine = new Liquid();
    let file = fs
      .readFileSync(path.join(__dirname, "./public/preload.js"))
      .toString();
    let finalOutput = engine.parseAndRenderSync(file, {
      data: JSON.stringify(dataRes),
    });
    res.contentType("application/javascript");
    res.statusCode = 200;
    res.send(finalOutput);
  } else {
    res.statusCode = 404;
    res.send("Error");
  }

  //   res.send("OK");
});
app.get("/", (req, res) => res.send("Hello World ok!"));

// sendFile will go here

app.listen(port);
console.log("Server started at http://localhost:" + port);
