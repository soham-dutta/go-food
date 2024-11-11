const express = require('express');
const connectDB = require('./db');

const app = express();

async function startServer() {
    try {
        // Connect to MongoDB and retrieve data
        const { data, Catdata } = await connectDB();
        console.log("Data fetched successfully");

        // Do something with `data` and `Catdata` if needed

    } catch (error) {
        console.error("Failed to fetch data:", error);
    }

    // Define a route to respond with "Hello World"
    app.get('/', (req, res) => {
        res.send("Hello World");
    });
    app.use(express.json());
    app.use('/api',require("./Routes/CreatUser"));
    // Start the server
    const PORT = 4003;
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`);
    });
}

// Start the server and database connection
startServer();
