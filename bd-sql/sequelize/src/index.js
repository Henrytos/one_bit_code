const express = require("express");
const port = 3000;
const app = express();
const routes = require("./Routes/Planet");

require("../config/associotions");

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
