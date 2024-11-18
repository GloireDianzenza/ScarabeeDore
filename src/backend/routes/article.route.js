const {getArticles,findArticle} = require("../controllers/article.controller");
const express = require("express");
const router = express.Router();

router.get("/",getArticles);
router.get("/:id",findArticle);

module.exports = router;