import { Test, TestingModule } from '@nestjs/testing';
import { CommonModuleController } from './common-module.controller';

describe('CommonModuleController', () => {
  let controller: CommonModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonModuleController],
    }).compile();

    controller = module.get<CommonModuleController>(CommonModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
