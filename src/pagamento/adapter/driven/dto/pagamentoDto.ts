import { ApiProperty } from '@nestjs/swagger';
import { Pagamento } from '../../../core/domain/entities/pagamento.entity';

export class PagamentoDto extends Pagamento {
  id: number;
}

export class CreatePagamentoDto {
  @ApiProperty()
  valor: number;

  @ApiProperty()
  id_pedido: number;

  @ApiProperty()
  cliente?: {
    nome?: string;
    email?: string;
    cpf?: string;
  };
}
