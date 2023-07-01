import { BadRequestException } from '@nestjs/common';

export class CpfAlreadyExistsException extends BadRequestException {
  constructor() {
    super('CPF já existente', {
      cause: new Error(),
      description: 'Já existe alguém cadastrado com esse CPF',
    });
  }
}
