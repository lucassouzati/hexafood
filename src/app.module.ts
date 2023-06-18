import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidosModule } from './core/domain/pedidos/pedidos.module';
import { ProdutosModule } from './core/domain/produtos/produtos.module';
import { IdentificacaoModule } from './identificacao/identificacao.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IdentificacaoModule,
    PedidosModule,
    ProdutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
