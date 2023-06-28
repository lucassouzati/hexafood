import { PrismaClient } from '@prisma/client';
import { Categoria } from '../../../core/domain/entities/categoria.entity';
import { ICategoriasRepository } from './../../../core/application/ports/repositories/categorias.repository';
import { CreateCategoriaDto } from '../../../dto/categorias/create-categoria.dto';
import { UpdateCategoriaDto } from '../../../dto/categorias/update-categoria.dto';

export class CategoriasRepository implements ICategoriasRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  
  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria>{
    // return this.prisma.categoria.create({ createCategoriaDto })
    return
  };

  async findOne(id : number): Promise<Categoria | null> {
    // return this.prisma.categoria.findUnique({
    //   where: { id },
    // });
    return
  };

  async findAll(): Promise<Categoria | null> {
    // return this.prisma.categoria.findAll();
    return
  };

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria | null> {
    // var item = this.prisma.categoria.findUnique({
    //   where: { id },
    // });

    // return this.prisma.categoria.update(id, updateCategoriaDto)
    return
  };

  async remove(id: number): Promise<Categoria | null> {
    // var item = this.prisma.categoria.findUnique({
    //   where: { id },
    // });

    // return this.prisma.categoria.remove({item})
    return
  };
}
