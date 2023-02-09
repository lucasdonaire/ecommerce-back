import express from "express";
import routes from "./api/routes/index"

const app = express();

routes(app)

app.use(express.json());

app.listen(3000, () => console.log("Server is running in port 3000 🚀"));