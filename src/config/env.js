import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    PORT : process.env.PORT || 3000,
    DATABASE_URL : process.env.DATABASE_URL,
    API_URL : process.env.API_URL
}