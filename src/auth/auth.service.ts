import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // sing up function
  async signup(dto: AuthDto) {
    const user = await this.prisma.user.create({
      data: { email: dto.email, password: dto.password },
    });

    return user;
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user || user.password !== dto.password) {
      throw new ForbiddenException('Invalid credentials');
    }

    return user;
  }
}
