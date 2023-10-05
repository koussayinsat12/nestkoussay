import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TdodModule } from './tdod/tdod.module';
import { CommonModuleModule } from './common-module/common-module.module';

@Module({
  imports: [TdodModule, CommonModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
