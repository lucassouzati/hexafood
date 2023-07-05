import { PrismaClient } from "@prisma/client";
import { IPagamentosRepository } from "src/pagamento/core/application/ports/repositories/pagamentos.repository";
import { Pagamento } from "src/pagamento/core/domain/entities/pagamento.entity";
import { PagamentoDto } from "../dto/pagamentoDto";

export class PagamentosRepository implements IPagamentosRepository {

  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  createPagamento(data: Pagamento): Promise<PagamentoDto> {
    return this.prisma.pagamento.create({
      data: {
        ...data,
        id_cliente: data.id_cliente || null
      }
    })
  }


  findAll(): Promise<PagamentoDto[]> {
    return this.prisma.pagamento.findMany()
  }

  findById(id: number): Promise<PagamentoDto | null> {
    return this.prisma.pagamento.findUnique({
      where: { id },
    })
  }

  async remove(id: number) {
    return this.prisma.pagamento.delete({
      where: {
        id
      },
    })
  };

}
