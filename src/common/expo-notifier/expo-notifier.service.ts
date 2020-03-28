import { Injectable } from '@nestjs/common';
import { Expo, ExpoPushMessage, ExpoPushTicket } from 'expo-server-sdk'

import { IMessage } from './interfaces'

@Injectable()
export class ExpoNotifierService {
  expo: Expo

  constructor() {
    this.expo = new Expo()
  }

  // https://github.com/expo/expo-server-sdk-node
  async send(token: string, message: IMessage): Promise<string> {
    if (!Expo.isExpoPushToken(token)) {
      const message = `Push token ${token} is not a valid Expo push token`
      throw new Error(message)
    }

    // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications)
    const payload = [{
      to: token,
      sound: 'default',
      body: message.body,
      data: message.data
    }]

    let response: ExpoPushTicket[]
    try {
      response = await this.expo.sendPushNotificationsAsync(payload as ExpoPushMessage[])
    } catch (error) {
      // TODO: Logger
      console.log('Error sending message : ', error)
      throw error
    }

    // TODO: Logger
    console.log('Successfully sent message:', response);
    return JSON.stringify(response)
  }
}
