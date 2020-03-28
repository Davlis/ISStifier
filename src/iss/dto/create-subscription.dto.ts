import { IsString, IsObject } from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  readonly token: string

  @IsString()
  readonly deviceId: string

  @IsObject()
  readonly message: object;
}
