import { Cliente } from "src/identificacao/core/domain/clientes/entities/cliente.entity";

export const IClientesRepository = Symbol('IClientesRepository');

export interface IClientesRepository {
    create(data: Cliente);

    findUnique(cpf: string): Promise<Cliente>;
}