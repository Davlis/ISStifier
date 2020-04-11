import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces';
import { CreateUserDto } from './dto'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserPayload: CreateUserDto) { 
    const { deviceId } = createUserPayload
    const payload = { ...createUserPayload }

    return this.userModel.updateOne(
      { deviceId },
      payload,
      { upsert: true, setDefaultsOnInsert: true }
    )
  }
}
