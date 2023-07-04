import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdutosService } from '../../core/application/services/produtos.service';
import { Produto } from '../../core/domain/entities/produto.entity';

import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ProdutoDto } from '../driven/dto/produto.dto';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @ApiBody({ type: [ProdutoDto] })
  createManyProdutos(@Body() produto: ProdutoDto[]) {
    return this.produtosService.createManyProdutos(produto);
  }

  @Get(':id_categoria')
  async findByIdCategoria(
    @Param('id_categoria') id_categoria: number,
  ): Promise<Produto[] | null> {
    return await this.produtosService.findByIdCategoria(id_categoria);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() produto: ProdutoDto) {
    return this.produtosService.update(+id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
