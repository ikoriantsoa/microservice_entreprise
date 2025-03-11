import { Module } from '@nestjs/common';
import { EntrepriseController } from './entreprise.controller';
import { EntrepriseService } from './entreprise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntrepriseEntity } from './entity/entreprise.entity';
import { CryptageService } from 'src/cryptage/cryptage.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntrepriseEntity])],
  controllers: [EntrepriseController],
  providers: [EntrepriseService, CryptageService]
})
export class EntrepriseModule {}
