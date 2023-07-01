import { Module, ValidationPipe } from '@nestjs/common';
import { ClientesController } from './adapter/driver/clientes.controller';
import { ClientesRepository } from './adapter/driven/infrastructure/clientes.repository';
import { IClientesRepository } from './core/application/ports/repositories/clientes.repository';
import { ClientesService } from './core/application/services/clientes.service';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { ValidationFilter } from './adapter/driven/infrastructure/filters/validation.filter';

@Module({
  controllers: [ClientesController],
  providers: [
    {
      provide: IClientesRepository,
      useClass: ClientesRepository,
    },
    {
      provide: APP_FILTER,
      useClass: ValidationFilter,
    },
    ClientesService,
  ],
})
export class IdentificacaoModule {}
