import { Module } from '@nestjs/common';
import { HomeModule } from "./home/home.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HomeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

