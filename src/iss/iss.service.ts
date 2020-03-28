import { Injectable } from '@nestjs/common';
import { ExpoNotifierService as NotifierService } from '../common/expo-notifier/expo-notifier.service';

@Injectable()
export class IssService {
  constructor(public notifierService: NotifierService) {}

  async createSubscription(token, message) {
    return this.notifierService.send(token, message)
  }
}
