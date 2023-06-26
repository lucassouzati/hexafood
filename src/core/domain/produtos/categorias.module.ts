import { Module } from '@nestjs/common';
import { CategoriasService } from './core/application/services/categorias.service';
import { CategoriasController } from './adapter/driver/categorias.controller';

@Module({
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
