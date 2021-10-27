const express = require("express");
const cors = require("cors");
const app = express();
const useRouter = require("./Routes/customer");
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
app.use("/cust", useRouter);




