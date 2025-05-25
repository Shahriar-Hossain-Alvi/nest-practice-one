import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  // login function
  signin(dto: AuthDto) {
    return {
      msg: 'Sign in successful',
      data: dto,
    };
  }

  // sing up function
  signup(dto: AuthDto) {
    return {
      msg: 'Sign up successful',
      data: dto,
    };
  }
}
