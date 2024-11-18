const express = require("express");
const app = express();
const cors = require("cors");
const {sequelize,sequelize2,DataTypes} = require("./init");
const userRoute = require("./routes/user.route");
const articleRoute = require("./routes/article.route");
const calendarRoute = require("./routes/calendar.route");
const avisRoute = require("./routes/avis.route");

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());
app.use(cors());
app.use("/api/users",userRoute);
app.use("/api/calendars",calendarRoute);
app.use("/api/articles",articleRoute);
app.use("/api/avis",avisRoute);

async function connect(){
    try {
        await sequelize.authenticate();
        await sequelize2.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connect()
sequelize.sync();
sequelize2.sync();

module.exports = app;