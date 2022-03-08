import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

interface JobAttributes {
    id: number
    title: string
    description: string
    limitDate: Date
    companyId: number
}

interface JobCreationAttributes extends Optional<JobAttributes, 'id'> { }

interface JobInstance extends Model<JobAttributes, JobCreationAttributes>, JobAttributes { }

const Job = sequelize.define<JobInstance, JobAttributes>(
    'jobs',
    {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: DataTypes.TEXT,
        limitDate: DataTypes.DATE,
        companyId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'companies',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        }
    }
)

export { Job }