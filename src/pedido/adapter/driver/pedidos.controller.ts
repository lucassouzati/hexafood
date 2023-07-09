import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
  BadRequestException,
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

  @Get('/consultar_pedidos_pendentes')
  async consultarPedidosPendentes(): Promise<PedidoDTO[] | null> {
    return this.pedidosService.consultarPedidosPendentes();
  }

  @Patch(':id/iniciar_preparacao')
  async iniciarPreparacaoPedido(@Param('id') id: string) {
    const idAsNumber = parseInt(id, 10);
    if (isNaN(idAsNumber)) {
      throw new BadRequestException(`Invalid id: ${id}`);
    }
    return this.pedidosService.iniciarPreparacao(idAsNumber);
  }

  @Patch(':id/finalizar_preparacao')
  async finalizarPreparacaoPedido(@Param('id') id: string) {
    const idAsNumber = parseInt(id, 10);
    if (isNaN(idAsNumber)) {
      throw new BadRequestException(`Invalid id: ${id}`);
    }
    return this.pedidosService.finalizarPreparacao(idAsNumber);
  }

  @Patch(':id/finalizar_pedido')
  async finalizarPedido(@Param('id') id: string) {
    const idAsNumber = parseInt(id, 10);
    if (isNaN(idAsNumber)) {
      throw new BadRequestException(`Invalid id: ${id}`);
    }
    return this.pedidosService.finalizarPedido(idAsNumber);
  }

  @Get(':codigo_pedido')
  async consultarPedidoPorCodigo(@Param('codigo_pedido') codigo_pedido: string) {
    return this.pedidosService.consultarPedidoPorCodigo(codigo_pedido);
  }

}
