const { Router } = require("express");
const {
  findRepairs,
  findRepair,
  createRepair,
  updateRepair,
  deleteRapair,
} = require("../controllers/repairs.controllers");
const { validRepairById } = require("../middlewares/repairs.middlewares");

const router = Router();

router.get("/", findRepairs);

router.get("/:id", validRepairById, findRepair);

router.post("/", createRepair);

router.patch("/:id", validRepairById, updateRepair);

router.delete("/:id", validRepairById, deleteRapair);

module.exports = {
  repairsRouter: router,
};
