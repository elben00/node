// 修改用户
let { upData, select } = require("../mysql/sql")
let { UPDATA_USERNAME, SELECT_LIST } = require("../mysql/index")

async function update(id, name, res) {
    await upData(UPDATA_USERNAME, [name, id])
    select(SELECT_LIST, []).then(response => {
        res.send({ msg: "请求成功", code: "1", data: response })
    })
}
module.exports = (req, res, next) => {
    let { modifyId, userN } = JSON.parse(req.query.id)
    update(modifyId, userN, res)
}