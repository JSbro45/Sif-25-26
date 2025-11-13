import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  getSignIn(): string {
    return 'Hello Motherfucker! Sign in!';
  }

  getSignUp(): string {
    return 'Hello Motherfucker! Sign up!'
  }
  
}
