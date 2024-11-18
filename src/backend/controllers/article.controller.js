const Article = require("../models/article.model");

async function getArticles(req,res,next) {
    try {
        const articles = await Article.findAll();
        let result = [];
        for(const a of articles){
            result.push(a.dataValues);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error:error});
    }
}

async function findArticle(req,res,next) {
    try {
        const article = await Article.findByPk(req.params.id);
        if(article === null)throw "Article introuvable";
        res.status(200).json(article.dataValues);
    } catch (error) {
        res.status(404).json({error:error});
    }
}

module.exports = {getArticles,findArticle};