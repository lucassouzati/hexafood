import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriasService } from '../../core/application/services/categorias.service';
import { ApiTags } from '@nestjs/swagger';
import { CategoriaDto } from '../driven/dto/categoria.dto';


@ApiTags('categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly CategoriasService: CategoriasService) {}

  // @Post()
  // create(@Body() createCategoriaDto: CategoriaDto) {
  //   return this.CategoriasService.create(createCategoriaDto);
  // }

  @Get()
  findAll() {
    return this.CategoriasService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.CategoriasService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCategoriaDto: CategoriaDto) {
  //   return this.CategoriasService.update(+id, updateCategoriaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.CategoriasService.remove(+id);
  // }
}
