const app = require("./app.js");
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4000


const connectDB = async()=>{

    return mongoose.connect(`${process.env.MONGO_URI}bot-DB`)}

connectDB().then(con=>{
    // console.log("database Connected Successfully");
})


app.listen(PORT, () => {
  // console.log("server started",PORT);
});
