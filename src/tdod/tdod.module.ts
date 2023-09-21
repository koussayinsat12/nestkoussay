import { Global, Module } from '@nestjs/common';
import { TdodController } from './tdod.controller';
@Global()
@Module({
  controllers: [TdodController]
})
export class TdodModule {}
