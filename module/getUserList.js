// 得到所有用户信息

let { select } = require("../mysql/sql")
let { SELECT_LIST } = require("../mysql/index")

module.exports = (req, res, next) => {
    select(SELECT_LIST, []).then(response => {
        res.send({ msg: "请求成功", code: "1", data: response })
    })
}