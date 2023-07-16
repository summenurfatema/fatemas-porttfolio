const { studentCollection,client } = require("../app")

exports.getStudent= async (req, res) => {
    const query = {}
    const result = await studentCollection.find(query).toArray()
    res.send(result)
}