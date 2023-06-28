import { Module } from '@nestjs/common';
import { CategoriasController } from './adapter/driver/categorias.controller';
import { CategoriasRepository } from './adapter/driven/infrastructure/categorias.repository';
import { ICategoriasRepository } from './core/application/ports/repositories/categorias.repository'
import { CategoriasService } from './core/application/services/categorias.service';

@Module({
  controllers: [CategoriasController],
  providers: [
    {
      provide: ICategoriasRepository,
      useClass: CategoriasRepository,
    },
    CategoriasService
  ],
})
export class CategoriasModule {}
