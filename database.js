const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "K4stekann",
    database: "wbhw",
    host: "localhost",
    port: "5432"
});
module.exports = pool;