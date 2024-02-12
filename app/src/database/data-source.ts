import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUserTable1707661078194 } from "./migration/1707661078194-CreateUserTable"
import { CreateMoviesTable1707750532755 } from "./migration/1707750532755-CreateMoviesTable"

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
    migrations: [CreateUserTable1707661078194, CreateMoviesTable1707750532755],
    subscribers: [],
})
