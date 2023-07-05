import { Inject, Injectable } from "@nestjs/common";
import { IPagamentosRepository, PAGAMENTOS_REPOSITORY } from "../../ports/repositories/pagamentos.repository";

import mercadopago from '../../../../../mocks/mercadoPagoMockService'
import { CreatePagamentoDto, PagamentoDto } from "../../../../adapter/driven/dto/pagamentoDto";

export const MERCADO_PAGO_CLIENT = 'MercadoPagoClient'

@Injectable()
export class MercadoPagoClient implements IPagamentosRepository {

  constructor(
    @Inject(PAGAMENTOS_REPOSITORY)
    private pagamentosRepository: IPagamentosRepository
  ) {
    mercadopago.configurations.setAccessToken('some-access-token')
  }

  async createPagamento(data: CreatePagamentoDto) {

    const description = `Hexafood - pedido ${data.id_pedido} - MercadoPago`

    const mpTransaction = await mercadopago.payment.create({
      transaction_amount: data.valor,
      description,
      payment_method_id: 'pix',
      // TODO improve payer logic, check for customer data
      // payer: {
      //   email: data.cliente.email,
      //   first_name: data.cliente.nome,
      //   last_name: data.cliente.nome,
      //   identification: {
      //     type: 'CPF',
      //     number: data.cliente.cpf
      //   }
      // }
    })

    return this.pagamentosRepository.createPagamento({
      valor: data.valor,
      id_pedido: data.id_pedido,
      id_transacao: mpTransaction.id,
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
