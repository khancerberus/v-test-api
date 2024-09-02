import { Sequelize } from 'sequelize';

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';

export const db = new Sequelize(DATABASE_URL);