import { Module } from '@nestjs/common';
import { ProdutosController } from './adapter/driver/produtos.controller';
import { ProdutosRepository } from './adapter/driven/infraestructure/produtos.repository';
import { IProdutosRepository } from './core/application/ports/repositories/produtos.repository';
import { ProdutosService } from './core/application/services/produtos.service';
import { CategoriasService } from './core/application/services/categorias.service';
import { CategoriasController } from './adapter/driver/categorias.controller';
import { ICategoriasRepository } from './core/application/ports/repositories/categorias.repository';
import { CategoriasRepository } from './adapter/driven/infraestructure/categorias.repository';
import { APP_FILTER } from '@nestjs/core';
import { ValidationFilter } from './adapter/driven/filters/validation.filter';
import { PedidosRepository } from './adapter/driven/infraestructure/pedidos.repository';
import { IPedidosRepository } from './core/application/ports/repositories/pedidos.repository';
import { PedidosService } from './core/application/services/pedidos.service';

@Module({
  controllers: [ProdutosController, CategoriasController],
  providers: [
    { provide: IProdutosRepository, useClass: ProdutosRepository },
    { provide: ICategoriasRepository, useClass: CategoriasRepository },
    { provide: IPedidosRepository, useClass: PedidosRepository },
    {
      provide: APP_FILTER,
      useClass: ValidationFilter,
    },
    ProdutosService,
    CategoriasService,
    PedidosService,
  ],
})
export class PedidoModule {}
