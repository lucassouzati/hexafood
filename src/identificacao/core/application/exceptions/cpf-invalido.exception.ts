export class CpfInvalidoException extends Error {
  constructor() {
    super('CPF precisa ter exatamente 11 caracteres');
    this.name = 'CpfInvalidoException';
  }
}
