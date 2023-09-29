import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IndexModule } from './index/index.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'],
    }),
    UsersModule,
    IndexModule,
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
