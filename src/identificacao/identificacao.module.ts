import { Module } from '@nestjs/common';
import { ClientesService } from 'src/identificacao/core/application/services/clientes.service';
import { ClientesController } from 'src/identificacao/adapter/driver/clientes.controller';
import { ClientesRepository } from 'src/identificacao/adapter/driven/infrastructure/clientes.repository';
import { IClientesRepository } from './core/application/ports/repositories/clientes.repository';

@Module({
  controllers: [ClientesController],
  providers: [
    ClientesService,
    {
      provide: IClientesRepository,
      useClass: ClientesRepository,
    },
  ],
})
export class IdentificacaoModule {}
