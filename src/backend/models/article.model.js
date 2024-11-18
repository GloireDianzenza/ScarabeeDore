const {sequelize,DataTypes} = require("../init");

const Article = sequelize.define("Article",{
    id:{type:DataTypes.INTEGER,allowNull:false,primaryKey:true,autoIncrement:true},
    image:{type:DataTypes.STRING,allowNull:false},
    dateEnvoi:{type:DataTypes.DATE,allowNull:false},
    tpsLecture:{type:DataTypes.INTEGER,allowNull:false},
    categorie:{type:DataTypes.STRING,allowNull:false},
    titre:{type:DataTypes.STRING,allowNull:false,unique:true},
    contenu:{type:DataTypes.TEXT,allowNull:true,defaultValue:"lorem ipsum"}
});

module.exports = Article;