const fs = require("fs");
const arq = __dirname + "/expl.txt";

fs.writeFile(arq, "hllo word node", (err) => {
  console.log(err);
});
