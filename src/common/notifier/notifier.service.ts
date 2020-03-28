import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as admin from 'firebase-admin';

@Injectable()
export class NotifierService {
  private SDKCredentials: any

  constructor(private configService: ConfigService) {
     this.SDKCredentials = {
      "type": this.configService.get('FIREBASE_TYPE'),
      "project_id": this.configService.get('FIREBASE_PROJECT_ID'),
      "private_key_id": this.configService.get('FIREBASE_PRIVATE_KEY_ID'),
      "private_key": this.configService.get('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
      "client_email": this.configService.get('FIREBASE_CLIENT_EMAIL'),
      "client_id": this.configService.get('FIREBASE_CLIENT_ID'),
      "auth_uri": this.configService.get('FIREBASE_AUTH_URI'),
      "token_uri": this.configService.get('FIREBASE_TOKEN_URI'),
      "auth_provider_x509_cert_url": this.configService.get('FIREBASE_AUTH_PROVIDER_X509_CERT_URL'),
      "client_x509_cert_url": this.configService.get('FIREBASE_CLIENT_X509_CERT_URL'),
    }

    admin.initializeApp({
      credential: admin.credential.cert(this.SDKCredentials)
    })
  }

  // https://firebase.google.com/docs/cloud-messaging/send-message
  async send(token: string, message: string) {
    const payload = {
      data: {
        message
      },
      token
    }

    let response: string
    try {
      response = await admin.messaging().send(payload)
    } catch (error) {
      // TODO: Logger
      console.log('Error sending message : ', error)
      throw error
    }

    // TODO: Logger
    console.log('Successfully sent message:', response);

    return response
  }
}
