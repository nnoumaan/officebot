const BotSchema = require("./botSchema")


const uploadCategory = async(req,res)=>{
    const data = await BotSchema.create(req.body)
    

    res.status(200).json({
        success:"true",
        message: "category upload successfully",
        data

    })
}

module.exports = uploadCategory