import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

// 'auth' inside the @Controller is global prefix route like /auth/signup or /auth/signin
@Controller('auth')
export class AuthController {
  // pass the authService in the param to use the functions in controller
  constructor(private authService: AuthService) {}

  // make
  @Post('signup')
  //@Body grabs the json object from request body and passes it to controller after that dto holds the body and validate with the AuthDto type
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin') // make sign in route
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
