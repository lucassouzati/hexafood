import { Module } from '@nestjs/common';
import { ClientesController } from './adapter/driver/clientes.controller';
import { ClientesRepository } from './adapter/driven/infrastructure/clientes.repository';
import { IClientesRepository } from './core/application/ports/repositories/clientes.repository'
import { ClientesService } from './core/application/services/clientes.service';

@Module({
  controllers: [ClientesController],
  providers: [
    {
      provide: IClientesRepository,
      useClass: ClientesRepository,
    },
    ClientesService
  ],
})
export class IdentificacaoModule {}
