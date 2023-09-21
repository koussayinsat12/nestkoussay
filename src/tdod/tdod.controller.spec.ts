import { Test, TestingModule } from '@nestjs/testing';
import { TdodController } from './tdod.controller';

describe('TdodController', () => {
  let controller: TdodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TdodController],
    }).compile();

    controller = module.get<TdodController>(TdodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
