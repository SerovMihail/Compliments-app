import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('data/:id')
  getDataById(@Param('id') id: string): { value: string } {
    return { value: `${id} from server` };
  }

  @Get('data')
  getData(): { value: string } {
    return { value: `lorem` };
  }
}
