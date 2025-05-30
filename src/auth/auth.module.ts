import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController], // import controllers
  providers: [AuthService], // import services
})
export class AuthModule {}
