import { Module } from '@nestjs/common';
import { IssController } from './iss.controller';
import { IssService } from './iss.service';

import { CommonModule } from '../common/common.module'

@Module({
  imports: [CommonModule],
  controllers: [IssController],
  providers: [IssService],
  exports: [IssService]
})
export class IssModule {}
