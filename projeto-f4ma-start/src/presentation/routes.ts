import express, { Request, Response } from "express";
import { RegisterBandEndPoint } from "./endpoints/registerBand";
import { GetBandEndpoint } from "./endpoints/getBand";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/registerBand", RegisterBandEndPoint)
app.get("/getBand",GetBandEndpoint )

export default app;
