export class NomeInvalidoException extends Error {
  constructor() {
    super('O nome não pode ser vazio');
    this.name = 'NomeInvalidoException';
  }
}
