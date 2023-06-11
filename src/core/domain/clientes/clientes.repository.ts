import { PrismaClient } from '@prisma/client';
import { Cliente } from './entities/cliente.entity';


export class ClientesRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: Cliente): Promise<Cliente> {
    return this.prisma.cliente.create({ data });
  }
  
  async findUnique(cpf: string): Promise<Cliente | null> {
    return this.prisma.cliente.findUnique({
      where: { cpf },
    });
  }

}