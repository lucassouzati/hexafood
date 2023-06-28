import { CreateCategoriaDto } from '../../dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../../dto/update-categoria.dto';

export const ICategoriasRepository = 'ICategoriasRepository';

export interface ICategoriasRepository {
  create(createCategoriaDto: CreateCategoriaDto);

  findOne(id : number);

  findAll();

  update(id: number, updateCategoriaDto: UpdateCategoriaDto);

  remove(id: number);
}
