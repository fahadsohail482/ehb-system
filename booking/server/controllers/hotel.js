import Hotel from "../models/hotel";
import fs from "fs";
export const create = async (req, res) => {
  console.log("req.fields", req.fields);
  console.log("req.files", req.files);
  try {
    let fields = req.fields;
    let files = req.files;
    let hotel = new Hotel(fields);
    // hotel.postedBy = req.user._id;
    //handle image
    if (files.image) {
      hotel.image.data = fs.readFileSync(files.image.path);
      hotel.image.contentType = files.image.type;
    }
    hotel.save((err, result) => {
      if (err) {
        console.log("Error saving Hotel");
        res.status(404).send("ؑError Saving");
      }
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};

export const hotels = async (req, res) => {
  let all = await Hotel.find({})
    .limit(24)
    .select("-image.data")
    .populate("postedBy", "_id name")
    .exec();
  console.log(all);
  res.json(all);
};

export const sellerHotels = async (req, res) => {
  let all = await Hotel.find({})
    .select("-image.data")
    .populate("postedBy", "name")
    .exec();
  console.log("Hello from seller", all);
  res.send(all);
};
