export class CpfJaExistenteException extends Error {
  constructor() {
    super('CPF já existente');
    this.name = 'Já existe alguém cadastrado com esse CPF';
  }
}
