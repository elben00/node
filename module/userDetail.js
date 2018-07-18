let { SELECT_SUBMIT_ID } = require("../mysql/index")
let { select } = require("../mysql/sql")
module.exports = (req, res, next) => {
    let { id } = req.query
    select(SELECT_SUBMIT_ID, [id]).then(response => {
        console.log(response)
        res.send({ msg: "获取数据成功", code: "1", data: response })
    })
}