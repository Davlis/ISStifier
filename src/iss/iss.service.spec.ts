import { Test, TestingModule } from '@nestjs/testing';
import { IssService } from './iss.service';

describe('IssService', () => {
  let service: IssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssService],
    }).compile();

    service = module.get<IssService>(IssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
