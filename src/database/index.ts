import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'onebitjobs',
    username: 'usuario',
    password: 'senha',
    define: {
        underscored: true
    }
})

export { sequelize }