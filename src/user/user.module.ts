import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';

import { UserSchema } from './schemas'

export const Feature = 'User'

@Module({
  imports: [MongooseModule.forFeature([{ name: Feature, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
