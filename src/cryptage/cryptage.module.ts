import { Module } from '@nestjs/common';
import { CryptageService } from './cryptage.service';

@Module({
    providers: [CryptageService],
    exports: [],
})
export class CryptageModule {}
