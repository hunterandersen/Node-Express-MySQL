import express from "express";
import products from "../controllers/products.controller";

const router = new express.Router();

//READ
router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;

    if (id) {
      data = await products.findOne(id);
    } else {
      data = await products.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err, req, res);
  }
});

//CREATE
router.post("/", async (req, res, next) => {
  try {
    const productData = req.body;
    const result = await products.addOne(productData);
    res.json(result);
  } catch (err) {
    next(err, req, res);
  }
});

//UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const columns = ["Name", "Price", "CategoryID", "OnSale", "StockLevel"];
    //I want to check that all of the provided columns match the columns in the database
    const columnsMatch = Object.keys(updatedData).every((key) =>
      columns.includes(key)
    );

    if (id && columnsMatch) {
      const result = await products.updateOne(id, updatedData);
      res.json(result);
    } else {
      if (columnsMatch) throw Error("Missing id");
      else
        throw Error(
          "Provided data does not match columns in the Products table"
        );
    }
  } catch (err) {
    next(err, req, res);
  }
});

//DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      throw Error("Provided id is not a number");
    }

    if (id) {
      const result = await products.removeOne(id);
      res.json(result);
    } else {
      throw Error("Missing id for delete");
    }
  } catch (err) {
    next(err, req, res);
  }
});

export default router;
