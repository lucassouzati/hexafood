import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosService } from '../../src/pedido/core/application/services/produtos.service';
import { InMemoryProdutosRepository } from '../../src/pedido/adapter/driven/infraestructure/in-memory-produtos.repository';

describe('ProdutosService', () => {
  let service: ProdutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProdutosService,
          useValue: InMemoryProdutosRepository,
        },
        ProdutosService,
      ],
    }).compile();

    service = module.get<ProdutosService>(ProdutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
