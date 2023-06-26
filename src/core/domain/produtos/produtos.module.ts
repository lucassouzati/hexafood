import { Module } from '@nestjs/common';
import { ProdutosService } from './core/application/services/produtos.service';
import { ProdutosController } from './adapter/driver/produtos.controller';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
