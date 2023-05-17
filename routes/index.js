import express from "express";
import employeesRouter from "./employees.route";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/employees", employeesRouter);

export default router;
