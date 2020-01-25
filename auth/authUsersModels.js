const db = require("../database/dbConfig")

function insert(user) {
    return db('users')
        .insert(user)
        .then(([id]) => id)
}

module.exports = {
    insert
}