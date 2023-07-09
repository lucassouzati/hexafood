import { ApiProperty } from '@nestjs/swagger';
import { CreateItemDTO } from './item.dto';

export class PedidoDTO {
  @ApiProperty()
  id_cliente?: number;
  @ApiProperty({ type: () => [CreateItemDTO] })
  itens: CreateItemDTO[];
}
