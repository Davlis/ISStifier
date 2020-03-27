import { Test, TestingModule } from '@nestjs/testing';
import { IssController } from './iss.controller';

describe('Iss Controller', () => {
  let controller: IssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssController],
    }).compile();

    controller = module.get<IssController>(IssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
