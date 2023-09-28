import { Injectable } from '@nestjs/common';
import { PrismaClient, Account } from '@prisma/client';

@Injectable()
export class AccountsService {
  prisma = new PrismaClient();

  async findOne(id: number) {
    const account = await this.prisma.account.findUnique({
      where: {
        id: id,
      },
    });

    return account;
  }

  async create(password: string): Promise<Account> {
    const account = await this.prisma.account.create({
      data: {
        password: password,
      },
    });
    return account;
  }
}
