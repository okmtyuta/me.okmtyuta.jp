import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class IndexController {
  @Get()
  index(@Res() response: Response) {
    return response.sendFile('index.html');
  }
}
