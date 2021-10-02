import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

app.use("/user", userRoute);

const PORT = 9000;

const CONNECTION_URL =
  "mongodb+srv://bhargavi113:bhargavi113@cluster0.moi7z.mongodb.net/twitter?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port:${PORT}`))
  )
  .catch((err) => console.log(err));
