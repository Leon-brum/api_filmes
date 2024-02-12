import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQLHOST || 'localhost',
    port: Number(process.env.MYSQLPORT) || 3306,
    username: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'Splitpuch@1',
    database: "api_filmes",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
