import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Listening to server at port: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log("Cannot connect to database!!!", err);
  });
