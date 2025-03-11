import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as dayjs from 'dayjs';

@Entity('entreprises')
export class EntrepriseEntity {
  @PrimaryGeneratedColumn('uuid')
  entreprise_id: string;

  @Column({ nullable: false })
  keycloak_id: string;

  @Column({ type: 'jsonb', nullable: false, unique: true })
  username: { iv: string; encryptedText: string };

  @Column({ type: 'jsonb', nullable: false, unique: true })
  email: { iv: string; encryptedText: string };

  @Column({ type: 'jsonb', nullable: false })
  nom_entreprise: { iv: string; encryptedText: string };

  @Column({ type: 'jsonb', nullable: false })
  secteur_activite: { iv: string; encryptedText: string };

  @Column({ type: 'jsonb', nullable: false })
  adresse: { iv: string; encryptedText: string };

  @Column({ type: 'jsonb', nullable: false })
  site_web: { iv: string; encryptedText: string };

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deletedAt: Date;

  get readableCreatedAt(): string {
    return dayjs(this.createdAt).format('DD/MM/YY HH:mm:ss');
  }

  get readableUpdatedAt(): string {
    return dayjs(this.updatedAt).format('DD/MM/YY HH:mm:ss');
  }

  get readableDeletedAt(): string {
    return dayjs(this.deletedAt).format('DD/MM/YY HH:mm:ss');
  }
}
