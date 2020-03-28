import { Test, TestingModule } from '@nestjs/testing';
import { ExpoNotifierService } from './expo-notifier.service';

describe('ExpoNotifierService', () => {
  let service: ExpoNotifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpoNotifierService],
    }).compile();

    service = module.get<ExpoNotifierService>(ExpoNotifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
