let mysql = require("mysql")


function getConnect() {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: "3306",
        user: 'root',
        password: 'root',
        database: 'list'
    });
    return connection
}

let select = (sql, query) => {
    let connect = getConnect()
    return new Promise((resolve, reject) => {
        connect.query(sql, query, function(err, info) {
            if (!err) {
                resolve(info)
            } else {
                reject(err)
            }
            connect.end()
        })
    })
}

let insert = (sql, query) => {
    let connect = getConnect()
    return new Promise((resolve, reject) => {
        connect.query(sql, query, function(err, info) {
            connect.end()
            if (!err) {
                resolve(info)
            } else {
                reject("失败")
            }
        })
    })
}

let dele = (sql, query) => {
    let connect = getConnect()
    return new Promise((resolve, reject) => {
        connect.query(sql, query, function(err, info) {
            if (!err) {
                resolve(info)
            } else {
                reject("失败")
            }
            connect.end()
        })
    })
}

let upData = (sql, query) => {
    let connect = getConnect()
    return new Promise((resolve, reject) => {
        connect.query(sql, query, function(err, info) {
            if (!err) {
                resolve(info)
            } else {
                reject("失败")
            }
            connect.end()
        })
    })
}
module.exports = {
    select,
    insert,
    dele,
    upData
}