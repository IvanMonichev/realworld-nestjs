import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('POSTGRES_HOST'), // 'localhost'
        port: configService.getOrThrow('POSTGRES_POST'), // 5432
        database: configService.getOrThrow('POSTGRES_DATABASE'), // 'realworld'
        username: configService.getOrThrow('POSTGRES_USERNAME'), // realworld
        password: configService.getOrThrow('POSTGRES_PASSWORD'), // password
        autoLoadEntities: true,
        synchronize: configService.getOrThrow('POSTGRES_SYNCHRONIZE'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
