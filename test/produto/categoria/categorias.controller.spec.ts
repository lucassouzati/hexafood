import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasController } from '../../../src/pedido/adapter/driver/categorias.controller';
import { CategoriasService } from '../../../src/pedido/core/application/services/categorias.service';

describe('CategoriasController', () => {
  let controller: CategoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasController],
      providers: [CategoriasService],
    }).compile();

    controller = module.get<CategoriasController>(CategoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
