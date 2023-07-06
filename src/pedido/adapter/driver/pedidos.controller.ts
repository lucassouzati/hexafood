import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { PedidosService } from '../../core/application/services/pedidos.service';
import { Produto } from '../../core/domain/entities/produto.entity';

import { ApiTags, ApiBody } from '@nestjs/swagger';
import { PedidoDTO } from '../driven/dto/pedido.dto';

@ApiTags('pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @ApiBody({ type: PedidoDTO })
  createManyProdutos(@Body() pedido: PedidoDTO) {
    return this.pedidosService.createNewPedido(pedido);
  }

  @Get()
  async findAll(): Promise<PedidoDTO[] | null> {
    return this.pedidosService.listAllPedidos();
  }
}
