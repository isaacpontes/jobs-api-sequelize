import { database } from '../database'
import { DataTypes, Model } from 'sequelize'

interface ComapnyInstance extends Model {
    id: number
    name: string
    bio: string
    website: string
    email: string
}

const Company = database().define<ComapnyInstance>(
    'companies',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: DataTypes.TEXT,
        website: DataTypes.STRING,
        email: DataTypes.STRING
    }
)

export { Company }