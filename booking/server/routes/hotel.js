import express from "express";
import { create, hotels, sellerHotels } from "../controllers/hotel";
import formidable from "express-formidable";
const router = express.Router();

// controllers
router.post("/create-hotel", formidable(), create);
router.get("/hotels", hotels);
router.get("/seller-hotels", sellerHotels);
module.exports = router;
