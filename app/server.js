const express = require("express");
const history = require("connect-history-api-fallback");

const app = express();
app.use(history());
app.use(express.static("./dist/front"));

const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
