import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
// import logger from './logger';

let pool:any;
try {
    // ESTABLISHING THE DATABASE CONNECTION
    pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
} catch (error) {
   console.log('Error creating MySQL connection pool:', error);
   process.exit(1); // Exit the process if an error occurs
}

const promisePool = pool.promise();
export default promisePool;

