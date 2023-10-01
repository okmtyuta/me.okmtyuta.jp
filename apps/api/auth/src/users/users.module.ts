import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AccountsService } from 'src/accounts/accounts.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UsersService, AccountsService, PrismaService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
