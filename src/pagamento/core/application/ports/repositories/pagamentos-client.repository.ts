import { CreatePagamentoDto } from "../../../../core/domain/entities/pagamento.entity";

export interface IPagamentosClientRepository<T = { id: number }> {

  createPagamento(data: CreatePagamentoDto): T;

}
