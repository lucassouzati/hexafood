import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ClienteDto {
  id?: number;

  @ApiProperty()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  cpf: string;

  createdAt?: Date;
}
