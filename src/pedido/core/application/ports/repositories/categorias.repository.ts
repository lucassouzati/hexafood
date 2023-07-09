import { Categoria } from 'src/pedido/core/domain/entities/categoria.entity';
import { CategoriaDto } from '../../../../adapter/driven/dto/categoria.dto';

export const ICategoriasRepository = 'ICategoriasRepository';

export interface ICategoriasRepository {
  create(createCategoriaDto: CategoriaDto);

  findOne(id : number);

  findAll(): Promise<Categoria[]>;

  update(id: number, updateCategoriaDto: CategoriaDto);

  remove(id: number);
}
