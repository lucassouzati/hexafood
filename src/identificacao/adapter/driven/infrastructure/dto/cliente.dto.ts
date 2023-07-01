import { ApiProperty } from '@nestjs/swagger';

export class ClienteDto {
  id?: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  cpf: string;

  createdAt?: Date;
}
