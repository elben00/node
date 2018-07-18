let { INSERT_SUBMIT_LIST, SELECT_USERS_INFO, SELECT_SUBMIT_USERNAME, SELECT_LIST, UPDATE_USERS_MONEY, SELECT_ALL_ID } = require("../mysql/index")
let { select, insert, upData } = require("../mysql/sql")
async function insertList(time, moneynew, remarks, name, id, res) {
    await insert(INSERT_SUBMIT_LIST, [id, name, moneynew, time, remarks])

    let userIdInfo = await select(SELECT_ALL_ID, [id])
    let { allMoney } = userIdInfo[0]
    let numMoney = (allMoney * 1) + (moneynew * 1)
    await upData(UPDATE_USERS_MONEY, [numMoney, id])

    res.send({ mag: "ok", code: "0", data: numMoney })
    next()
}
module.exports = (req, res, next) => {
    let { time, money, remarks, name, id } = req.query
    insertList(time, money, remarks, name, id, res)
}