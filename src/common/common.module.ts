import { Module } from '@nestjs/common';
import { FirebaseNotifierService } from './firebase-notifier/firebase-notifier.service';
import { ExpoNotifierService } from './expo-notifier/expo-notifier.service';

@Module({
  providers: [FirebaseNotifierService, ExpoNotifierService],
  exports: [FirebaseNotifierService, ExpoNotifierService],
})
export class CommonModule {}
