const express = require("express");
const adminRoutes = express.Router();
const CategoriesModel = require("../models/Category");
const ArticleModel = require("../models/Article");
const UrlModel = require("../models/Url");

// Categories API
adminRoutes.post("/categories", async (req, res) => {
  const category = req.body.category;
  const newCategory = new CategoriesModel({ category: category });

  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

adminRoutes.get("/categories", async (req, res) => {
  CategoriesModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

adminRoutes.get("/category/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const category = await CategoriesModel.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

adminRoutes.put("/updatecategory", async (req, res) => {
  const newCategory = req.body.newCategory;
  const id = req.body.id;
  try {
    await CategoriesModel.findById(id, (err, updateCategory) => {
      updateCategory.category = newCategory;
      updateCategory.save();
    }).clone();
  } catch (err) {
    console.log(err);
  }
});

adminRoutes.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await CategoriesModel.findByIdAndDelete(id).exec();
  res.send("delete");
});

// Articles API
adminRoutes.post("/article", async (req, res) => {
  try {
    const newArticle = req.body;
    const Article = new ArticleModel(newArticle);
    await Article.save();
    res.status(201).json(Article);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

adminRoutes.get("/article", async (req, res) => {
  try {
    const Article = await ArticleModel.find();
    res.status(200).json(Article);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

adminRoutes.get("/article/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const Article = await ArticleModel.findById(id);
    res.status(200).json(Article);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

adminRoutes.put("/updateArticle/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const modifiedArticle = req.body;
    await ArticleModel.updateOne({ _id: id }, { $set: modifiedArticle });
    res.json({
      success: true,
      data: modifiedArticle,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to modified",
    });
  }
});

adminRoutes.delete("/deleteArticle/:id", async (req, res) => {
  const id = req.params.id;
  await ArticleModel.findByIdAndDelete(id).exec();
  res.send("delete");
});

// URL API
adminRoutes.post("/url", async (req, res) => {
  try {
    const newUrl = req.body;
    const url = new UrlModel(newUrl);
    await url.save();
    res.status(201).json(url);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

adminRoutes.get("/url", async (req, res) => {
  try {
    const url = await UrlModel.find();
    res.status(200).json(url);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

adminRoutes.get("/url/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const url = await UrlModel.findById(id);
    res.status(200).json(url);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

adminRoutes.put("/updateUrl/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const modifiedUrl = req.body;
    await UrlModel.updateOne({ _id: id }, { $set: modifiedUrl });
    res.json({
      success: true,
      data: modifiedUrl,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Failed to modified ",
    });
  }
});

adminRoutes.delete("/deleteUrl/:id", async (req, res) => {
  const id = req.params.id;
  await UrlModel.findByIdAndDelete(id).exec();
  res.send("delete");
});

module.exports = adminRoutes;
