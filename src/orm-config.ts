import { ConnectionOptions } from 'typeorm'

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'realworld',
  password: 'root',
  database: 'realworld',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
}

export default config
