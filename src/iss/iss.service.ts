import { Injectable } from '@nestjs/common';
import { NotifierService } from '../common/notifier/notifier.service';

@Injectable()
export class IssService {
  constructor(public notifierService: NotifierService) {}

  async createSubscription(token, message) {
    return this.notifierService.send(token, message)
  }
}
