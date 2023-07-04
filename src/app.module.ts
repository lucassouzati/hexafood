import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PedidoModule } from './pedido/pedido.module';
import { IdentificacaoModule } from './identificacao/identificacao.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IdentificacaoModule,
    PedidoModule,
  ],
})
export class AppModule {}
