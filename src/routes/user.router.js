import { Router } from "express";
import { uplode } from "../middlewares/multer";

const router = Router();
router.route("/register").post(uplode.single("avatar"));
