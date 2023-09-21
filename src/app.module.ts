import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TdodModule } from './tdod/tdod.module';

@Module({
  imports: [TdodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
