const moment = require("moment");

const viewName = (name) => {
  console.log(name);
  console.log(moment().format("HH:mm"));
};

viewName("Herny franz");
