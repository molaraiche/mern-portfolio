const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// You can get your APIS from  https://cloudinary.com/
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "portfolio_images",
    format: async (req, file) => {
      const validFormats = ["jpg", "png", "webp", "svg"];
      const ext = file.mimetype.split("/")[1];
      return validFormats.includes(ext) ? ext : "jpg";
    },
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({
  storage: cloudinaryStorage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml",
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Only .jpg, .png, .webp, and .svg formats are allowed!"),
        false
      );
    }
  },
});

module.exports = upload;
