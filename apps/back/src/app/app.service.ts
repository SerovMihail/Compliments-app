import { Injectable } from '@nestjs/common';
import { todos } from '@app/todos';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: todos() };
  }
}
