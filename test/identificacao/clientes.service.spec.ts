import { Test, TestingModule } from '@nestjs/testing';
import { IClientesRepository } from '../../src/identificacao/core/application/ports/repositories/clientes.repository';
import { ClientesService } from '../../src/identificacao/core/application/services/clientes.service';
import { InMemoryClientesRepository } from '../../src/identificacao/adapter/driven/infrastructure/in-memory-clientes.repository';
import { Cliente } from '../../src/identificacao/core/domain/entities/cliente.entity';
import { describe } from 'node:test';
import { CpfJaExistenteException } from '../../src/identificacao/core/application/exceptions/cpf-ja-existente.exception';
import { NomeInvalidoException } from '../../src/identificacao/core/application/exceptions/nome-invalido.exception';
import { CpfInvalidoException } from '../../src/identificacao/core/application/exceptions/cpf-invalido.exception';

describe('ClientesService', () => {
  let service: ClientesService;
  let repository: IClientesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: IClientesRepository,
          useClass: InMemoryClientesRepository,
        },
        ClientesService,
      ],
    }).compile();

    repository = module.get<IClientesRepository>(IClientesRepository);
    service = module.get<ClientesService>(ClientesService);
  });

  describe('create', () => {
    it('should create a new client and return it', async () => {
      const clienteData: Cliente = {
        id: 1,
        nome: 'Sr. Teste 1',
        cpf: '12345678901',
      };
      const result = await service.create(clienteData);
      expect(result).toEqual(clienteData);
    });
    it('should could not create a new Cliente with a cpf already in use', async () => {
      const clienteData: Cliente = {
        id: 1,
        nome: 'Sr. Teste 1',
        cpf: '12345678901',
      };

      //Força o repositório a retornar true
      jest.spyOn(repository, 'existsByCpf').mockResolvedValue(true);

      await expect(service.create(clienteData)).rejects.toThrowError(
        CpfJaExistenteException,
      );
    });
    it('should not create a new Cliente if the name is blank', async () => {
      const clienteData: Cliente = {
        id: 1,
        nome: '',
        cpf: '12345678901',
      };

      //Força o repositório a retornar true
      jest.spyOn(repository, 'existsByCpf').mockResolvedValue(true);

      await expect(service.create(clienteData)).rejects.toThrowError(
        NomeInvalidoException,
      );
    });
    it('should not create a new Cliente if the cpf is invalid', async () => {
      const clienteData: Cliente = {
        id: 1,
        nome: 'Sr. Teste 1',
        cpf: '123',
      };

      //Força o repositório a retornar true
      jest.spyOn(repository, 'existsByCpf').mockResolvedValue(true);

      await expect(service.create(clienteData)).rejects.toThrowError(
        CpfInvalidoException,
      );
    });
  });
});
