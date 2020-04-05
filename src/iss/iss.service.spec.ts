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
    // Arrange
    // Act
    // Assert
    expect(service).toBeDefined();
  });

  it('should return proper response', async () => {
    // Arrange
    const token = 'some_nice_toke_here'
    const message: any = { body: 'Body', title: 'Title' }

    // Act
    const response = await service.createSubscription(token, message)

    // Arrage
    expect(response).toBeDefined()
  })
});
