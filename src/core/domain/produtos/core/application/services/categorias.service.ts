import { Injectable, Inject } from '@nestjs/common';
import { Categoria } from '../../domain/entities/categoria.entity';
import { ICategoriasRepository } from '../ports/repositories/categorias.repository';

import { CreateCategoriaDto } from '../../../dto/categorias/create-categoria.dto';
import { UpdateCategoriaDto } from '../../../dto/categorias/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(
    @Inject(ICategoriasRepository)
    private clientesRepository: ICategoriasRepository
    ) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.clientesRepository.create(createCategoriaDto);
  }

  findAll() {
    return this.clientesRepository.findAll();
  }

  findOne(id: number) {
    return this.clientesRepository.findOne(id);
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.clientesRepository.update(id, updateCategoriaDto);
  }

  remove(id: number) {
    return this.clientesRepository.remove(id);
  }
}
