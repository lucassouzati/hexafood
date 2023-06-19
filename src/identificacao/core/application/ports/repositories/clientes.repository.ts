import { Cliente } from '../../../domain/clientes/entities/cliente.entity';

export const IClientesRepository = 'IClientesRepository';

export interface IClientesRepository {
  create(data: Cliente);

  findUnique(cpf: string): Promise<Cliente>;
}
