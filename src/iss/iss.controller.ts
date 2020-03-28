import { Controller, Post, Body } from '@nestjs/common';
import { IssService } from './iss.service'

import { CreateSubscriptionDto } from './dto'

@Controller('iss')
export class IssController {
  constructor(public issService: IssService) {}

  @Post()
  async createSubscription(@Body() createSubscriptionDto: CreateSubscriptionDto): Promise<string> {
    const { token, deviceId, message } = createSubscriptionDto

    console.log('token', token)
    console.log('deviceId', deviceId)

    const response: string = await this.issService.createSubscription(token, message)

    return response
  }
}
