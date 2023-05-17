import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  if (id) {
    data = await employees.findOne(id);
  } else {
    data = await employees.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let employeeDTO = req.body;
  let data = await employees.addOne(employeeDTO);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let employeeDTO = req.body;
  let data = await employees.updateOne(id, employeeDTO);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await employees.removeOne(id);
  res.json(data);
});

export default router;
