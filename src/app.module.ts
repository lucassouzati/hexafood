import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidoModule } from './pedido/pedido.module';
import { IdentificacaoModule } from './identificacao/identificacao.module';
import { PagamentoModule } from './pagamento/pagamento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IdentificacaoModule,
    PedidoModule,
    PagamentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
