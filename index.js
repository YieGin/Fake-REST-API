require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use("/", require("./routes/products"));
app.use("/", require("./routes/cart"));
app.use("/", require("./routes/posts"));
app.use("/", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`your server running on ${PORT}`);
});
