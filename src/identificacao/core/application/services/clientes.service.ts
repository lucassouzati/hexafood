import { Injectable, Inject } from '@nestjs/common';
import { Cliente } from '../../domain/entities/cliente.entity';
import { IClientesRepository } from '../ports/repositories/clientes.repository';
import { CpfAlreadyExistsException } from '../exceptions/cpf-ja-existente.exception';

@Injectable()
export class ClientesService {
  constructor(
    @Inject(IClientesRepository)
    private clientesRepository: IClientesRepository,
  ) {}

  async create(cliente: Cliente) {
    const result = this.clientesRepository.existsByCpf(cliente.cpf);
    if (await this.clientesRepository.existsByCpf(cliente.cpf))
      throw new CpfAlreadyExistsException();

    return this.clientesRepository.create(cliente);
  }

  findUnique(cpf: string) {
    return this.clientesRepository.findUnique(cpf);
  }
}
