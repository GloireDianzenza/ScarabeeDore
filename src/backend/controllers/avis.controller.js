const Avis = require("../models/avis.model");

async function getAvis(req,res,next) {
    try {
        const avis = await Avis.findAll();
        let result = [];
        for(const a of avis){
            result.push(a.dataValues);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error:error});
    }
}

async function addAvis(req,res,next) {
    try {
        const avis = await Avis.create({...req.body});
        res.status(201).json({message:"Avis added",id:avis.dataValues.id});
    } catch (error) {
        res.status(404).json({error:error});
    }
}

module.exports = {getAvis,addAvis};