import { CreatePagamentoDto } from '../../../../adapter/driven/dto/pagamentoDto';

export interface IPagamentosClientRepository<T = { id: number }> {
  createPagamento(data: CreatePagamentoDto): T;
}
