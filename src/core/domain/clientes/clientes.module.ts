import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { ClientesRepository } from './clientes.repository';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService, ClientesRepository]
})
export class ClientesModule {}
