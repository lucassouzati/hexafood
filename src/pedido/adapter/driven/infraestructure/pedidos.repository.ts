import { PrismaClient } from '@prisma/client';
import { IPedidosRepository } from '../../../core/application/ports/repositories/pedidos.repository';
import { StatusPedido } from 'src/pedido/core/domain/enum/status-pedido.enum';
import { Pedido } from 'src/pedido/core/domain/entities/pedido.entity';

export class PedidosRepository implements IPedidosRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  create(pedido: Pedido) {
    return this.prisma.pedido.create({
      data: {
        codigo_pedido: pedido.codigo_pedido,
        valor_total: pedido.valor_total,
        id_cliente: pedido.cliente ? pedido.cliente.id : null,
        status: pedido.status.toString(),
      },
    });
  }
  findAll(): Promise<Pedido[]> {
    return this.prisma.pedido
      .findMany({
        include: {
          cliente: true, // Inclui os dados do cliente
        },
      })
      .then((results) => {
        return results.map((result) => {
          const pedido = new Pedido();
          pedido.id = result.id;
          pedido.codigo_pedido = result.codigo_pedido;
          pedido.status =
            StatusPedido[result.status as keyof typeof StatusPedido];
          pedido.createdAt = result.createdAt;
          pedido.updatedAt = result.updatedAt;
          pedido.cliente = result.cliente;
          pedido.valor_total = result.valor_total;
          return pedido;
        });
      });
  }
  update(id: number, pedido: Pedido) {
    return this.prisma.pedido.update({
      where: {
        id,
      },
      data: {
        codigo_pedido: pedido.codigo_pedido,
        status: pedido.status.toString(),
        createdAt: pedido.createdAt,
        updatedAt: pedido.updatedAt,
        id_cliente: pedido.cliente ? pedido.cliente.id : null,
        valor_total: pedido.valor_total,
      },
    });
  }
  findByStatus(status: StatusPedido) {
    return this.prisma.pedido.findMany({
      where: { status: status.toString() },
    });
  }
}
