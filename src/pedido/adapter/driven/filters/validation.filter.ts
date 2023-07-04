import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { CategoriaInexistenteException } from '../../../core/application/exceptions/categoria-inexistente.exception';
import { PedidoInvalidoException } from '../../../core/application/exceptions/pedido-invalido.exception';
import { ProdutoInvalidoException } from '../../../core/application/exceptions/produto-invalido.exception';

@Catch(CategoriaInexistenteException, PedidoInvalidoException, ProdutoInvalidoException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(400).json({
      statusCode: 400,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: exception.message,
    });
  }
}
