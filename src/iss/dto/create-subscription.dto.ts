import { IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  readonly token: string

  @IsString()
  readonly message: string;
}
