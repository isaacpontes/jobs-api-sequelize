import { Sequelize } from 'sequelize'

export const database = () => {
    const dbUrl = process.env.DATABASE_URL || ''

    const sequelize = new Sequelize(dbUrl, {
        define: {
            underscored: true
        }
    })

    return sequelize
}