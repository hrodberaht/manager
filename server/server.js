const express = require("express");

const app = express();

const routerCalc = require("./api/routes/calc");

app.use("/api", routerCalc);
app.use(express.static("../dist/"));



app.listen(process.env.PORT || 3000);