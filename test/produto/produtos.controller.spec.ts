import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from '../../src/pedido/adapter/driver/produtos.controller';
import { ProdutosService } from '../../src/pedido/core/application/services/produtos.service';

describe('ProdutosController', () => {
  let controller: ProdutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutosController],
      providers: [ProdutosService],
    }).compile();

    controller = module.get<ProdutosController>(ProdutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
