import { Pagamento } from "src/pagamento/core/domain/entities/pagamento.entity";

export const PAGAMENTOS_REPOSITORY = 'IPagamentosRepository'
export interface IPagamentosRepository {
  // TODO fix type
  createPagamento(data: Pagamento);

  findById(id: number): Promise<Pagamento>;

  remove(id: number): Promise<unknown>;
}
