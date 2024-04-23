import fs from "fs";
import path from "path";
import { Request, Response } from "express";

export class ImageController {
  constructor() {}

  async getImage(req: Request, res: Response) {
    const { type = "", image = "" } = req.params;

    const imagePath = path.join(__dirname, `../../../uploads/${type}/${image}`);
    if (!fs.existsSync(imagePath))
      return res.status(404).json({ error: "Image not found" });

    res.sendFile(imagePath);
  }
}
