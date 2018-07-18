// 添加用户

let { select, insert } = require("../mysql/sql")
let { INSERT_USERS, SELECT_USERS_INFO, SELECT_USERS_USERNAME, SELECT_LIST } = require("../mysql/index")
async function insertList(userID, userName, money, res) {
    let userIdInfo = await select(SELECT_USERS_INFO, [userID])
    if (userIdInfo.length === 0) {
        let userNameInfo = await select(SELECT_USERS_USERNAME, [userName])
        if (userNameInfo.length === 0) {
            await insert(INSERT_USERS, [userID, userName, money, 0])
            let list = await select(SELECT_LIST)
            res.send({ mag: "添加成功", code: "1", data: list })
        } else {
            res.send({ mag: "用户名重复", code: "0" })
        }
    } else {
        res.send({ mag: "id重复", code: "0" })
    }
    next()
}
module.exports = (req, res, next) => {
    let { userID, userName, money } = req.query
    insertList(userID, userName, money, res, next)
}