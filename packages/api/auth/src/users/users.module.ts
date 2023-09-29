import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AccountsService } from 'src/accounts/accounts.service';

@Module({
  providers: [UsersService, AccountsService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
