import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { TagEntity } from '@app/tag/tag.entity'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('POSTGRES_HOST'), // 'localhost'
        port: configService.getOrThrow('POSTGRES_PORT'), // 5432
        database: configService.getOrThrow('POSTGRES_DATABASE'), // 'realworld'
        username: configService.getOrThrow('POSTGRES_USERNAME'), // realworld
        password: configService.getOrThrow('POSTGRES_PASSWORD'), // password
        entities: [TagEntity],
        synchronize: configService.getOrThrow('POSTGRES_SYNCHRONIZE'),
        migrationsTableName: 'typeorm_migrations',
        migrationsRun: false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
