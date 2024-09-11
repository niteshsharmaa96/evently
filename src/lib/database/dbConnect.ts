import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("database already connected!");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "evently",
      bufferCommands: false,
    });

    connection.isConnected = db.connections[0].readyState;

    console.log("DB connected...");
  } catch (error) {
    console.log("Database connection failed...", error);
    process.exit(1);
  }
}

export default dbConnect;
