import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  // sing up function
  async signup(email: string, password: string) {
    const user = await this.prisma.user.create({
      data: { email, password },
    });

    return user;
  }
}
