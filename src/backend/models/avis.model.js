const {sequelize,DataTypes} = require("../init");
const User = require("./user.model");

const Avis = sequelize.define("Avi",{
    id:{type:DataTypes.INTEGER,allowNull:false,primaryKey:true,autoIncrement:true},
    contenu:{type:DataTypes.TEXT,allowNull:false},
    etoiles:{type:DataTypes.INTEGER,allowNull:false,defaultValue:0,validate:{
        min:0,max:5
    }}
});
Avis.belongsTo(User);

module.exports = Avis;