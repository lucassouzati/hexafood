import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PagamentosService } from "../../core/application/services/pagamentos.service";
import { CreatePagamentoDto } from "../../core/domain/entities/pagamento.entity";

@ApiTags('pagamentos')
@Controller('pagamentos')
export class PagamentosController {

  constructor(
    private readonly pagamentosService: PagamentosService
  ) { }

  @Post()
  create(@Body() createPagamentoDto: CreatePagamentoDto) {
    return this.pagamentosService.createPagamento(createPagamentoDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagamentosService.findById(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagamentosService.remove(+id);
  }
}
