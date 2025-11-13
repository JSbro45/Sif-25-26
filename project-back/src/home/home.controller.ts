import { Controller, Get, Post } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private  homeService: HomeService) {}

  @Post()
  getHello(): string {
    return "Hi Bitch!";
  }
}
