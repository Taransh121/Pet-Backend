const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv"); //For using process.env
const app = express();
const PORT = 4000;
const path = require("path");
const AnimalRoute = require("./Routes/AnimalRoute")


//Configurations
dotenv.config();
// app.use(express.json());
app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "Uploads")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/animal", AnimalRoute);

//Database
mongoose.set('strictQuery', false);
const mongoURL = `mongodb+srv://admin:${process.env.Mongo_DB_Password}@admin.dy2bovu.mongodb.net/Pets?retryWrites=true&w=majority`
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log(error);
});

app.listen(PORT, () => {
    console.log(`Server running at PORT - ${PORT}`);
});