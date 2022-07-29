
const express = require("express");
const cors = require("cors");
// const User = require("./config");
import database from "./config";
const app = express();
app.use(express.json());
app.use(cors());

// app.get("/", async (req, res) => {
//   const snapshot = await User.get();
//   const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   res.send(list);
// });

// app.post("/create", async (req, res) => {
//     const data = req.body;
//     return console.log(data);
//     await User.add({ data });
//     res.send({ msg: "User Added" });
// });
