import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

interface CompanyAttributes {
    id: number
    name: string
    bio: string
    website: string
    email: string
}

interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'> { }

interface CompanyInstance extends Model<CompanyAttributes, CompanyCreationAttributes>, CompanyAttributes { }

const Company = sequelize.define<CompanyInstance, CompanyAttributes>(
    'companies',
    {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        bio: DataTypes.TEXT,
        website: DataTypes.STRING,
        email: DataTypes.STRING
    }
)

export { Company }