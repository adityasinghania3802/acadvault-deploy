import express from "express";
import MaterialController from "../controllers/MaterialController";
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) {
    cb(null, "./uploads");
  },
  filename: function (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post(
  "/new",
  upload.single("file"),
  MaterialController.createNewMaterial
);

router.get("/", MaterialController.viewMyUploadedMaterials);

router.get("/statusPending", MaterialController.viewAllPendingMaterials);

router.post("/changeStatus", MaterialController.changeStatusOfUploadedMaterial);

export default router;
