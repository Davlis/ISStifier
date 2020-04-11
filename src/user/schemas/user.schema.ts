import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  deviceId: String,
  pushToken: String
});

export default UserSchema
