import { Sequelize } from 'sequelize'

export const database = () => {
    const dbUrl = process.env.DATABASE_URL || ''

    const sequelize = new Sequelize(dbUrl, {
        define: {
            underscored: true,
        },
        ssl: process.env.NODE_ENV === 'production',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })

    return sequelize
}