import express from "express";
import config from "./config";
import router from "./routes";

const app = express();

app.use(express.json());
app.use("/api", router);

//Generic catch-all error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
