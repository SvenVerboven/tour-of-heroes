import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor(private logger: LoggerService) {}

  add(message: string) {
    this.logger.log(message);
    this.messages.push(message);
  }

  clear() {
    this.logger.log('Messages cleared');
    this.messages = [];
  }
}
