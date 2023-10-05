import { Test, TestingModule } from '@nestjs/testing';
import { TdodService } from './tdod.service';

describe('TdodService', () => {
  let service: TdodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TdodService],
    }).compile();

    service = module.get<TdodService>(TdodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
