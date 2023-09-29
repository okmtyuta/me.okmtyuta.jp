import { Injectable } from '@nestjs/common';
import { PrismaClient, Account } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prismaService: PrismaService) {}

  async findOne(id: number) {
    const account = await this.prismaService.account.findUnique({
      where: {
        id: id,
      },
    });

    return account;
  }

  async create(password: string): Promise<Account> {
    const account = await this.prismaService.account.create({
      data: {
        password: password,
      },
    });
    return account;
  }
}
