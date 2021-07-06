const mongo = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.URI;
const MongoClient = async () => {
  try {
    await mongo.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log({ success: true, message: "Successfully connected to the db" });
  } catch (error) {
    console.log({
      success: false,
      error: "Not able to connect to DB",
      message: error.message,
    });
  }
};

export { MongoClient };
