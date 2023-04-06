const express = require("express");
const route = require("./routes/genres");

const app = express();
app.use(express.json());
app.use("/api/genres", route);
app.listen(5000, () => console.log(`Listening on port 6000....`));
