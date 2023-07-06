import { PagamentoDto } from '../../../../adapter/driven/dto/pagamentoDto';
import { Pagamento } from '../../../../core/domain/entities/pagamento.entity';

export const PAGAMENTOS_REPOSITORY = 'IPagamentosRepository';
export interface IPagamentosRepository {
  createPagamento(data: Pagamento);

  findById(id: number): Promise<PagamentoDto>;

  findAll(): Promise<PagamentoDto[]>;

  remove(id: number): Promise<unknown>;
}
