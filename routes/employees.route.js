import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await employees.findOne(id);
    } else {
      data = await employees.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err, req, res);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let employeeDTO = req.body;
    let data = await employees.addOne(employeeDTO);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let employeeDTO = req.body;
    let data = await employees.updateOne(id, employeeDTO);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await employees.removeOne(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
