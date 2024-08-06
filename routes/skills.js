import { Router } from "express";
import * as skillsCtrl from "../controllers/skills.js";

const router = Router();

// GET localhost:3000/skills
router.get("/", skillsCtrl.index);
// GET localhost:3000/skills/new
router.get("/new", skillsCtrl.new)
// POST localhost:3000/skills
router.post("/", skillsCtrl.create)
// SHOW localhost:3000/skills/:skillID
router.get('/:skillId', skillsCtrl.show)
// DELETE localhost:3000/skills/:skillID
router.delete('/:skillId', skillsCtrl.delete)
// GET localhost:3000/skills/:skillId/edit
router.get('/:skillId/edit', skillsCtrl.edit)
// PUT localhost:3000/skills/:skillId
router.put('/:skillId', skillsCtrl.update)

export { 
    router
};
