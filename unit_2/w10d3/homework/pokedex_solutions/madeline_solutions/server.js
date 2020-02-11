const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const pokedex = require("./models/pokemon");

app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Index
app.get("/", (req, res) => {
  res.render("Index", {
    pokemon: pokedex
  });
});

// New
app.get("/pokemon/new", (req, res) => {
  res.render("New", {
    name: "Create a new!"
  });
});

// Show
app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokedex[req.params.id]
  });
});

// Edit
app.get("/pokemon/:id/edit", (req, res) => {
  res.render("Edit", {
    index: req.params.id
  });
});

// Create
app.post("/pokemon/", (req, res) => {
  pokedex.push(req.body);
  res.redirect("/");
});

// Update
app.put("/pokemon/:id/", (req, res) => {
  pokedex[req.params.id] = req.body;
  res.redirect(`/`);
});

// Destroy
app.delete("/pokemon/:id", (req, res) => {
  pokedex.splice(req.params.id, 1);
  res.redirect("/");
});

app.listen(port, (req, res) => {
  console.log("listening on.." + port);
});
