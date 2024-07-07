const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      //   newUrlParser: true,
      //   UseUnifiedTOpology: true,
      //   UseFindAndModify: true,
    });
    console.log(`MongoDB connected succesfully: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
