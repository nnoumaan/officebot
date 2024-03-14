const FaqModel = require("./faqSchema.js");
const searchQuery = async (req, res) => {
  const myquery = [
    {
      $search: {
        index: "myname",
        text: {
          query: req.body.query,
          path: ["Q1", "A1"],
        },
      }


    },{
      '$limit': 1
  }
  ];
  const result = await FaqModel.aggregate(myquery);
  

  res.status(200).json({
    success: true,
    message: "Query Recieved",
    data:result
  });
};

module.exports = searchQuery;
