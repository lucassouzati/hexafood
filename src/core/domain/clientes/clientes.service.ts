import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClientesRepository } from './clientes.repository';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(private clientesRepository: ClientesRepository) {}

  create(cliente: Cliente) {
    return this.clientesRepository.create(cliente);
  }


  findUnique(cpf: string){
    return this.clientesRepository.findUnique(cpf);
  }

  findAll(): Promise<Cliente[]> {
    return this.clientesRepository.findAll();
  }

}
