import express from "express";
import routes from "./api/routes/index"
import cors from "cors";

const app = express();

app.use(cors())
routes(app)

app.listen(3000, () => console.log("Server is running in port 3000 🚀"));