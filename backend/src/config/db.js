const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;

let connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`Database connection error ${error}`);
  }
};

export default connectDB;
