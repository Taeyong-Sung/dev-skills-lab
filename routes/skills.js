import { Router } from "express";
import * as skillsCtrl from "../controllers/skills.js";

const router = Router();

// GET localhost:3000/skills
router.get("/", skillsCtrl.index);
// GET localhost:3000/skills/new
router.get("/new", skillsCtrl.new)
// POST localhost:3000/skills
router.post("/", skillsCtrl.create)

router.get('/:skillId', skillsCtrl.show)

router.delete('/:skillId', skillsCtrl.delete)

router.get('/:skillId/edit', skillsCtrl.edit)

router.put('/:skillId', skillsCtrl.update)

export { 
    router
 };
