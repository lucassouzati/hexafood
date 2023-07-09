import { forwardRef, Module } from '@nestjs/common';
import { PagamentosController } from './adapter/driver/pagamentos.controller';
import { PagamentosService } from './core/application/services/pagamentos.service';
import { PAGAMENTOS_REPOSITORY } from './core/application/ports/repositories/pagamentos.repository';
import { PagamentosRepository } from './adapter/driven/infrastructure/pagamentos.repository';
import {
  MERCADO_PAGO_CLIENT,
  MercadoPagoClient,
} from './core/application/ports/clients/mercadopago.client';
import { PedidoModule } from 'src/pedido/pedido.module';
import { ValidationFilter } from './adapter/driven/filters/validation.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [forwardRef(() => PedidoModule)],
  controllers: [PagamentosController],
  providers: [
    { provide: PAGAMENTOS_REPOSITORY, useClass: PagamentosRepository },
    { provide: MERCADO_PAGO_CLIENT, useClass: MercadoPagoClient },
    { provide: APP_FILTER, useClass: ValidationFilter },
    PagamentosService,
  ],
  exports: [PagamentosService], // Exportando o serviço para uso em outros módulos
})
export class PagamentoModule {}
