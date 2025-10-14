require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types; 
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to DB");

        await initDB();

        await mongoose.connection.close();
        console.log("DB connection closed, script finished");
    } catch (err) {
        console.error("Error connecting or initializing DB:", err);
    }
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: new ObjectId("68e40908d310b8db3874048e"),
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

main();

