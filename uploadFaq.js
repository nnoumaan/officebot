const FaqSchema = require("./faqSchema")



const uploadFaq = async(req,res)=>{
    const data = await FaqSchema.create(req.body)


    res.status(200).json({
        success:true,
        message:"Faq upload successfully",
        data
    })
}

module.exports = uploadFaq