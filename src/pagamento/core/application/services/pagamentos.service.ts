import { Inject, Injectable } from '@nestjs/common';
import {
  IPagamentosRepository,
  PAGAMENTOS_REPOSITORY,
} from '../ports/repositories/pagamentos.repository';

import {
  CreatePagamentoDto,
  PagamentoDto,
} from '../../../adapter/driven/dto/pagamentoDto';
import { MERCADO_PAGO_CLIENT } from '../ports/clients/mercadopago.client';
import { IPagamentosClientRepository } from '../ports/repositories/pagamentos-client.repository';
import { Pagamento } from '../../domain/entities/pagamento.entity';

@Injectable()
export class PagamentosService {
  constructor(
    @Inject(PAGAMENTOS_REPOSITORY)
    private pagamentosRepository: IPagamentosRepository,

    @Inject(MERCADO_PAGO_CLIENT)
    private pagamentosClient: IPagamentosClientRepository,
  ) {
    this.pagamentosClient = pagamentosClient;
    this.pagamentosRepository = pagamentosRepository;
  }

  async createPagamento(data: CreatePagamentoDto) {
    const description = `Hexafood - pedido ${data.id_pedido} - MercadoPago`;

    if (!data.cliente) {
      data.cliente = {
        id: null,
        nome: 'Anônimo',
        email: 'cliente@anonimo.com',
        cpf: '00000000000',
      };
    }

    const { id } = await this.pagamentosClient.createPagamento(data);

    return this.pagamentosRepository.createPagamento({
      id_cliente: data.cliente.id,
      valor: data.valor,
      id_pedido: data.id_pedido,
      id_transacao: id,
      plataforma: 'mercadopago',
      descricao: description,
    });
  }

  async findAll(): Promise<any[]> {
    const pagamentos = await this.pagamentosRepository.findAll();
    return pagamentos.map((pagamento) => ({
      id: pagamento.id,
      id_cliente: pagamento.id_cliente,
      id_pedido: pagamento.id_pedido,
      id_transacao: pagamento.id_transacao.toString(),
      descricao: pagamento.descricao,
      plataforma: pagamento.plataforma,
      valor: pagamento.valor,
      updatedAt: pagamento.updatedAt,
      createdAt: pagamento.createdAt,
      cliente: pagamento.cliente,
      pedido: pagamento.pedido,
    }));
  }

  findById(id: number): Promise<Pagamento> {
    return this.pagamentosRepository.findById(id);
  }
  remove(id: number) {
    return this.pagamentosRepository.remove(id);
  }
}
