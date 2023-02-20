import { Router } from "express";
const nseRouter = Router();
import axios from "axios";

nseRouter.get("/", async (request, response) => {
  var res = await axios.get(
    "https://www.nseindia.com/api/historical/cm/equity?symbol=SUZLON"
  );
  console.log(res);
});

export default nseRouter;
