import { Pedido } from './pedido.entity';

export class Produto {
  id?: number;
  nome: string;
  id_categoria: number;
  valor: number;
  descricao: string;
  imagem: string;
  createdAt?: Date;
  updatedAt?: Date;
}

