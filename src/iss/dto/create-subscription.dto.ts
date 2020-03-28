import { Type } from 'class-transformer';
import { IsString, IsObject, ValidateNested } from 'class-validator';

class MessageDto {
  @IsString()
  body: string

  @IsObject()
  data: object
}

export class CreateSubscriptionDto {
  @IsString()
  readonly token: string

  @IsString()
  readonly deviceId: string

  @ValidateNested()
  @Type(() => MessageDto)
  readonly message: MessageDto
}
