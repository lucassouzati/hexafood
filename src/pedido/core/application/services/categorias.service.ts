import { Injectable, Inject } from '@nestjs/common';
import { ICategoriasRepository } from '../ports/repositories/categorias.repository';
import { CategoriaDto } from '../../../adapter/driven/dto/categoria.dto';
import { Categoria } from '../../domain/entities/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @Inject(ICategoriasRepository)
    private categoriasRepository: ICategoriasRepository
    ) {}

  create(createCategoriaDto: CategoriaDto) {
    return this.categoriasRepository.create(createCategoriaDto);
  }

  findAll() {
    return this.categoriasRepository.findAll();
  }

  findOne(id: number) {
    return this.categoriasRepository.findOne(id);
  }

  update(id: number, updateCategoriaDto: CategoriaDto) {
    return this.categoriasRepository.update(id, updateCategoriaDto);
  }

  remove(id: number) {
    return this.categoriasRepository.remove(id);
  }
}
