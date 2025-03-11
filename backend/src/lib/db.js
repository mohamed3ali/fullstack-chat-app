import mongoose from "mongoose";

export const connection = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoDB connected");
  } catch (err) {
    console.log("mongoDB connected Error", err);
  }
};
