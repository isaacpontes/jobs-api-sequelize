import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

interface CandidateAttributes {
    id: number
    name: string
    bio: string
    email: string
    phone: string
    openToWork: boolean
}

interface CandidateCreationAttributes extends Optional<CandidateAttributes, 'id'> { }

interface CandidateInstance extends Model<CandidateAttributes, CandidateCreationAttributes>, CandidateAttributes { }

const Candidate = sequelize.define<CandidateInstance, CandidateAttributes>(
    'candidates',
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
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        openToWork: DataTypes.BOOLEAN
    }
)

export { Candidate }