import {Router} from "express";
import multer from "multer";
import { storage } from '../config/configure.multer.js'
import { uploaderController } from '../controllers/uploader.controller.js'
export const uploaderRouter = Router();

const upload = multer({storage: storage})

uploaderRouter.post('/upload', upload.single('image'), uploaderController);