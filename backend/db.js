const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sohamduttasd:legendSOHAM1@foodcluster.javxj.mongodb.net/GoFood?retryWrites=true&w=majority&appName=foodcluster';

module.exports = async function() {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        // Access the collections
        const db = mongoose.connection.db;
        const foodCollection = db.collection("food_itemstot");
        const categoryCollection = db.collection("food_items");

        // Fetch data from collections
        const data = await foodCollection.find({}).toArray();
        const Catdata = await categoryCollection.find({}).toArray();

        // Return the data
        console.log(data);
        return { data, Catdata };

    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
        throw error; // Propagate the error
    }
};
