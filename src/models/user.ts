import { DataTypes, type Model } from 'sequelize'
import { sequelize } from '../lib/sequelize'

export interface User extends Model {
    id: string
    name: string
    discordId: number
}

export const User = sequelize.define<User>('User', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discordId: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
})
