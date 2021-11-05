import express, { Request, Response, Express, Router } from "express";
import cors from "cors";
import { Char } from "./interfaces/Char";
import bodyParser from "body-parser";

const PORT: number = 3000;
const app: Express = express();
const router: Router = express.Router();

const chars: Char[] = [];

app.use(cors());
app.use(bodyParser());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//Utility function
function random(maxValue: number): number {
  return Math.floor(Math.random() * maxValue) + 1;
}

//Routes
router.get("/", (req: Request, res: Response) => {
  return res.sendStatus(400);
});

router.post("/api/create", (req: Request, res: Response) => {
  const char: Char = {
    name: req.body?.name,
    hp: random(100),
    mana: random(1000)
  };

  chars.push(char);

  return res.json(char);
});

router.get("/api/characters", (req: Request, res: Response) => {
  return res.json(chars);
});
