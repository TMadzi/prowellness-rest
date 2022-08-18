import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worldies!';
  }
  getBye(): string {
    return 'Bye!';
  }
}
