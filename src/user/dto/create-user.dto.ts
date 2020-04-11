import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly deviceId: string

  @IsString()
  readonly pushToken: string
}
