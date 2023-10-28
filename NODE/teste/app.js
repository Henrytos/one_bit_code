const express = require("express");
const routerCheckLists = require("./src/routes/checklists");

const app = express();
app.use(express.json());
const port = 3000;

app.use("/checklist", routerCheckLists);

app.listen(port, () => {
  console.log("iniciando servidor");
});
