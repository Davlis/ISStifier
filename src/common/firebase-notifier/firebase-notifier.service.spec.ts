import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseNotifierService } from './firebase-notifier.service';

describe('FirebaseNotifierService', () => {
  let service: FirebaseNotifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirebaseNotifierService],
    }).compile();

    service = module.get<FirebaseNotifierService>(FirebaseNotifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
