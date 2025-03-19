import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EntrepriseService } from './entreprise.service';
import { ICreateEntreprise } from './entity/ICreateEntreprise';
import { LoggerService } from 'src/logger/logger.service';

@Controller()
export class EntrepriseController {
  constructor(
    private readonly entrepriseService: EntrepriseService,
    private readonly logger: LoggerService,
  ) {
    this.logger.setContext(EntrepriseController.name);
  }

  @MessagePattern('createEntreprise')
  public createEntreprise(dataEntreprise: ICreateEntreprise) {
    this.logger.log(`Contrôleur qui permet de créer un compte entreprise`);
    return this.entrepriseService.createEntreprise(dataEntreprise);
  }
}
