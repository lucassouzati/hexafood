export class CategoriaInexistenteException extends Error {
    constructor() {
      super('A categoria informada não existe');
      this.name = 'CategoriaInexistenteException';
    }
  }
  