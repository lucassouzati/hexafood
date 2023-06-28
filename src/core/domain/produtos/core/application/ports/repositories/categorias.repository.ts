import { CreateCategoriaDto } from 'src/core/domain/produtos/dto/categorias/create-categoria.dto';
import { Categoria } from '../../../domain/entities/categoria.entity';
import { UpdateCategoriaDto } from 'src/core/domain/produtos/dto/categorias/update-categoria.dto';

export const ICategoriasRepository = 'ICategoriasRepository';

export interface ICategoriasRepository {
  create(createCategoriaDto: CreateCategoriaDto);

  findOne(id : number);

  findAll();

  update(id: number, updateCategoriaDto: UpdateCategoriaDto);

  remove(id: number);
}
