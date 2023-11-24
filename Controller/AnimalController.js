const Animal = require("../Models/AnimalModel");

exports.addNewAnimal = async (req, res) => {
    try {
        const { name, email, phone, animalName, animalType, animalAge, animalBreed, city, animalImage } = req.body;
        //Remove the animalIamge from above line and comment off the next 4 lines , if you wanna amke a call from the thunder client , and if you wanna store from the frontend then let the animalIamge come from req.body
        // let animalImage = "";
        // if (req.file) {
        //     animalImage = req.file.filename;
        // }
        const newAnimal = new Animal({ name, email, phone, animalName, animalType, animalAge, animalBreed, city, animalImage });
        const savedAnimal = await newAnimal.save();
        return res.status(200).json({ savedAnimal });
    } catch (error) {
        return res.status(400).json(error);
    }
}
exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        return res.status(200).json({ animals });
    } catch (error) {
        return res.status(400).json(error);
    }
    // return res.status(200).json("hello2");

}
exports.deleteAnimal = async (req, res) => {
    try {
        const { animalName } = req.body;
        const animal = await Animal.findOneAndDelete({ animalName });
        if (!animal) {
            return res.status(400).json("Sorry, no animal with that name exists in our database.")
        } else {
            return res.status(200).json("Animal deleted successfully.");
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}
