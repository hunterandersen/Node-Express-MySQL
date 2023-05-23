import express from "express";
import employeesRouter from "./employees.route";
import productsRouter from "./products.route";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/employees", employeesRouter);
router.use("/products", productsRouter);

export default router;
