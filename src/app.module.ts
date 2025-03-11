import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { CryptageModule } from './cryptage/cryptage.module';
import { EntrepriseEntity } from './entreprise/entity/entreprise.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.DB_HOST}`,
      database: `${process.env.DB_NAME}`,
      port: Number(process.env.DB_PORT),
      username: `${process.env.DB_USERNAME}`,
      password: `${process.env.DB_PASSWORD}`,
      entities: [EntrepriseEntity],
      synchronize: true,
    }),
    EntrepriseModule,
    CryptageModule,
  ],
})
export class AppModule {}
