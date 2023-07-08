import { CreatePagamentoDto } from '../../../../adapter/driven/dto/pagamentoDto';

export interface IPagamentosClientRepository<T = { id: bigint }> {
  createPagamento(data: CreatePagamentoDto): T;
}
