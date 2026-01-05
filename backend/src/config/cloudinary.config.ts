import { v2 as cloudinary } from "cloudinary";
import { Env } from "./env.config";

cloudinary.config({
  cloud_name: "dsz6wz7vz",
  api_key: "332291946324715",
  api_secret: "cuN_7RGvWrVBuCiL5OE2TfJw8cc",
});

export default cloudinary;
