const express = require("express");
const app = express();
const port = 3000;

const routes = require("./Routes/Planet");

app.use(express.json());

app.use("/planets", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
