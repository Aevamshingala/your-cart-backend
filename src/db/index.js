import { moongoose } from "moongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = moongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n mongodb connected !! db host : ${connectionInstance.connection.host}`
    );
  } catch (e) {
    console.log("error in connectDB ", e);
    process.exit(1);
  }
};

export default connectDB;
