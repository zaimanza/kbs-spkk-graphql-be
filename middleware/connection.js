const mongoose = require("mongoose");
require("dotenv").config();

connect();

function connect() {
  try {
    mongoose.dropgodb = mongoose.createConnection(
      `mongodb+srv://${process.env.MONGO_USER
      }:${process.env.MONGO_PASSWORD
      }@${process.env.MONGO_URL
      }/${process.env.MONGO_DROPGO
      }?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
    );
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
}

module.exports = mongoose;

process.env.MONGO_URL
