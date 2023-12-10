import { DataSource } from 'typeorm'
import { join } from 'path'

export const connectionSource = new DataSource({
  type: 'postgres',
  host: process.env['POSTGRES_HOST'],
  port: Number(process.env['POSTGRES_PORT']),
  username: process.env['POSTGRES_USERNAME'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DATABASE'],
  logging: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [join(__dirname, '/../../', 'database/migrations/**/*{.ts,.js}')],
  synchronize: false,
  migrationsTableName: 'typeorm_migrations',
  migrationsRun: false,
})
