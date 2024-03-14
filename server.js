const app = require("./app.js");
const mongoose = require('mongoose')

const connectDB = async()=>{

    return mongoose.connect(`${process.env.MONGO_URI}bot-DB`)}

connectDB().then(con=>{
    console.log("database Connected Successfully");
})


app.listen(process.env.PORT, () => {
  console.log("server started",process.env.PORT);
});
