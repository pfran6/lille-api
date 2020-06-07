import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcsModule } from './parcs/parcs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'francois',
      password: 'Admin12345',
      database: 'lille',
      autoLoadEntities: true,
      synchronize: true
    }),
    ParcsModule
  ]
})
export class AppModule {}
