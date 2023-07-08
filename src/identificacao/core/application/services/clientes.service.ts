import { Injectable, Inject } from '@nestjs/common';
import { Cliente } from '../../domain/entities/cliente.entity';
import { IClientesRepository } from '../ports/repositories/clientes.repository';
import { CpfJaExistenteException } from '../exceptions/cpf-ja-existente.exception';
import { NomeInvalidoException } from '../exceptions/nome-invalido.exception';
import { CpfInvalidoException } from '../exceptions/cpf-invalido.exception';

@Injectable()
export class ClientesService {
  constructor(
    @Inject(IClientesRepository)
    private clientesRepository: IClientesRepository,
  ) {}

  async create(cliente: Cliente) {
    if (!cliente.nome || cliente.nome.trim() === '')
      throw new NomeInvalidoException();

    if (!cliente.cpf || cliente.cpf.length != 11)
      throw new CpfInvalidoException();

    if (cliente.cpf && (await this.clientesRepository.existsByCpf(cliente.cpf)))
      throw new CpfJaExistenteException();

    return this.clientesRepository.create(cliente);
  }

  findUnique(cpf: string) {
    return this.clientesRepository.findUnique(cpf);
  }

  findById(id: number) {
    return this.clientesRepository.findById(id);
  }
}
