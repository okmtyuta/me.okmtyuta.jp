import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findMany() {
    const users = await this.usersService.findMay();
    return users;
  }

  @Get(':id')
  async findOne(@Param() params: { id: string }) {
    const user = await this.usersService.findOneById(Number(params.id));
    return user;
  }

  @Post('create')
  async create(@Body() body: { username: string; password: string }) {
    const user = await this.usersService.create(body.username, body.password);
    return user;
  }
}
