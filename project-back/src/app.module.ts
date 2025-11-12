import { Module } from '@nestjs/common';
import { HomeModule } from "./home-page/home.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

