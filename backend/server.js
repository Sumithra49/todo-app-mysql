
require("dotenv").config();
const express = require("express");

const cors = require("cors");
const { connectionToDb, sequelize } = require("./config/db");
const todoRouter = require("./routes/todoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;



app.get("/", (req, res) => {
  res.send("This is the To-Do app home route");
});


sequelize.sync({ alter: true })
  .then(() => {
    console.log(" Tables synced with Clever Cloud DB");
  })
  .catch((err) => {
    console.error(" Sync failed:", err);
  });


app.use("/todo", todoRouter);


app.listen(port, async () => {
  await connectionToDb();
  console.log(`Server is running on port ${port}`);
});
