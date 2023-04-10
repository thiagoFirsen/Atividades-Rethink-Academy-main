import express from "express";
import routerItems from "./routes/items.js";
import routerHome from "./routes/home.js";

const items = routerItems;
const home = routerHome;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", home);
app.use("/api/items", items);

app.listen(3000, () => console.log("Server running on port 3000"));
