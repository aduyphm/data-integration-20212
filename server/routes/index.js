const express = require("express");
const apiRoutes = require("./api");

const mainRouter = express.Router();

mainRouter.use("/api", apiRoutes);

module.exports = mainRouter;