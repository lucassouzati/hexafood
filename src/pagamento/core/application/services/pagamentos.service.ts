import { Inject, Injectable } from "@nestjs/common";
import { IPagamentosRepository, PAGAMENTOS_REPOSITORY } from "../ports/repositories/pagamentos.repository";

import { CreatePagamentoDto, PagamentoDto } from "../../domain/entities/pagamento.entity";
import { MERCADO_PAGO_CLIENT } from "../ports/clients/mercadopago.client";
import { IPagamentosClientRepository } from "../ports/repositories/pagamentos-client.repository";

@Injectable()
export class PagamentosService implements IPagamentosRepository {

  constructor(
    @Inject(PAGAMENTOS_REPOSITORY)
    private pagamentosRepository: IPagamentosRepository,

    @Inject(MERCADO_PAGO_CLIENT)
    private pagamentosClient: IPagamentosClientRepository
  ) {
    this.pagamentosClient = pagamentosClient
    this.pagamentosRepository = pagamentosRepository
  }

  async createPagamento(data: CreatePagamentoDto) {

    const description = `Hexafood - pedido ${data.id_pedido} - MercadoPago`

    const { id } = await this.pagamentosClient.createPagamento(data)

    return this.pagamentosRepository.createPagamento({
      valor: data.valor,
      id_pedido: data.id_pedido,
      id_transacao: id,
      plataforma: 'mercadopago',
      descricao: description
    })
  }


  findAll(): Promise<PagamentoDto[]> {
    return this.pagamentosRepository.findAll()
  }

  findById(id: number): Promise<PagamentoDto> {
    return this.pagamentosRepository.findById(id)
  }
  remove(id: number) {
    return this.pagamentosRepository.remove(id)
  }

}
