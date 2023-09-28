import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findMay();
    return users;
  }

  @Post("create")
  async create(@Body() body: { username: string; password: string }) {
    const user = await this.usersService.create(body.username, body.password);
    return user;
  }
}
