import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQLHOST || '127.0.0.1',
    port: Number(process.env.MYSQLPORT) || 3306,
    username: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'l24157145',
    database: "api_filmes",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
