import { Controller, Get, Post} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly homeService: AuthService) {}

  @Post()
  signIn(): string {
    return this.homeService.getSignIn();
  }
  @Post()
  signUp(): string {
    return this.homeService.getSignUp();
  }

}
