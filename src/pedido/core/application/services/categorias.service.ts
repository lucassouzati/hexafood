import { Injectable, Inject } from '@nestjs/common';
import { ICategoriasRepository } from '../ports/repositories/categorias.repository';
import { CreateCategoriaDto } from '../../../core/application/dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../../../core/application/dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(
    @Inject(ICategoriasRepository)
    private categoriasRepository: ICategoriasRepository
    ) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasRepository.create(createCategoriaDto);
  }

  findAll() {
    return this.categoriasRepository.findAll();
  }

  findOne(id: number) {
    return this.categoriasRepository.findOne(id);
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasRepository.update(id, updateCategoriaDto);
  }

  remove(id: number) {
    return this.categoriasRepository.remove(id);
  }
}
