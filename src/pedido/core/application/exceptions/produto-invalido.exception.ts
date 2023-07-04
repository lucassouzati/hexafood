export class ProdutoInvalidoException extends Error {
  constructor() {
    super('Campo(s)) não podem ser vazio(s)');
    this.name = 'ProdutoInvalidoException';
  }
}
