let INSERT_USERS = "INSERT_USERS"
let SELECT_USERS_INFO = "SELECT_USERS_INFO"
let SELECT_USERS_USERNAME = "SELECT_USERS_USERNAME"
let SELECT_LIST = "SELECT_LIST"
let TELETE_USER = "TELETE_USER"
let UPDATA_USERNAME = "UPDATA_USERNAME"
let INSERT_SUBMIT_LIST = "INSERT_SUBMIT_LIST"
let SELECT_SUBMIT_USERNAME = "SELECT_SUBMIT_USERNAME"
let SELECT_SUBMIT_USERID = "SELECT_SUBMIT_USERID"
let SELECT_SUBMIT = "SELECT_SUBMIT"
let UPDATE_USERS_MONEY = "UPDATE_USERS_MONEY"
let SELECT_ALL_ID = "SELECT_ALL_ID"
let SELECT_SUBMIT_ID = "SELECT_SUBMIT_ID"

module.exports = {
    [INSERT_USERS]: "insert into userlist (id,userName,baseMoney,allMoney) values (?,?,?,?)",
    [SELECT_USERS_INFO]: "select id from userlist where id=?",
    [SELECT_ALL_ID]: "select * from userlist where id=?",
    [SELECT_USERS_USERNAME]: "select userName from userlist where userName=?",
    [SELECT_LIST]: "select * from userlist",
    [TELETE_USER]: "delete from userlist where id=?",
    [UPDATA_USERNAME]: "update userlist set userName=? where id=?",
    [INSERT_SUBMIT_LIST]: "insert into submitlist (userid,userName,money,time,remarks) values (?,?,?,?,?)",
    [SELECT_SUBMIT_USERNAME]: "select userName from submitlist where userName=?",
    [SELECT_SUBMIT_USERID]: "select * from userlist where id=?",
    [SELECT_SUBMIT]: "select * from submitlist",
    [SELECT_SUBMIT_ID]: "select * from submitlist where userid=?",
    [UPDATE_USERS_MONEY]: "update userlist set allMoney=? where id=?"
}