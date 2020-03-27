import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';

import { ConfigSchema } from './config'
import { IssController } from './iss/iss.controller';
import { IssModule } from './iss/iss.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      isGlobal: true,
      validationSchema: ConfigSchema
    }),
    CommonModule,

    IssModule
  ],
  controllers: [IssController],
  providers: [],
})
export class AppModule {}
