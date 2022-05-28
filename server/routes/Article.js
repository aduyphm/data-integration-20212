const articleController = require('../controllers/Article');
const {asyncWrapper} = require("../utils/asyncWrapper");
const express = require("express");
const articleRoutes = express.Router();

articleRoutes.post(
    "/create",
    asyncWrapper(articleController.create)
)

articleRoutes.post(
    "/search",
    asyncWrapper(articleController.search)
)

articleRoutes.get(
    "/getListArticles",
    asyncWrapper(articleController.getListArticles)
)

articleRoutes.get(
    "/getArticlesByCategory/:category",
    asyncWrapper(articleController.getArticlesByCategory)
)

articleRoutes.get(
    "/getArticle/:id",
    asyncWrapper(articleController.getArticle)
)

module.exports = articleRoutes