import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'; // Assurez-vous que dotenv est correctement configuré
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import produitRouter from "./routes/produit.route.js";
import commandeRouter from "./routes/commande.route.js";
import cors from "cors";
import http from "http";
const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.NODE_ENV === "local" ? "http://localhost:5173" : "*",
  credentials: true,
}));

const expressServer = http.createServer(app);
const PORT = process.env.PORT || 4000;

// Connect to the database
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

// Routes
app.use("/ecommerce/users", userRouter);
app.use("/ecommerce/auth", authRouter);
app.use("/ecommerce/produits", produitRouter);
app.use("/ecommerce/commandes", commandeRouter);

// Start server
expressServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

export default () => expressServer;
