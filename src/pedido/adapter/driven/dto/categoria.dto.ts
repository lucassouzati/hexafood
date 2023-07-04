
import { ApiProperty } from '@nestjs/swagger';

export class CategoriaDto {
  @ApiProperty()
  name: string;
}
