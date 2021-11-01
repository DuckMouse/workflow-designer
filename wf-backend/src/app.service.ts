import { Injectable } from '@nestjs/common';
import { data } from './db/workflow.json';

@Injectable()
export class AppService {


  getMockedWorkflow() {
    return data;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
