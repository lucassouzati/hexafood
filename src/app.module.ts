import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './core/domain/clientes/clientes.module';
import { PedidosModule } from './core/domain/pedidos/pedidos.module';
import { ProdutosModule } from './core/domain/produtos/produtos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientesModule,
    PedidosModule,
    ProdutosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
