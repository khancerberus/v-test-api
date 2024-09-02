import { DataTypes, Model } from 'sequelize'
import { db } from '../utils/database';

export interface User extends Model {
    id: string,
    name: string,
    discordId: number
}

export const User = db.define<User>('User', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discordId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
