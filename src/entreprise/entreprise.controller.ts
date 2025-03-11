import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EntrepriseService } from './entreprise.service';
import { ICreateEntreprise } from './entity/ICreateEntreprise';

@Controller()
export class EntrepriseController {
    constructor(private readonly entrepriseService: EntrepriseService) {}

    @MessagePattern('createEntreprise')
    public createEntreprise(
        dataEntreprise: ICreateEntreprise) {
        return this.entrepriseService.createEntreprise(dataEntreprise);
    }
}
