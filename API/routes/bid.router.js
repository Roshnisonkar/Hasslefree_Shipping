import express from 'express';
const router = express.Router();

//to link controller
import * as BidController from '../controller/bid.controller.js'; 

router.post("/save",BidController.save);

router.get("/fetch",BidController.fetch);

router.delete("/delete",BidController.deletebid);

router.patch("/update",BidController.updatebid);

export default router;