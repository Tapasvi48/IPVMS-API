import multer from "multer";
import { ValidationError } from "../Error/customError.js";
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: "2mb" },
  fileFilter: (req, file, callback) => {
    const acceptableExtensions = ["application/pdf"];
    if (!acceptableExtensions.includes(file.mimetype)) {
      console.log(file.mimetype, "mime type");
      return callback(new ValidationError("file should be pdf format"));
    }

    // added this

    // --

    callback(null, true);
  },
});
