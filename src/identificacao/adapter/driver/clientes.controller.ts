import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientesService } from '../../../identificacao/core/application/services/clientes.service';
import { Cliente } from '../../core/domain/entities/cliente.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() cliente: Cliente) {
    return this.clientesService.create(cliente);
  }

  @Get(':cpf')
  async findByCPF(@Param('cpf') cpf: string): Promise<Cliente | null> {
    return await this.clientesService.findUnique(cpf);
  }
}
