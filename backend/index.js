const express=  require("express");
const app =  express();
const cors = require ("cors");
const mongoose= require ("mongoose");
const port = 7000;
const register = require ("./routes/user")
const login = require ("./routes/user")

app.use(express.json())
app.use(cors())
require("dotenv").config();

//routes
app.use("/api/auth/", register)
app.use("/api/auth/", login)

mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(() => {
  console.log(`connected to mongodb`)
}).catch((err) => {
  console.log(err.message)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})