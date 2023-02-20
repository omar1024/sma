import { Router } from "express";
const bseRouter = Router();
import axios from "axios";

bseRouter.get("/", async (request, response) => {
  var res = await axios.get(
    "https://www.nseindia.com/api/historical/cm/equity?symbol=SUZLON"
  );
  console.log(res);
});

export default bseRouter;
