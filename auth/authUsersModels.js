const db = require("../database/dbConfig")

function insert(user) {
    return db('users')
        .insert(user)
        .then(([id]) => id)
}

function findByUsername(username){
    return db('users')
        .where({ username }).first()
}

module.exports = {
    insert,
    findByUsername
}