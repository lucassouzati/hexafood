import { ApiProperty } from '@nestjs/swagger';

export class ProdutoDto {
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
}
