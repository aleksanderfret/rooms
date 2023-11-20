import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Room } from './room.entity';
import { RoomsController } from './rooms.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Room],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Room]),
  ],
  controllers: [AppController, RoomsController],
  providers: [AppService],
})
export class AppModule {}
