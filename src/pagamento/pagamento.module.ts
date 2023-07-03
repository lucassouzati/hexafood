import { Module } from "@nestjs/common";
import { PagamentosController } from "./adapter/driver/pagamentos.controller";
import { PagamentosService } from "./core/application/services/pagamentos.service";

@Module({
  controllers: [PagamentosController],
  providers: [
    PagamentosService
  ]
})
export class PagamentoModule { }
