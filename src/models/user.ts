import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../lib/sequelize'

export interface User extends Model {
    name: string
    discordId: number
}

export const User = sequelize.define<User>('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discordId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
