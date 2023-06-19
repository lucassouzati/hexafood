import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientesService } from '../../../identificacao/core/application/services/clientes.service';
import { CreateClienteDto } from '../driven/dto/create-cliente.dto';
import { UpdateClienteDto } from '../driven/dto/update-cliente.dto';
import { Cliente } from '../../core/domain/clientes/entities/cliente.entity';

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
