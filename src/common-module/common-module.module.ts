import { Global, Module } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CommonModuleController } from './common-module.controller';
const currentDate = new Date();
const targetDate = new Date('2023-10-10');
const UUIDprovider={
    provide: 'UUID',
    useValue: uuidv4,
  }
const RandomProvider= {provide: 'RANDOM',
useFactory: (uuid) => {
if (currentDate.toDateString() !== targetDate.toDateString()) {
return uuid;
}
return 'None';
},
inject: ['UUID'],
}
@Global()
@Module({
    providers:[RandomProvider,UUIDprovider],
      exports:[RandomProvider,UUIDprovider],
      controllers: [CommonModuleController]
})
export class CommonModuleModule {}
