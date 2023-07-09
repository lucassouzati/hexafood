import { Injectable, Inject } from '@nestjs/common';
import { Cliente } from '../../domain/entities/cliente.entity';
import { IClientesRepository } from '../ports/repositories/clientes.repository';
import { ClienteException } from '../exceptions/cliente.exception';

@Injectable()
export class ClientesService {
  constructor(
    @Inject(IClientesRepository)
    private clientesRepository: IClientesRepository,
  ) {}

  async create(cliente: Cliente) {
    if (!cliente.nome || cliente.nome.trim() === '')
      throw new ClienteException('O nome não pode ser vazio');

    if (!cliente.cpf || cliente.cpf.length != 11)
      throw new ClienteException('CPF precisa ter exatamente 11 caracteres');

    if (cliente.cpf && (await this.clientesRepository.existsByCpf(cliente.cpf)))
      throw new ClienteException('CPF já cadastrado.');

    return this.clientesRepository.create(cliente);
  }

  async findUnique(cpf: string) {
    const cliente = await this.clientesRepository.findUnique(cpf);
    if(!cliente){
      throw new ClienteException('Cpf não encontrado');
    }
    return this.clientesRepository.findUnique(cpf);
  }

  findById(id: number) {
    return this.clientesRepository.findById(id);
  }
}
