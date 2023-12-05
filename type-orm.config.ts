import { DataSource } from 'typeorm'
import { config } from 'dotenv'
import { ConfigService } from '@nestjs/config'
import { TagEntity } from '@app/tag/tag.entity'

config()

const configService = new ConfigService()

export default new DataSource({
  type: 'postgres',
  host: configService.getOrThrow('POSTGRES_HOST'), // 'localhost'
  port: configService.getOrThrow('POSTGRES_POST'), // 5432
  database: configService.getOrThrow('POSTGRES_DATABASE'), // 'realworld'
  username: configService.getOrThrow('POSTGRES_USERNAME'), // realworld
  password: configService.getOrThrow('POSTGRES_PASSWORD'), // password
  synchronize: configService.getOrThrow('POSTGRES_SYNCHRONIZE'),
  migrations: ['migrations/**'],
  entities: [TagEntity],
})
