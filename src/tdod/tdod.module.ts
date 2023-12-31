import { Global, Module } from '@nestjs/common';
import { TdodController } from './tdod.controller';
import { TdodService } from './tdod.service';
@Global()
@Module({
  controllers: [TdodController],
  providers: [TdodService],
  exports:[TdodService]
})
export class TdodModule {}
