const crypto = require("crypto");

const knex = require("knex")({
    client: "better-sqlite3",
    connection: { filename: "./database.sqlite" },
    useNullAsDefault: true,
});

// TODO: Add user manager functions

module.exports = {
    async createUser(username, password) {
        const passwordData = getPasswordHash(password);

        return knex("users")
            .where({
                username: username
            })
            .then(function ([user]) {
                if (user) {
                    return {success: false, reason: "username"}
                } else {
                    return knex("user")
                        .insert({
                            username: username,
                            password_hash: passwordData.hash,
                            password_salt: passwordData.salt,
                        })
                        .then(function () {
                            console.log(`[NEW] User: ${username}`);
                            return {success: true, reason: ""}
                        });
                }
            });
    },

};

function getPasswordHash(password) {
    const salt = crypto.randomBytes(4).toString("hex");
    const hash = crypto.createHmac("sha512", salt).update(password).digest("hex");

    return {
        hash: hash,
        salt: salt,
    }
}
