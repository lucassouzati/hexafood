import { Injectable, Inject } from '@nestjs/common';
import { Cliente } from '../../domain/clientes/entities/cliente.entity';
import { IClientesRepository } from '../ports/repositories/clientes.repository';

@Injectable()
export class ClientesService {
  constructor(
    @Inject(IClientesRepository)
    private clientesRepository: IClientesRepository
    ) {}

  create(cliente: Cliente) {
    return this.clientesRepository.create(cliente);
  }

  findUnique(cpf: string) {
    return this.clientesRepository.findUnique(cpf);
  }
}
