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
        id_cliente: pedido.id_cliente,
        status: pedido.status.toString(),
        itens: {
          create: pedido.itens.map((item) => ({
            quantidade: item.quantidade,
            valor: item.valor,
            produto: {
              connect: {
                id: item.id_produto,
              },
            },
          })),
        },
      },
    });
  }
  findAll(status?: StatusPedido): Promise<Pedido[]> {
    return this.prisma.pedido
      .findMany({
        where: status ? { status: status.toString() } : undefined, // Filtrar por status, se ele for fornecido
        orderBy: {
          createdAt: 'asc', // Ordenar por data de criação, em ordem crescente
        },
        include: {
          cliente: true,
          itens: {
            include: {
              produto: true,
            },
          },
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
          pedido.itens = result.itens.map((item) => ({
            id: item.id,
            // numero_item: item.numero_item,
            quantidade: item.quantidade,
            valor: item.valor,
            id_produto: item.id_produto,
            produto: item.produto,
          }));
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
