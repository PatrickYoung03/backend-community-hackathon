const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const indexRouter = require("./routes/index");

app.use(express.json());
app.use(cors());

app.use("/", indexRouter);

app.use((req, res, next) => {
  console.log(`${req.method} receieved to ${req.url}`);
  next();
});

app.listen(port, () => console.log(`app listening on port: ${port}`));
