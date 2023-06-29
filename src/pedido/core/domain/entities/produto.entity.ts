import { ApiProperty } from '@nestjs/swagger';

export class Produto {
  id?: number;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  id_categoria: number;
  @ApiProperty()
  valor: number;

  @ApiProperty()
  descricao: string;

  @ApiProperty()
  imagem: string;

  createdAt?: Date;

  updatedAt?: Date;
}

// import { ApiProperty } from '@nestjs/swagger';

// export class CreateCategoriaDto {
//   @ApiProperty()
//   name: string;
// }
