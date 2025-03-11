import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntrepriseEntity } from './entity/entreprise.entity';
import { Repository } from 'typeorm';
import { CryptageService } from 'src/cryptage/cryptage.service';
import { ICreateEntreprise } from './entity/ICreateEntreprise';

@Injectable()
export class EntrepriseService {
  constructor(
    @InjectRepository(EntrepriseEntity)
    private readonly entrepriseRepository: Repository<EntrepriseEntity>,
    private readonly cryptageService: CryptageService,
  ) {}

  public async createEntreprise(newEntreprise: ICreateEntreprise) {
    const cryptEntreprise = {
      keycloak_id: newEntreprise.keycloak_id,
      username: this.cryptageService.encrypt(newEntreprise.username),
      email: this.cryptageService.encrypt(newEntreprise.email),
      nom_entreprise: this.cryptageService.encrypt(
        newEntreprise.nom_entreprise,
      ),
      secteur_activite: this.cryptageService.encrypt(
        newEntreprise.secteur_activite,
      ),
      adresse: this.cryptageService.encrypt(newEntreprise.adresse),
      site_web: this.cryptageService.encrypt(newEntreprise.site_web),
    };

    const entreprise = this.entrepriseRepository.create(cryptEntreprise);
    return await this.entrepriseRepository.save(entreprise);
  }
}
