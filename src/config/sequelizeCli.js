require('dotenv').config();

module.exports = {
    development: {
        dialect: 'postgres',
        url: process.env.DATABASE_URL
    },
    test: {
        dialect: 'postgres',
        url: process.env.TEST_DATABASE_URL
    },
    production: {
        dialect: 'postgres',
        url: process.env.DATABASE_URL,
        ssl: true,
        dialectOptions: {
            ssl: true
        }
    }
}