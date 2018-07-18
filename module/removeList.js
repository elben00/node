// 删除用户

let { TELETE_USER, SELECT_LIST } = require("../mysql/index")
let { dele, select } = require("../mysql/sql");
async function deletes(id, res) {
    await dele(TELETE_USER, [id])
    select(SELECT_LIST, []).then(response => {
        res.send({ msg: "请求成功", code: "1", data: response })
    })
}
module.exports = (req, res, next) => {
    let { id } = req.query
    deletes(id, res)
}