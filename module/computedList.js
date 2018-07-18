let { SELECT_SUBMIT, SELECT_LIST } = require("../mysql/index")
let { select } = require("../mysql/sql")
async function insertList(res) {
    console.log(SELECT_LIST)
    let list = await select(SELECT_LIST)
    res.send({ mag: "ok", code: "0", data: list })
}
module.exports = (req, res, next) => {
    insertList(res)
}