import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { CommonModule } from './common/common.module';

import { ConfigSchema } from './config'
import { IssController } from './iss/iss.controller';
import { IssModule } from './iss/iss.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      isGlobal: true,
      validationSchema: ConfigSchema
    }),
    CommonModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),

    IssModule,

    UserModule
  ],
  controllers: [IssController],
  providers: [],
})
export class AppModule {}
