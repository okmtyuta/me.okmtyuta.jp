import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AccountsService } from 'src/accounts/accounts.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private accountService: AccountsService,
    private prismaService: PrismaService,
  ) {}

  async findMay(): Promise<User[]> {
    const users = await this.prismaService.user.findMany({});
    return users;
  }

  async findOneById(id: number): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findOne(username: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        username: username,
      },
    });
  }

  async create(username: string, password: string) {
    const account = await this.accountService.create(password);
    const user = await this.prismaService.user.create({
      data: { username: username, accountId: account.id },
    });

    return user;
  }
}
