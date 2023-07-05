export class Pagamento {
  id_cliente?: number;
  id_pedido: number;
  id_transacao: number;
  descricao: string;
  plataforma: string;
  valor: number;
  updatedAt?: Date;
  createdAt?: Date;
}

