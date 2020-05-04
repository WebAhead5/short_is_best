
const { Pool } = require('pg');


//require('dotenv').config();
require('env2')('./config.env');

let DB_URL = process.env.DB_URL;

if (process.env.NODE_ENV === "test") {
    DB_URL = process.env.TEST_DB_URL;
}

if (!DB_URL) throw new Error("Enviroment variable DB_URL must be set");

//const params = url.parse(DB_URL);

const connectionString = DB_URL;
if (!connectionString) throw new Error('ENVIRMENT VARIABLE DB_URL MUST BE SET');

module.exports = new Pool({
    connectionString, ssl: !connectionString.includes('localhost')
})
