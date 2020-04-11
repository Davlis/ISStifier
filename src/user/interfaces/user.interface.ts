import { Document } from 'mongoose';

export interface User extends Document {
  deviceId: string
  pushToken: string
}
