const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'testdb',
    port: process.env.DB_PORT || 5432
});

module.exports = pool;



/*
guess we have 50 files if we create connnecction for all those 50 files
then 50 thread of connection will create 
insted of this we create a pool whenever needed just import the pool and use without creaate an extra thread we can perform all task in a single thread
*/