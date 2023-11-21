const express = require("express");
const multer = require('multer');
const path = require("path");
const router = express.Router();
const { getAllAnimals, addNewAnimal, deleteAnimal } = require("../Controller/AnimalController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, "public/assets");
        cb(null, path.join(path.dirname(__dirname), "/Uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

router.get("/getAllAnimals", getAllAnimals);
router.post("/addNewAnimal", upload.single("animalImage"), addNewAnimal);
router.post("/deleteAnimal", deleteAnimal);

module.exports = router;
