const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AuthRoutes =require("./routes/authRoutes");


const app = express();
const cookieParser =require("cookie-parser");

app.listen(4000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started Successfully.");
    }
});

mongoose
    .connect("mongodb://0.0.0.0:27017/jwt", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connetion Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/",AuthRoutes);