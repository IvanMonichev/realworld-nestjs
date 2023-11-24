import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TagModule } from 'src/tag/tag.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import ormConfig from '@app/orm-config'

@Module({
  imports: [TagModule, TypeOrmModule.forRoot(ormConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
