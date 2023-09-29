import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { AccountsService } from 'src/accounts/accounts.service';

@Injectable()
export class UsersService {
  prisma = new PrismaClient();
  constructor(private accountService: AccountsService) {}

  async findMay(): Promise<User[]> {
    const users = await this.prisma.user.findMany({});
    return users;
  }

  async findOne(username: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  }

  async create(username: string, password: string) {
    const account = await this.accountService.create(password);
    const user = await this.prisma.user.create({
      data: { username: username, accountId: account.id },
    });

    return user;
  }
}
