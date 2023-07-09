import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientesService } from '../../../identificacao/core/application/services/clientes.service';
import { ApiTags } from '@nestjs/swagger';
import { ClienteDto } from '../driven/infrastructure/dto/cliente.dto';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() cliente: ClienteDto) {
    return this.clientesService.create(cliente);
  }

  @Get(':cpf')
  async findByCPF(@Param('cpf') cpf: string): Promise<ClienteDto | null> {
    return await this.clientesService.findUnique(cpf);
  }
}
