import { ApiProperty } from '@nestjs/swagger';
import { ClienteDto } from './../../../../identificacao/adapter/driven/infrastructure/dto/cliente.dto';

export class CreatePedidoDto {
  @ApiProperty()
  cliente: ClienteDto;
  @ApiProperty()
  valor_total: number;
}
